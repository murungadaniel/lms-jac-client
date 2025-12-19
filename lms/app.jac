::py::
import os
import requests
from datetime import datetime
from dotenv import load_dotenv
import re

# Load environment variables
load_dotenv()
BOOK_PATH = "jac_book"   # local folder where chapter .md files live

def fetch_lessons_index():
    """
    Scan the local 'jac_book' directory for chapter_*.md files.
    Returns a sorted list of lesson metadata.
    """
    lessons = []
    if not os.path.exists(BOOK_PATH):
        print(f"Error: {BOOK_PATH} does not exist.")
        return []

    files = os.listdir(BOOK_PATH)
    # Filter for chapter_X.md files
    chapter_files = []
    for f in files:
        if f.startswith("chapter_") and f.endswith(".md"):
            chapter_files.append(f)

    # Sort by chapter number
    def get_chapter_num(filename):
        match = re.search(r"chapter_(\d+)\.md", filename)
        if match:
            return int(match.group(1))
        return 9999

    chapter_files.sort(key=get_chapter_num)

    for fname in chapter_files:
        chapter_num = get_chapter_num(fname)
        lesson_id = f"chapter_{chapter_num}"
        title = f"Chapter {chapter_num}"
        file_path = os.path.join(BOOK_PATH, fname)
        
        lessons.append({
            "id": lesson_id,
            "title": title,
            "description": f"Jac Book {title}",
            "github_path": file_path, # Repurposing this field for local path
        })
    
    return lessons

def fetch_lesson_content(file_path: str) -> str:
    """
    Read the markdown content of a single chapter from local disk.
    """
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return ""

def now_iso() -> str:
    return datetime.utcnow().isoformat() + "Z"

try:
    import google.generativeai as genai

    GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
    GEMINI_MODEL = os.environ.get("GEMINI_MODEL", "gemini-2.5-flash")

    if GEMINI_API_KEY:
        genai.configure(api_key=GEMINI_API_KEY)

    def ask_gemini(prompt: str) -> str:
        """
        Call Gemini to answer a Jac tutor question.
        """
        if not GEMINI_API_KEY:
            return "Gemini API key not configured on server."
        try:
            model = genai.GenerativeModel(GEMINI_MODEL)
            resp = model.generate_content(prompt)
            if hasattr(resp, "text") and resp.text:
                return resp.text
            return "Gemini returned no text."
        except Exception as e:
            return f"Error calling Gemini: {e}"
except ImportError:
    # Fallback if google-generativeai is not installed
    def ask_gemini(prompt: str) -> str:
        return "google-generativeai is not installed on the server. Ask your tutor to add it to requirements.txt."
::py::

# A learner; you can expand this later with auth, etc.
node User {
    has user_id: str;
    has name: str;
}

# A lesson = one chapter from the Jac Book
node Lesson {
    has lesson_id: str;      # e.g. "chapter_1"
    has title: str;          # human-readable title
    has description: str;    # optional short description
    has github_path: str;    # e.g. "docs/docs/jac_book/chapter_1.md"
}

# OSP: Concept Node representing a topic (e.g., "Walkers", "Nodes")
node Concept {
    has name: str;
}

# A user's progress/score on a lesson
node LessonAttempt {
    has user_id: str;
    has lesson_id: str;
    has status: str;          # e.g. "started", "completed"
    has timestamp: str = "";  # we will set this via now_iso()
    has score: float = 0.0;   # 0..1 for now
}

edge UserAttempt {}    # User --UserAttempt--> LessonAttempt
edge AttemptLesson {}  # LessonAttempt --AttemptLesson--> Lesson

# OSP Edges
edge Prerequisite {}        # Concept --Prerequisite--> Concept
edge Proficiency {          # User --Proficiency--> Concept
    has confidence: float = 0.0;
}
edge CoveredBy {            # Lesson --CoveredBy--> Concept
    has weight: float = 1.0;
}

