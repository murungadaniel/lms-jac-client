cl import from react { useState, useEffect }
cl import from "@jac-client/utils" {
    Router,
    Routes,
    Route,
    Link,
    jacLogin,
    jacSignup,
    jacSpawn,
    jacLogout,
    jacIsLoggedIn,
    useRouter,
    __getLocalStorage,
    __setLocalStorage
}
cl import from "react-router-dom" { HashRouter, useNavigate }

def Landing() -> any {
    return <div style={{
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#f0fdfa",
        "color": "#065f46",
        "fontFamily": "sans-serif"
    }}>
        <div style={{
            "textAlign": "center",
            "padding": "40px",
            "backgroundColor": "#ffffff",
            "borderRadius": "16px",
            "boxShadow": "0 10px 25px rgba(0,0,0,0.1)",
            "width": "400px"
        }}>
            <h1 style={{"fontSize": "3rem", "marginBottom": "1rem", "color": "#065f46"}}>
                Welcome to Jaseci Master
            </h1>
            <p style={{"fontSize": "1.25rem", "marginBottom": "3rem", "color": "#4b5563"}}>
                Your self-paced learning portal for Jac and Jaseci
            </p>
            <div style={{"display": "flex", "gap": "1rem", "justifyContent": "center"}}>
                <Link to="/login" style={{
                    "backgroundColor": "#065f46",
                    "color": "#ffffff",
                    "padding": "1rem 2rem",
                    "borderRadius": "8px",
                    "textDecoration": "none",
                    "fontWeight": "bold"
                }}>Login</Link>
                <Link to="/signup" style={{
                    "backgroundColor": "#ffffff",
                    "color": "#065f46",
                    "padding": "1rem 2rem",
                    "borderRadius": "8px",
                    "border": "2px solid #065f46",
                    "textDecoration": "none",
                    "fontWeight": "bold"
                }}>Sign Up</Link>
                {jacIsLoggedIn() and <Link to="/dashboard" style={{
                    "backgroundColor": "#10b981",
                    "color": "#ffffff",
                    "padding": "1rem 2rem",
                    "borderRadius": "8px",
                    "textDecoration": "none",
                    "fontWeight": "bold"
                }}>Go to Dashboard</Link>}
            </div>
        </div>
    </div>;
}