# WALKER: Sync lessons from local jac_book folder
walker sync_lessons {
    can sync with `root entry {
        # Fetch list of .md files in jac_book folder
        lessons_data = fetch_lessons_index();

        # Build map of existing Lesson nodes by lesson_id
        existing_lessons = [-->(`?Lesson)];
        existing_by_id = {};
        for l in existing_lessons {
            existing_by_id[l.lesson_id] = l;
        }

        created = [];
        updated = [];

        # Upsert Lesson nodes
        for raw in lessons_data {
            id = raw["id"];
            title = raw["title"];
            description = raw["description"];
            github_path = raw["github_path"];

            lesson_node = None;

            if id in existing_by_id {
                lesson_node = existing_by_id[id];
                lesson_node.title = title;
                lesson_node.description = description;
                lesson_node.github_path = github_path;
                updated.append(lesson_node);
            } else {
                lesson_node = here ++> Lesson(
                    lesson_id   = id,
                    title       = title,
                    description = description,
                    github_path = github_path
                );
                created.append(lesson_node);
            }
        }

        report {
            "created": created,
            "updated": updated
        };
    }
}

# WALKER: Initialize OSP Graph (Concepts and default connections)
walker init_graph {
    can setup_graph with `root entry {
        # Define some basic concepts mapping to chapters
        # This is a basic mapping for the hackathon
        concepts_map = {
            "chapter_1": ["Introduction", "Setup"],
            "chapter_2": ["Jac Basics", "Hello World"],
            "chapter_3": ["Nodes", "Edges", "Graphs"],
            "chapter_4": ["Walkers", "Traversal"],
            "chapter_5": ["Data Types", "Variables"],
        };
        
        # 1. Ensure Concepts exist
        all_concepts = {};
        # Collect all unique concept names
        unique_names = [];
        for k in concepts_map {
            v_list = concepts_map[k];
            for name in v_list {
                if name not in unique_names { unique_names.append(name); }
            }
        }

        # Find existing concepts
        existing_concepts = [-->(`?Concept)];
        for c in existing_concepts {
            all_concepts[c.name] = c;
        }

        # Create missing concepts
        for name in unique_names {
            if name not in all_concepts {
                new_c = here ++> Concept(name=name);
                all_concepts[name] = new_c;
            }
        }

        # 2. Connect Lessons to Concepts
        lessons = [-->(`?Lesson)];
        lesson_map = {}; 
        for l in lessons { lesson_map[l.lesson_id] = l; }

        for lid in concepts_map {
            c_list = concepts_map[lid];
            if lid in lesson_map {
                lnode = lesson_map[lid];
                for cname in c_list {
                    cnode = all_concepts[cname];
                    # Check if edge exists to avoid dupes? 
                    # For simplicity, we assume we can just re-link or check simple existence
                    # Ideally we check: lnode -[CoveredBy]-> cnode
                    # Here we just add if not present (simplified)
                    found = False;
                    # We can't easily traverse generic list without filtering, so let's just re-add 
                    # or assume init_graph is run once. 
                    # For safety in hackathon, we can clear old COVERED_BY edges from this lesson first?
                    # Or just add blindly. Let's add blindly for now.
                    lnode +>:CoveredBy:+> cnode;
                }
            }
        }
        
        report {"status": "Graph initialized", "concepts": len(all_concepts)};
    }
}


# WALKER: List lessons (all chapters)
walker list_lessons {
    can list with `root entry {
        lessons = [-->(`?Lesson)];
        result = [];

        for l in lessons {
            result.append({
                "id": l.lesson_id,
                "title": l.title,
                "description": l.description,
            });
        }

        # you can sort here too if you like, but they are already stable from sync
        report result;
    }
}

# WALKER: Get single lesson + markdown content
walker get_lesson_detail {
    has lesson_id: str;

    can get with `root entry {
        lessons = [-->(`?Lesson)];
        target = None;

        for l in lessons {
            if l.lesson_id == self.lesson_id {
                target = l;
                break;
            }
        }

        if not target {
            report {
                "error": "lesson_not_found",
                "lesson_id": self.lesson_id
            };
            return;
        }

        content = "";
        if target.github_path {
            content = fetch_lesson_content(target.github_path);
        }

        report {
            "id": target.lesson_id,
            "title": target.title,
            "description": target.description,
            "github_path": target.github_path,
            "content": content
        };
    }
}

# WALKER: Record user progress/score on a lesson
walker record_attempt {
    has user_id: str;
    has lesson_id: str;
    has status: str;          # e.g. "started", "completed"
    has score: float = 0.0;   # 0..1

    can save with `root entry {
        # Ensure user exists
        users = [-->(`?User)];
        user_node = None;

        for u in users {
            if u.user_id == self.user_id {
                user_node = u;
                break;
            }
        }

        if not user_node {
            user_node = here ++> User(
                user_id = self.user_id,
                name    = self.user_id
            );
        }

        # Find lesson
        lessons = [-->(`?Lesson)];
        lesson_node = None;

        for l in lessons {
            if l.lesson_id == self.lesson_id {
                lesson_node = l;
                break;
            }
        }

        if not lesson_node {
            report {
                "error": "lesson_not_found",
                "lesson_id": self.lesson_id
            };
            return;
        }

        # Create attempt node + edges
        attempt = here ++> LessonAttempt(
            user_id   = self.user_id,
            lesson_id = self.lesson_id,
            status    = self.status,
            score     = self.score,
            timestamp = now_iso()
        );

        user_node +>:UserAttempt:+> attempt;
        attempt +>:AttemptLesson:+> lesson_node;
        
        # Trigger mastery update if completed
        if self.status == "quiz_completed" or self.status == "completed" {
            # We can spawn another walker or do it here.
            # Let's spawn a sub-walker for cleaner logic
            # user_node spawn update_mastery(lesson_node=lesson_node, score=self.score);
            print("Skipping mastery update for debug");
        }

        report {
            "attempt_id": attempt.jid,
            "user_id": attempt.user_id,
            "lesson_id": attempt.lesson_id,
            "status": attempt.status,
            "score": attempt.score,
            "timestamp": attempt.timestamp
        };
    }
}

# WALKER: Update user mastery based on completed lesson
walker update_mastery {
    has lesson_node: node;
    has score: float;

    can process_update with `root entry {
        print("Update mastery placeholder");
    }
}

walker get_user_skills {
    has user_id: str;
    can get with `root entry {
        users = [-->(`?User)];
        user_node = None;
        for u in users { if u.user_id == self.user_id { user_node = u; break; } }
        
        if not user_node { report []; return; }
        
        skills = [];
        # Mocking skills return to allow frontend testing
        # Real implementation requires correct edge traversal syntax or a helper
        all_concepts = [-->(`?Concept)];
        for c in all_concepts {
            skills.append({"concept": c.name, "confidence": 0.5}); 
        }
        report skills;
    }
}

# (Optional) WALKER: Get attempts for a user – for a "My Progress" page
walker get_user_attempts {
    has user_id: str;

    can get with `root entry {
        attempts = [-->(`?LessonAttempt)];
        result = [];

        for a in attempts {
            if a.user_id != self.user_id { continue; }

            result.append({
                "lesson_id": a.lesson_id,
                "status": a.status,
                "score": a.score,
                "timestamp": a.timestamp
            });
        }

        report result;
    }
}

walker ai_chat {
    has message: str;

    can chat with `root entry {
        full_prompt = """
You are JacTutor, a concise AI assistant helping students learn Jac programming and related concepts.

Answer the student's question with:
- Plain text only (no markdown, no bullet points, no headings, no bold).
- A direct, focused explanation of exactly what they asked.
- 3–6 short sentences unless they explicitly ask for a long or step-by-step answer.
- No introductions like "Sure!" or "Here's your answer".

Student question:
""" + self.message;

        reply = ask_gemini(full_prompt);
        report {"reply": reply};
    }
}


walker get_livekit_token {
    has id: str;      # user id, e.g. "demo_user"
    has room: str;    # room name, e.g. "jac-class-1"
    has url: str;     # LiveKit server URL (ws://... or wss://...)
    has token: str;   # LiveKit access token (JWT)

    can request with `root entry {
        #
        # NOTE: This is the minimal, compiling version.
        # ----------------------------------------------
        # 1. For local dev, LiveKit server default URL is usually:
        #      ws://localhost:7880
        # 2. Replace the hard-coded token with a real JWT generated by
        #    a small Python helper using livekit-api (see comment below).
        #
        
        url = "ws://localhost:7880";

        #
        # TODO: Replace this with a real LiveKit access token.
        token = "REPLACE_ME_WITH_REAL_LIVEKIT_JWT";

        report {
            "id": id,
            "room": room,
            "url": url,
            "token": token,
        };
    }
}

walker generate_quiz_questions {
    has lesson_id: str;
    has user_id: str = ""; # Optional, to personalize difficulty

    can ask with `root entry {
        # Fetch chapter content
        lessons = [-->(`?Lesson)];
        target = None;

        for l in lessons {
            if l.lesson_id == self.lesson_id {
                target = l;
                break;
            }
        }

        if not target {
            report {"error": "lesson_not_found"};
            return;
        }

        chapter = fetch_lesson_content(target.github_path);
        
        # Check user mastery to adjust difficulty
        difficulty = "Medium";
        if self.user_id {
             # Check profile
             # Simplified: If they have high confidence in related concepts, make it Hard
             # For now, just a placeholder logic
             print("Placeholder for difficulty check");
        }

        prompt = """
Generate 5 multiple choice questions (MCQs) from this Jac chapter.
Difficulty Level: """ + difficulty + """
Rules:
- Plain text only.
- No markdown.
- Each question must have exactly 4 options: A, B, C, D.
- Correct answer must be indicated as: Correct: A
- Keep questions short and based ONLY on the chapter.

Chapter:
""" + chapter;

        text = ask_gemini(prompt);
        report {"questions_raw": text};
    }
}
walker evaluate_answer {
    has question: str;
    has selected: str;

    can check with `root entry {
        prompt = """
Evaluate this MCQ answer.

Rules:
- Reply ONLY in this JSON format:
{"correct": true/false, "explanation": "short explanation"}

Do not add markdown.

Question:
""" + self.question + """

Student selected: """ + self.selected;

        reply = ask_gemini(prompt);
        report {"eval": reply};
    }
}
walker quiz_record_attempt {
    has user_id: str;
    has lesson_id: str;
    has correct: int;
    has wrong: int;

    can save with `root entry {
        
        score = 0.0;

        total = self.correct + self.wrong;
        if total > 0 {
            score = self.correct / total;
        }
        
        # Spawn record_attempt to reuse logic (User entry, mastery update)
        root spawn record_attempt(
            user_id = self.user_id, 
            lesson_id = self.lesson_id, 
            status = "quiz_completed", 
            score = score
        );

        report {
            "lesson_id": self.lesson_id,
            "correct": self.correct,
            "wrong": self.wrong,
            "score": score
        };
    }
}

# Entry block for quick sanity check
with entry {
    print("Jac Interactive Tutor backend loaded.");
    print("Available walkers:");
    print("  - sync_lessons");
    print("  - init_graph");
    print("  - list_lessons");
    print("  - get_lesson_detail");
    print("  - record_attempt");
    print("  - get_user_skills");
    
    # Auto-sync lessons on startup
    # root spawn sync_lessons;
    # root spawn init_graph;
}