def Login() -> any {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let navigate = useNavigate();

    async def handleLogin(e: any) -> None {
        e.preventDefault();
        setError("");

        if not username or not password {
            setError("Please fill in all fields");
            return;
        }

        success = await jacLogin(username, password);
        if success {
            __setLocalStorage("jac_username", username);
            navigate("/dashboard");
        } else {
            setError("Invalid credentials");
        }
    }

    return <div style={{
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#f0fdfa"
    }}>
        <div style={{
            "backgroundColor": "#ffffff",
            "padding": "40px",
            "borderRadius": "12px",
            "boxShadow": "0 10px 25px rgba(0,0,0,0.1)",
            "width": "320px"
        }}>
            <h2 style={{"marginBottom": "24px", "textAlign": "center", "color": "#065f46"}}>
                Student Login
            </h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={lambda e: any -> None { setUsername(e.target.value); }}
                    placeholder="Username"
                    style={{
                        "width": "100%",
                        "padding": "12px",
                        "marginBottom": "12px",
                        "border": "1px solid #d1d5db",
                        "borderRadius": "8px",
                        "fontSize": "16px"
                    }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={lambda e: any -> None { setPassword(e.target.value); }}
                    placeholder="Password"
                    style={{
                        "width": "100%",
                        "padding": "12px",
                        "marginBottom": "12px",
                        "border": "1px solid #d1d5db",
                        "borderRadius": "8px",
                        "fontSize": "16px"
                    }}
                />
                {error and <div style={{"color": "#dc2626", "fontSize": "14px", "marginBottom": "12px", "textAlign": "center"}}>{error}</div>}
                <button type="submit" style={{
                    "width": "100%",
                    "padding": "12px",
                    "backgroundColor": "#065f46",
                    "color": "#ffffff",
                    "border": "none",
                    "borderRadius": "8px",
                    "fontWeight": "600",
                    "cursor": "pointer"
                }}>Login</button>
            </form>
            <p style={{"textAlign": "center", "marginTop": "20px", "fontSize": "14px", "color": "#4b5563"}}>
                Don't have an account? <Link to="/signup" style={{"color": "#065f46", "textDecoration": "underline"}}>Sign up</Link>
            </p>
        </div>
    </div>;
}

def Signup() -> any {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let navigate = useNavigate();

    async def handleSignup(e: any) -> None {
        e.preventDefault();
        setError("");

        if not username or not password {
            setError("Please fill in all fields");
            return;
        }

        result = await jacSignup(username, password);
        if result["success"] {
            navigate("/login");
        } else {
            setError(result["error"] if result["error"] else "Signup failed");
        }
    }

    return <div style={{
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#f0fdfa"
    }}>
        <div style={{
            "backgroundColor": "#ffffff",
            "padding": "40px",
            "borderRadius": "12px",
            "boxShadow": "0 10px 25px rgba(0,0,0,0.1)",
            "width": "320px"
        }}>
            <h2 style={{"marginBottom": "24px", "textAlign": "center", "color": "#065f46"}}>
                Student Sign Up
            </h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    value={username}
                    onChange={lambda e: any -> None { setUsername(e.target.value); }}
                    placeholder="Username"
                    style={{
                        "width": "100%",
                        "padding": "12px",
                        "marginBottom": "12px",
                        "border": "1px solid #d1d5db",
                        "borderRadius": "8px",
                        "fontSize": "16px"
                    }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={lambda e: any -> None { setPassword(e.target.value); }}
                    placeholder="Password"
                    style={{
                        "width": "100%",
                        "padding": "12px",
                        "marginBottom": "12px",
                        "border": "1px solid #d1d5db",
                        "borderRadius": "8px",
                        "fontSize": "16px"
                    }}
                />
                {error and <div style={{"color": "#dc2626", "fontSize": "14px", "marginBottom": "12px", "textAlign": "center"}}>{error}</div>}
                <button type="submit" style={{
                    "width": "100%",
                    "padding": "12px",
                    "backgroundColor": "#065f46",
                    "color": "#ffffff",
                    "border": "none",
                    "borderRadius": "8px",
                    "fontWeight": "600",
                    "cursor": "pointer"
                }}>Sign Up</button>
            </form>
            <p style={{"textAlign": "center", "marginTop": "20px", "fontSize": "14px", "color": "#4b5563"}}>
                Already have an account? <Link to="/login" style={{"color": "#065f46", "textDecoration": "underline"}}>Login</Link>
            </p>
        </div>
    </div>;
}

def Dashboard() -> any {
    let [lessons, setLessons] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");
    let router = useRouter();

    useEffect(lambda () -> None {
        if not jacIsLoggedIn() {
            router.navigate("/login");
            return;
        };
        async def loadLessons() -> None {
            try {
                # result = await jacSpawn(None, "list_lessons", {});
                result = await root spawn list_lessons();
                if result and result.reports {
                    setLessons(result.reports[0]);
                };
                setLoading(false);
            } except Exception as e {
                setError("Failed to load lessons: " + str(e));
                setLoading(false);
            };
        };
        loadLessons();
    });

    async def handleLogout() -> None {
        jacLogout();
        router.navigate("/login");
    }

    if loading {
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <div>Loading lessons...</div>
        </div>;
    }

    if error {
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <div style={{"color": "#dc2626"}}>{error}</div>
        </div>;
    }

    lesson_items = [];
    for lesson in lessons {
        lesson_items.append(
            <Link key={lesson.id} to={"/lesson/" + lesson.id} style={{"textDecoration": "none", "color": "inherit"}}>
                <div style={{"backgroundColor": "#ffffff", "padding": "24px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)", "cursor": "pointer"}}>
                    <h2 style={{"fontSize": "1.5rem", "color": "#065f46", "marginBottom": "12px", "marginTop": "0"}}>{lesson.title}</h2>
                    <p style={{"color": "#4b5563", "margin": "0"}}>{lesson.description}</p>
                </div>
            </Link>
        );
    }

    return <div style={{"minHeight": "100vh", "backgroundColor": "#f0fdfa", "padding": "40px"}}>
        <div style={{"maxWidth": "1200px", "margin": "0 auto"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "40px"}}>
                <h1 style={{"fontSize": "2.5rem", "color": "#065f46", "margin": "0"}}>Lessons</h1>
                <div style={{"display": "flex", "gap": "1rem"}}>
                    <Link to="/progress" style={{"padding": "0.75rem 1.5rem", "backgroundColor": "#10b981", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "600"}}>My Progress</Link>
                    <button onClick={handleLogout} style={{"padding": "0.75rem 1.5rem", "backgroundColor": "#dc2626", "color": "#ffffff", "border": "none", "borderRadius": "8px", "fontWeight": "600", "cursor": "pointer"}}>Logout</button>
                </div>
            </div>
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fill, minmax(300px, 1fr))", "gap": "24px"}}>
                {lesson_items}
            </div>
        </div>
    </div>;
}

def LessonDetail() -> any {
    let router = useRouter();
    let [lesson, setLesson] = useState(None);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");
    let [code, setCode] = useState("");
    let [output, setOutput] = useState("");
    let lessonId = router.params.id if router.params else "";

    useEffect(lambda () -> None {
        if not jacIsLoggedIn() {
            router.navigate("/login");
            return;
        };
        async def loadLesson() -> None {
            try {
                result = await jacSpawn(None, "get_lesson_detail", {"lesson_id": lessonId});
                if result and result.reports and not result.reports[0].error {
                    setLesson(result.reports[0]);
                    # Record that user started the lesson
                    try {
                        username = __getLocalStorage("jac_username");
                        if not username or username == "" { username = "guest"; };
                        await jacSpawn(None, "record_attempt", {"user_id": username, "lesson_id": lessonId, "status": "started", "score": 0.0});
                    } except Exception { }
                } else {
                    setError(result.reports[0].error if result.reports else "Lesson not found");
                };
                setLoading(false);
            } except Exception as e {
                setError("Failed to load lesson: " + str(e));
                setLoading(false);
            };
        };
        if lessonId { loadLesson(); };
    });

    def runCode() -> None {
        setOutput("Running...\n(Simulation: Code execution successful!)");
        # Here you would typically call a walker "exec_code" with the code
    }

    if loading {
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <div>Loading lesson...</div>
        </div>;
    }

    if error or not lesson {
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <div style={{"color": "#dc2626"}}>{error}</div>
        </div>;
    }

    return <div style={{"minHeight": "100vh", "backgroundColor": "#f0fdfa", "padding": "40px"}}>
        <div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "24px"}}>
            <div>
                <div style={{"marginBottom": "24px", "display": "flex", "gap": "1rem", "alignItems": "center"}}>
                    <Link to="/" style={{"padding": "0.5rem 1rem", "backgroundColor": "#065f46", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}>← Back</Link>
                    <Link to={"/quiz/" + lessonId} style={{"padding": "0.5rem 1rem", "backgroundColor": "#10b981", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}>Take Quiz</Link>
                    <Link to={"/chat/" + lessonId} style={{"padding": "0.5rem 1rem", "backgroundColor": "#3b82f6", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}>Ask Tutor</Link>
                </div>
                <div style={{"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)", "maxHeight": "80vh", "overflowY": "auto"}}>
                    <h1 style={{"fontSize": "2.5rem", "color": "#065f46", "marginBottom": "12px", "marginTop": "0"}}>{lesson.title}</h1>
                    <p style={{"color": "#4b5563", "marginBottom": "32px"}}>{lesson.description}</p>
                    <div style={{"borderTop": "1px solid #e5e7eb", "paddingTop": "32px", "whiteSpace": "pre-wrap", "fontFamily": "monospace", "lineHeight": "1.6"}}>{lesson.content}</div>
                </div>
            </div>
            
            <div style={{"display": "flex", "flexDirection": "column", "gap": "24px"}}>
                 <div style={{"backgroundColor": "#1e293b", "borderRadius": "12px", "padding": "16px", "color": "#ffffff", "boxShadow": "0 10px 25px rgba(0,0,0,0.2)", "flex": "1", "display": "flex", "flexDirection": "column"}}>
                    <div style={{"marginBottom": "12px", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                        <span style={{"fontWeight": "bold", "color": "#fbbf24"}}>Code Playground</span>
                        <button onClick={runCode} style={{"backgroundColor": "#22c55e", "color": "#fff", "border": "none", "padding": "8px 16px", "borderRadius": "6px", "cursor": "pointer", "fontWeight": "bold"}}>▶ Run</button>
                    </div>
                    <textarea 
                        value={code} 
                        onChange={lambda e: any -> None { setCode(e.target.value); }} 
                        placeholder="# Write your Jac code here..."
                        style={{"width": "100%", "flex": "1", "backgroundColor": "#0f172a", "color": "#f8fafc", "border": "none", "fontFamily": "monospace", "padding": "12px", "resize": "none", "outline": "none"}}
                    />
                </div>
                <div style={{"backgroundColor": "#0f172a", "borderRadius": "12px", "padding": "16px", "color": "#f8fafc", "height": "200px", "overflowY": "auto", "fontFamily": "monospace", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}>
                    <div style={{"color": "#94a3b8", "fontSize": "0.8rem", "marginBottom": "8px"}}>Output Terminal</div>
                    <pre style={{"margin": "0"}}>{output}</pre>
                </div>
            </div>
        </div>
    </div>;
}

def AIChat() -> any {
    let router = useRouter();
    let [messages, setMessages] = useState([]);
    let [input, setInput] = useState("");
    let [loading, setLoading] = useState(false);
    let lessonId = router.params.id if router.params else "";

    async def handleSend() -> None {
        if not input.trim() { return; }
        userMsg = {"role": "user", "text": input};
        newMessages = messages.slice();
        newMessages.push(userMsg);
        setMessages(newMessages);
        setInput("");
        setLoading(true);
        try {
            result = await jacSpawn(None, "ai_chat", {"message": input});
            if result and result.reports and result.reports[0].reply {
                newMessages = messages.slice();
                newMessages.push(userMsg);
                newMessages.push({"role": "assistant", "text": result.reports[0].reply});
                setMessages(newMessages);
            }
        } except Exception as e {
            newMessages = messages.slice();
            newMessages.push(userMsg);
            newMessages.push({"role": "error", "text": "Error: " + str(e)});
            setMessages(newMessages);
        };
        setLoading(false);
    }

    def createMessageItem(i: int, msg: any) -> any {
        return <div key={i} style={{"alignSelf": "flex-end" if msg.role == "user" else "flex-start", "maxWidth": "70%", "padding": "12px 16px", "borderRadius": "12px", "backgroundColor": "#ffffff" if msg.role == "user" else "#e0f2fe", "color": "#1f2937"}}>
            {msg.text}
        </div>;
    }

    msg_list = [];
    for i in range(len(messages)) {
        msg_list.append(createMessageItem(i, messages[i]));
    }
    
    return <div style={{"minHeight": "100vh", "backgroundColor": "#f0fdfa", "display": "flex", "flexDirection": "column"}}>
        <div style={{"maxWidth": "800px", "margin": "0 auto", "width": "100%", "display": "flex", "flexDirection": "column", "height": "100vh"}}>
            <div style={{"padding": "24px", "backgroundColor": "#065f46", "color": "#ffffff", "display": "flex", "gap": "1rem", "alignItems": "center"}}>
                <Link to={"/lesson/" + lessonId} style={{"color": "#ffffff", "textDecoration": "none"}}>← Back</Link>
                <h1 style={{"margin": "0", "flex": "1"}}>JacTutor AI</h1>
            </div>
            <div style={{"flex": "1", "overflowY": "auto", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
                {msg_list}
                {loading and <div style={{"alignSelf": "flex-start", "padding": "12px 16px", "borderRadius": "12px", "backgroundColor": "#e0f2fe"}}>Thinking...</div>}
            </div>
            <div style={{"padding": "24px", "backgroundColor": "#ffffff", "borderTop": "1px solid #e5e7eb", "display": "flex", "gap": "12px"}}>
                <input
                    type="text"
                    value={input}
                    onChange={lambda e: any -> None { setInput(e.target.value); }}
                    onKeyPress={lambda e: any -> None { if e.key == "Enter" { handleSend(); } }}
                    placeholder="Ask a question about Jac..."
                    style={{"flex": "1", "padding": "12px", "border": "1px solid #d1d5db", "borderRadius": "8px", "fontSize": "16px"}}
                />
                <button onClick={handleSend} disabled={loading} style={{"padding": "12px 24px", "backgroundColor": "#065f46", "color": "#ffffff", "border": "none", "borderRadius": "8px", "fontWeight": "600", "cursor": "pointer"}}>Send</button>
            </div>
        </div>
    </div>;
}

def Quiz() -> any {
    let router = useRouter();
    let [questions, setQuestions] = useState([]);
    let [currentQuestion, setCurrentQuestion] = useState(0);
    let [selectedAnswers, setSelectedAnswers] = useState({});
    let [results, setResults] = useState(None);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");
    let lessonId = router.params.id if router.params else "";

    async def loadQuestions() -> None {
        setLoading(true);
        setError("");
        try {
            # Pass user_id for adaptive difficulty
            username = __getLocalStorage("jac_username");
            if not username or username == "" { username = "guest"; };
            
            result = await jacSpawn(None, "generate_quiz_questions", {"lesson_id": lessonId, "user_id": username});
            if result and result.reports and result.reports[0].questions_raw {
                # Parse questions from raw text (simple parsing)
                rawText = result.reports[0].questions_raw;
                # This is a simplified parser - in production you'd want more robust parsing
                parsed = parseQuizQuestions(rawText);
                setQuestions(parsed);
            } else {
                setError("Failed to generate questions");
            }
        } except Exception as e {
            setError("Error: " + str(e));
        };
        setLoading(false);
    }

    def parseQuizQuestions(text: str) -> list {
        # Simple parser - split by question numbers and extract options
        questions = [];
        lines = text.split("\n");
        currentQ = None;
        for line in lines {
            # Use basic string operations compatible with JavaScript
            trimmed = line.strip();
            if not trimmed { continue; }
            # Check if it's a question (starts with number or Q)
            firstChar = trimmed[0] if len(trimmed) > 0 else "";
            isDigit = firstChar >= "0" and firstChar <= "9";
            if (isDigit and "." in trimmed) or trimmed.startswith("Q") {
                if currentQ { questions.append(currentQ); }
                currentQ = {"question": trimmed, "options": [], "correct": ""};
            } elif trimmed.startswith("A.") or trimmed.startswith("B.") or trimmed.startswith("C.") or trimmed.startswith("D.") {
                if currentQ { currentQ.options.append(trimmed); }
            } elif "Correct:" in trimmed or "Answer:" in trimmed {
                if currentQ {
                    parts = trimmed.split(":");
                    if len(parts) > 1 { 
                        currentQ.correct = parts[1].strip();
                    };
                };
            };
        }
        if currentQ { questions.append(currentQ); }
        return questions;
    }

    async def handleSubmit() -> None {
        correct = 0;
        wrong = 0;
        idx = 0;
        while idx < len(questions) {
            q = questions[idx];
            key = str(idx);
            selected = selectedAnswers[key] if key in selectedAnswers else "";
            # Simple evaluation - check if selected matches correct
            if selected == q.correct {
                correct = correct + 1;
            } else {
                wrong = wrong + 1;
            };
            idx = idx + 1;
        }
        # Record attempt
        try {
            username = __getLocalStorage("jac_username");
            if not username or username == "" { username = "guest"; }
            await jacSpawn(None, "quiz_record_attempt", {"user_id": username, "lesson_id": lessonId, "correct": correct, "wrong": wrong});
        } except Exception { }
        setResults({"correct": correct, "wrong": wrong, "total": correct + wrong});
    }

    useEffect(lambda () -> None {
        if lessonId { loadQuestions(); };
    });

    if loading {
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <div>Generating quiz questions...</div>
        </div>;
    }

    if error {
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <div style={{"color": "#dc2626"}}>{error}</div>
        </div>;
    }

    if results {
        score = (results.correct / results.total * 100) if results.total > 0 else 0;
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f0fdfa"}}>
            <div style={{"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)", "textAlign": "center", "maxWidth": "500px"}}>
                <h1 style={{"fontSize": "2rem", "color": "#065f46", "marginBottom": "24px"}}>Quiz Complete!</h1>
                <div style={{"fontSize": "3rem", "color": "#10b981", "marginBottom": "24px", "fontWeight": "bold"}}>{round(score)}%</div>
                <p style={{"fontSize": "1.25rem", "color": "#4b5563", "marginBottom": "32px"}}>
                    You got {results.correct} out of {results.total} correct
                </p>
                <div style={{"display": "flex", "gap": "1rem", "justifyContent": "center"}}>
                    <Link to={"/lesson/" + lessonId} style={{"padding": "0.75rem 1.5rem", "backgroundColor": "#065f46", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}>Back to Lesson</Link>
                    <Link to="/" style={{"padding": "0.75rem 1.5rem", "backgroundColor": "#10b981", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}>Dashboard</Link>
                </div>
            </div>
        </div>;
    }

    if not questions or len(questions) == 0 {
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <div>No questions available</div>
        </div>;
    }

    q = questions[currentQuestion];
    
    def createOptionItem(i: int, opt: str) -> any {
        optionKey = ["A", "B", "C", "D"][i] if i < 4 else str(i);
        qKey = str(currentQuestion);
        isSelected = (selectedAnswers[qKey] if qKey in selectedAnswers else "") == optionKey;
        
        return <div
            key={i}
            onClick={lambda e: any -> None {
                newSelected = selectedAnswers.copy();
                newSelected[str(currentQuestion)] = (["A", "B", "C", "D"][i] if i < 4 else str(i));
                setSelectedAnswers(newSelected);
            }}
            style={{"padding": "16px", "border": "2px solid " + ("#065f46" if isSelected else "#d1d5db"), "borderRadius": "8px", "cursor": "pointer", "backgroundColor": "#f9fafb" if isSelected else "#ffffff"}}
        >
            {opt}
        </div>;
    }

    option_list = [];
    for i in range(len(q.options)) {
        option_list.append(createOptionItem(i, q.options[i]));
    }

    def handlePrevious() -> None {
        setCurrentQuestion(max(0, currentQuestion - 1));
    }

    def handleNext() -> None {
        setCurrentQuestion(min(len(questions) - 1, currentQuestion + 1));
    }

    return <div style={{"minHeight": "100vh", "backgroundColor": "#f0fdfa", "padding": "40px"}}>
        <div style={{"maxWidth": "800px", "margin": "0 auto"}}>
            <div style={{"marginBottom": "24px", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                <Link to={"/lesson/" + lessonId} style={{"padding": "0.5rem 1rem", "backgroundColor": "#065f46", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}>← Back</Link>
                <div style={{"color": "#4b5563"}}>Question {currentQuestion + 1} of {len(questions)}</div>
            </div>
            <div style={{"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}>
                <h2 style={{"fontSize": "1.5rem", "color": "#065f46", "marginBottom": "32px"}}>{q.question}</h2>
                <div style={{"display": "flex", "flexDirection": "column", "gap": "16px", "marginBottom": "32px"}}>
                    {option_list}
                </div>
                <div style={{"display": "flex", "gap": "1rem", "justifyContent": "space-between"}}>
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestion == 0}
                        style={{"padding": "0.75rem 1.5rem", "backgroundColor": "#6b7280", "color": "#ffffff", "border": "none", "borderRadius": "8px", "cursor": "pointer", "opacity": "0.5" if currentQuestion == 0 else "1"}}
                    >
                        Previous
                    </button>
                    {(
                        <button
                            onClick={handleSubmit}
                            style={{"padding": "0.75rem 1.5rem", "backgroundColor": "#10b981", "color": "#ffffff", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontWeight": "600"}}
                        >
                            Submit Quiz
                        </button>
                    ) if currentQuestion == len(questions) - 1 else (
                        <button
                            onClick={handleNext}
                            style={{"padding": "0.75rem 1.5rem", "backgroundColor": "#065f46", "color": "#ffffff", "border": "none", "borderRadius": "8px", "cursor": "pointer"}}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    </div>;
}

def Progress() -> any {
    let [attempts, setAttempts] = useState([]);
    let [skills, setSkills] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");
    let router = useRouter();

    useEffect(lambda () -> None {
        if not jacIsLoggedIn() {
            router.navigate("/login");
            return;
        };
        async def loadProgress() -> None {
            try {
                username = __getLocalStorage("jac_username");
                if not username or username == "" { username = "guest"; };
                
                # Load Attempts
                #resultAttempts = await jacSpawn(None, "get_user_attempts", {"user_id": username});
                resultAttempts = await root spawn get_user_attempts(user_id=username);
                if resultAttempts and resultAttempts.reports {
                    setAttempts(resultAttempts.reports[0]);
                };
                
                # Load Skills
                #resultSkills = await jacSpawn(None, "get_user_skills", {"user_id": username});
                resultSkills = await root spawn get_user_skills(user_id=username);
                if resultSkills and resultSkills.reports {
                    setSkills(resultSkills.reports[0]);
                };
                
                setLoading(false);
            } except Exception as e {
                setError("Failed to load progress: " + str(e));
                setLoading(false);
            };
        };
        loadProgress();
    });

    if loading {
        return <div style={{"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <div>Loading progress...</div>
        </div>;
    }


    def createAttemptItem(i: int, attempt: any) -> any {
        scorePercent = (attempt.score * 100) if attempt.score else 0;
        return <div key={i} style={{"backgroundColor": "#ffffff", "padding": "24px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                <div>
                    <h3 style={{"fontSize": "1.25rem", "color": "#065f46", "margin": "0 0 8px 0"}}>{attempt.lesson_id}</h3>
                    <p style={{"color": "#6b7280", "margin": "0 0 8px 0"}}>Status: {attempt.status}</p>
                    <p style={{"color": "#6b7280", "margin": "0", "fontSize": "0.875rem"}}>{attempt.timestamp}</p>
                </div>
                <div style={{"textAlign": "right"}}>
                    <div style={{"fontSize": "2rem", "fontWeight": "bold", "color": "#10b981"}}>{round(scorePercent)}%</div>
                    <div style={{"color": "#6b7280", "fontSize": "0.875rem"}}>Score</div>
                </div>
            </div>
        </div>;
    }
    
    def createSkillItem(i: int, skill: any) -> any {
        conf = skill.confidence * 100;
        return <div key={i} style={{"padding": "12px", "borderBottom": "1px solid #e5e7eb"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "marginBottom": "8px"}}>
                <span style={{"fontWeight": "600", "color": "#1f2937"}}>{skill.concept}</span>
                <span style={{"color": "#065f46", "fontWeight": "bold"}}>{round(conf)}%</span>
            </div>
            <div style={{"height": "8px", "backgroundColor": "#e5e7eb", "borderRadius": "4px", "overflow": "hidden"}}>
                <div style={{"width": str(conf) + "%", "height": "100%", "backgroundColor": "#10b981"}}></div>
            </div>
        </div>;
    }

    attempt_list = [];
    for i in range(len(attempts)) {
        attempt_list.append(createAttemptItem(i, attempts[i]));
    }
    
    skill_list = [];
    for i in range(len(skills)) {
        skill_list.append(createSkillItem(i, skills[i]));
    }

    return <div style={{"minHeight": "100vh", "backgroundColor": "#f0fdfa", "padding": "40px"}}>
        <div style={{"maxWidth": "1200px", "margin": "0 auto"}}>
            <div style={{"marginBottom": "40px", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                <h1 style={{"fontSize": "2.5rem", "color": "#065f46", "margin": "0"}}>My Progress</h1>
                <Link to="/" style={{"padding": "0.75rem 1.5rem", "backgroundColor": "#065f46", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "600"}}>← Dashboard</Link>
            </div>
            {error and <div style={{"color": "#dc2626", "marginBottom": "24px"}}>{error}</div>}
            
            <div style={{"display": "grid", "gridTemplateColumns": "2fr 1fr", "gap": "24px"}}>
                <div>
                     <h2 style={{"fontSize": "1.5rem", "color": "#065f46", "marginBottom": "16px"}}>Recent Activity</h2>
                    {(
                        <div style={{"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "textAlign": "center", "color": "#4b5563"}}>
                            No progress yet. Start a lesson to track your progress!
                        </div>
                    ) if len(attempts) == 0 else (
                        <div style={{"display": "grid", "gap": "24px"}}>
                            {attempt_list}
                        </div>
                    )}
                </div>
                
                <div>
                    <h2 style={{"fontSize": "1.5rem", "color": "#065f46", "marginBottom": "16px"}}>Skill Map</h2>
                    <div style={{"backgroundColor": "#ffffff", "padding": "24px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}>
                         {(
                            <div style={{"color": "#6b7280", "textAlign": "center"}}>Skills will appear here as you learn.</div>
                        ) if len(skills) == 0 else (
                            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                                {skill_list}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    </div>;
}

def app() -> any {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lesson/:id" element={<LessonDetail />} />
            <Route path="/chat/:id" element={<AIChat />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/progress" element={<Progress />} />
        </Routes>
    </HashRouter>;
}