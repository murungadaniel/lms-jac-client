import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
import { Router, Routes, Route, Link, jacLogin, jacSignup, jacSpawn, jacLogout, jacIsLoggedIn, useRouter, __getLocalStorage, __setLocalStorage } from "@jac-client/utils";
import { HashRouter, useNavigate } from "react-router-dom";
function Landing() {
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f0fdfa", "color": "#065f46", "fontFamily": "sans-serif"}}, [__jacJsx("div", {"style": {"textAlign": "center", "padding": "40px", "backgroundColor": "#ffffff", "borderRadius": "16px", "boxShadow": "0 10px 25px rgba(0,0,0,0.1)", "width": "400px"}}, [__jacJsx("h1", {"style": {"fontSize": "3rem", "marginBottom": "1rem", "color": "#065f46"}}, ["Welcome to Jaseci Master"]), __jacJsx("p", {"style": {"fontSize": "1.25rem", "marginBottom": "3rem", "color": "#4b5563"}}, ["Your self-paced learning portal for Jac and Jaseci"]), __jacJsx("div", {"style": {"display": "flex", "gap": "1rem", "justifyContent": "center"}}, [__jacJsx(Link, {"to": "/login", "style": {"backgroundColor": "#065f46", "color": "#ffffff", "padding": "1rem 2rem", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "bold"}}, ["Login"]), __jacJsx(Link, {"to": "/signup", "style": {"backgroundColor": "#ffffff", "color": "#065f46", "padding": "1rem 2rem", "borderRadius": "8px", "border": "2px solid #065f46", "textDecoration": "none", "fontWeight": "bold"}}, ["Sign Up"]), jacIsLoggedIn() && __jacJsx(Link, {"to": "/dashboard", "style": {"backgroundColor": "#10b981", "color": "#ffffff", "padding": "1rem 2rem", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "bold"}}, ["Go to Dashboard"])])])]);
}
function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    let success = await jacLogin(username, password);
    if (success) {
      __setLocalStorage("jac_username", username);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f0fdfa"}}, [__jacJsx("div", {"style": {"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "boxShadow": "0 10px 25px rgba(0,0,0,0.1)", "width": "320px"}}, [__jacJsx("h2", {"style": {"marginBottom": "24px", "textAlign": "center", "color": "#065f46"}}, ["Student Login"]), __jacJsx("form", {"onSubmit": handleLogin}, [__jacJsx("input", {"type": "text", "value": username, "onChange": e => {
    setUsername(e.target.value);
  }, "placeholder": "Username", "style": {"width": "100%", "padding": "12px", "marginBottom": "12px", "border": "1px solid #d1d5db", "borderRadius": "8px", "fontSize": "16px"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": e => {
    setPassword(e.target.value);
  }, "placeholder": "Password", "style": {"width": "100%", "padding": "12px", "marginBottom": "12px", "border": "1px solid #d1d5db", "borderRadius": "8px", "fontSize": "16px"}}, []), error && __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "12px", "textAlign": "center"}}, [error]), __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "12px", "backgroundColor": "#065f46", "color": "#ffffff", "border": "none", "borderRadius": "8px", "fontWeight": "600", "cursor": "pointer"}}, ["Login"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "20px", "fontSize": "14px", "color": "#4b5563"}}, ["Don't have an account? ", __jacJsx(Link, {"to": "/signup", "style": {"color": "#065f46", "textDecoration": "underline"}}, ["Sign up"])])])]);
}
function Signup() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    let result = await jacSignup(username, password);
    if (result["success"]) {
      navigate("/login");
    } else {
      setError(result["error"] ? result["error"] : "Signup failed");
    }
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f0fdfa"}}, [__jacJsx("div", {"style": {"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "boxShadow": "0 10px 25px rgba(0,0,0,0.1)", "width": "320px"}}, [__jacJsx("h2", {"style": {"marginBottom": "24px", "textAlign": "center", "color": "#065f46"}}, ["Student Sign Up"]), __jacJsx("form", {"onSubmit": handleSignup}, [__jacJsx("input", {"type": "text", "value": username, "onChange": e => {
    setUsername(e.target.value);
  }, "placeholder": "Username", "style": {"width": "100%", "padding": "12px", "marginBottom": "12px", "border": "1px solid #d1d5db", "borderRadius": "8px", "fontSize": "16px"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": e => {
    setPassword(e.target.value);
  }, "placeholder": "Password", "style": {"width": "100%", "padding": "12px", "marginBottom": "12px", "border": "1px solid #d1d5db", "borderRadius": "8px", "fontSize": "16px"}}, []), error && __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "12px", "textAlign": "center"}}, [error]), __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "12px", "backgroundColor": "#065f46", "color": "#ffffff", "border": "none", "borderRadius": "8px", "fontWeight": "600", "cursor": "pointer"}}, ["Sign Up"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "20px", "fontSize": "14px", "color": "#4b5563"}}, ["Already have an account? ", __jacJsx(Link, {"to": "/login", "style": {"color": "#065f46", "textDecoration": "underline"}}, ["Login"])])])]);
}
function Dashboard() {
  let [lessons, setLessons] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  let router = useRouter();
  useEffect(() => {
    if (!jacIsLoggedIn()) {
      router.navigate("/login");
      return;
    }
    async function loadLessons() {
      try {
        let result = await jacSpawn(null, "list_lessons", {});
        if (result && result.reports) {
          setLessons(result.reports[0]);
        }
        setLoading(false);
      } catch (e) {
        setError("Failed to load lessons: " + func(e));
        setLoading(false);
      }
    }
    loadLessons();
  });
  async function handleLogout() {
    jacLogout();
    router.navigate("/login");
  }
  if (loading) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}, [__jacJsx("div", {}, ["Loading lessons..."])]);
  }
  if (error) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}, [__jacJsx("div", {"style": {"color": "#dc2626"}}, [error])]);
  }
  let lesson_items = [];
  for (const lesson of lessons) {
    lesson_items.append(__jacJsx(Link, {"key": lesson.id, "to": "/lesson/" + lesson.id, "style": {"textDecoration": "none", "color": "inherit"}}, [__jacJsx("div", {"style": {"backgroundColor": "#ffffff", "padding": "24px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)", "cursor": "pointer"}}, [__jacJsx("h2", {"style": {"fontSize": "1.5rem", "color": "#065f46", "marginBottom": "12px", "marginTop": "0"}}, [lesson.title]), __jacJsx("p", {"style": {"color": "#4b5563", "margin": "0"}}, [lesson.description])])]));
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f0fdfa", "padding": "40px"}}, [__jacJsx("div", {"style": {"maxWidth": "1200px", "margin": "0 auto"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "40px"}}, [__jacJsx("h1", {"style": {"fontSize": "2.5rem", "color": "#065f46", "margin": "0"}}, ["Lessons"]), __jacJsx("div", {"style": {"display": "flex", "gap": "1rem"}}, [__jacJsx(Link, {"to": "/progress", "style": {"padding": "0.75rem 1.5rem", "backgroundColor": "#10b981", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "600"}}, ["My Progress"]), __jacJsx("button", {"onClick": handleLogout, "style": {"padding": "0.75rem 1.5rem", "backgroundColor": "#dc2626", "color": "#ffffff", "border": "none", "borderRadius": "8px", "fontWeight": "600", "cursor": "pointer"}}, ["Logout"])])]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "repeat(auto-fill, minmax(300px, 1fr))", "gap": "24px"}}, [lesson_items])])]);
}
function LessonDetail() {
  let router = useRouter();
  let [lesson, setLesson] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  let [code, setCode] = useState("");
  let [output, setOutput] = useState("");
  let lessonId = router.params ? router.params.id : "";
  useEffect(() => {
    if (!jacIsLoggedIn()) {
      router.navigate("/login");
      return;
    }
    async function loadLesson() {
      try {
        let result = await jacSpawn(null, "get_lesson_detail", {"lesson_id": lessonId});
        if (result && result.reports && !result.reports[0].error) {
          setLesson(result.reports[0]);
          try {
            let username = __getLocalStorage("jac_username");
            if (!username || username === "") {
              username = "guest";
            }
            await jacSpawn(null, "record_attempt", {"user_id": username, "lesson_id": lessonId, "status": "started", "score": 0.0});
          } catch {}
        } else {
          setError(result.reports ? result.reports[0].error : "Lesson not found");
        }
        setLoading(false);
      } catch (e) {
        setError("Failed to load lesson: " + func(e));
        setLoading(false);
      }
    }
    if (lessonId) {
      loadLesson();
    }
  });
  function runCode() {
    setOutput("Running...\\n(Simulation: Code execution successful!)");
  }
  if (loading) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}, [__jacJsx("div", {}, ["Loading lesson..."])]);
  }
  if (error || !lesson) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}, [__jacJsx("div", {"style": {"color": "#dc2626"}}, [error])]);
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f0fdfa", "padding": "40px"}}, [__jacJsx("div", {"style": {"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "24px"}}, [__jacJsx("div", {}, [__jacJsx("div", {"style": {"marginBottom": "24px", "display": "flex", "gap": "1rem", "alignItems": "center"}}, [__jacJsx(Link, {"to": "/", "style": {"padding": "0.5rem 1rem", "backgroundColor": "#065f46", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}, ["← Back"]), __jacJsx(Link, {"to": "/quiz/" + lessonId, "style": {"padding": "0.5rem 1rem", "backgroundColor": "#10b981", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}, ["Take Quiz"]), __jacJsx(Link, {"to": "/chat/" + lessonId, "style": {"padding": "0.5rem 1rem", "backgroundColor": "#3b82f6", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}, ["Ask Tutor"])]), __jacJsx("div", {"style": {"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)", "maxHeight": "80vh", "overflowY": "auto"}}, [__jacJsx("h1", {"style": {"fontSize": "2.5rem", "color": "#065f46", "marginBottom": "12px", "marginTop": "0"}}, [lesson.title]), __jacJsx("p", {"style": {"color": "#4b5563", "marginBottom": "32px"}}, [lesson.description]), __jacJsx("div", {"style": {"borderTop": "1px solid #e5e7eb", "paddingTop": "32px", "whiteSpace": "pre-wrap", "fontFamily": "monospace", "lineHeight": "1.6"}}, [lesson.content])])]), __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "24px"}}, [__jacJsx("div", {"style": {"backgroundColor": "#1e293b", "borderRadius": "12px", "padding": "16px", "color": "#ffffff", "boxShadow": "0 10px 25px rgba(0,0,0,0.2)", "flex": "1", "display": "flex", "flexDirection": "column"}}, [__jacJsx("div", {"style": {"marginBottom": "12px", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("span", {"style": {"fontWeight": "bold", "color": "#fbbf24"}}, ["Code Playground"]), __jacJsx("button", {"onClick": runCode, "style": {"backgroundColor": "#22c55e", "color": "#fff", "border": "none", "padding": "8px 16px", "borderRadius": "6px", "cursor": "pointer", "fontWeight": "bold"}}, ["▶ Run"])]), __jacJsx("textarea", {"value": code, "onChange": e => {
    setCode(e.target.value);
  }, "placeholder": "# Write your Jac code here...", "style": {"width": "100%", "flex": "1", "backgroundColor": "#0f172a", "color": "#f8fafc", "border": "none", "fontFamily": "monospace", "padding": "12px", "resize": "none", "outline": "none"}}, [])]), __jacJsx("div", {"style": {"backgroundColor": "#0f172a", "borderRadius": "12px", "padding": "16px", "color": "#f8fafc", "height": "200px", "overflowY": "auto", "fontFamily": "monospace", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"color": "#94a3b8", "fontSize": "0.8rem", "marginBottom": "8px"}}, ["Output Terminal"]), __jacJsx("pre", {"style": {"margin": "0"}}, [output])])])])]);
}
function AIChat() {
  let router = useRouter();
  let [messages, setMessages] = useState([]);
  let [input, setInput] = useState("");
  let [loading, setLoading] = useState(false);
  let lessonId = router.params ? router.params.id : "";
  async function handleSend() {
    if (!input.trim()) {
      return;
    }
    let userMsg = {"role": "user", "text": input};
    let newMessages = messages.slice();
    newMessages.push(userMsg);
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      let result = await jacSpawn(null, "ai_chat", {"message": input});
      if (result && result.reports && result.reports[0].reply) {
        newMessages = messages.slice();
        newMessages.push(userMsg);
        newMessages.push({"role": "assistant", "text": result.reports[0].reply});
        setMessages(newMessages);
      }
    } catch (e) {
      newMessages = messages.slice();
      newMessages.push(userMsg);
      newMessages.push({"role": "error", "text": "Error: " + func(e)});
      setMessages(newMessages);
    }
    setLoading(false);
  }
  function createMessageItem(i, msg) {
    return __jacJsx("div", {"key": i, "style": {"alignSelf": msg.role === "user" ? "flex-end" : "flex-start", "maxWidth": "70%", "padding": "12px 16px", "borderRadius": "12px", "backgroundColor": msg.role === "user" ? "#ffffff" : "#e0f2fe", "color": "#1f2937"}}, [msg.text]);
  }
  let msg_list = [];
  for (const i of range(len(messages))) {
    msg_list.append(createMessageItem(i, messages[i]));
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f0fdfa", "display": "flex", "flexDirection": "column"}}, [__jacJsx("div", {"style": {"maxWidth": "800px", "margin": "0 auto", "width": "100%", "display": "flex", "flexDirection": "column", "height": "100vh"}}, [__jacJsx("div", {"style": {"padding": "24px", "backgroundColor": "#065f46", "color": "#ffffff", "display": "flex", "gap": "1rem", "alignItems": "center"}}, [__jacJsx(Link, {"to": "/lesson/" + lessonId, "style": {"color": "#ffffff", "textDecoration": "none"}}, ["← Back"]), __jacJsx("h1", {"style": {"margin": "0", "flex": "1"}}, ["JacTutor AI"])]), __jacJsx("div", {"style": {"flex": "1", "overflowY": "auto", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}, [msg_list, loading && __jacJsx("div", {"style": {"alignSelf": "flex-start", "padding": "12px 16px", "borderRadius": "12px", "backgroundColor": "#e0f2fe"}}, ["Thinking..."])]), __jacJsx("div", {"style": {"padding": "24px", "backgroundColor": "#ffffff", "borderTop": "1px solid #e5e7eb", "display": "flex", "gap": "12px"}}, [__jacJsx("input", {"type": "text", "value": input, "onChange": e => {
    setInput(e.target.value);
  }, "onKeyPress": e => {
    if (e.key === "Enter") {
      handleSend();
    }
  }, "placeholder": "Ask a question about Jac...", "style": {"flex": "1", "padding": "12px", "border": "1px solid #d1d5db", "borderRadius": "8px", "fontSize": "16px"}}, []), __jacJsx("button", {"onClick": handleSend, "disabled": loading, "style": {"padding": "12px 24px", "backgroundColor": "#065f46", "color": "#ffffff", "border": "none", "borderRadius": "8px", "fontWeight": "600", "cursor": "pointer"}}, ["Send"])])])]);
}
function Quiz() {
  let router = useRouter();
  let [questions, setQuestions] = useState([]);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [selectedAnswers, setSelectedAnswers] = useState({});
  let [results, setResults] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  let lessonId = router.params ? router.params.id : "";
  async function loadQuestions() {
    setLoading(true);
    setError("");
    try {
      let username = __getLocalStorage("jac_username");
      if (!username || username === "") {
        username = "guest";
      }
      let result = await jacSpawn(null, "generate_quiz_questions", {"lesson_id": lessonId, "user_id": username});
      if (result && result.reports && result.reports[0].questions_raw) {
        let rawText = result.reports[0].questions_raw;
        let parsed = parseQuizQuestions(rawText);
        setQuestions(parsed);
      } else {
        setError("Failed to generate questions");
      }
    } catch (e) {
      setError("Error: " + func(e));
    }
    setLoading(false);
  }
  function parseQuizQuestions(text) {
    questions = [];
    let lines = text.split("\\n");
    let currentQ = null;
    for (const line of lines) {
      let trimmed = line.strip();
      if (!trimmed) {
        continue;
      }
      let firstChar = len(trimmed) > 0 ? trimmed[0] : "";
      let isDigit = firstChar >= "0" && firstChar <= "9";
      if (isDigit && "." in trimmed || trimmed.startsWith("Q")) {
        if (currentQ) {
          questions.append(currentQ);
        }
        currentQ = {"question": trimmed, "options": [], "correct": ""};
      } else if (trimmed.startsWith("A.") || trimmed.startsWith("B.") || trimmed.startsWith("C.") || trimmed.startsWith("D.")) {
        if (currentQ) {
          currentQ.options.append(trimmed);
        }
      } else if ("Correct:" in trimmed || "Answer:" in trimmed) {
        if (currentQ) {
          let parts = trimmed.split(":");
          if (len(parts) > 1) {
            currentQ.correct = parts[1].strip();
          }
        }
      }
    }
    if (currentQ) {
      questions.append(currentQ);
    }
    return questions;
  }
  async function handleSubmit() {
    let correct = 0;
    let wrong = 0;
    let idx = 0;
    while (idx < len(questions)) {
      let q = questions[idx];
      let key = func(idx);
      let selected = key in selectedAnswers ? selectedAnswers[key] : "";
      if (selected === q.correct) {
        correct = correct + 1;
      } else {
        wrong = wrong + 1;
      }
      idx = idx + 1;
    }
    try {
      let username = __getLocalStorage("jac_username");
      if (!username || username === "") {
        username = "guest";
      }
      await jacSpawn(null, "quiz_record_attempt", {"user_id": username, "lesson_id": lessonId, "correct": correct, "wrong": wrong});
    } catch {}
    setResults({"correct": correct, "wrong": wrong, "total": correct + wrong});
  }
  useEffect(() => {
    if (lessonId) {
      loadQuestions();
    }
  });
  if (loading) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}, [__jacJsx("div", {}, ["Generating quiz questions..."])]);
  }
  if (error) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}, [__jacJsx("div", {"style": {"color": "#dc2626"}}, [error])]);
  }
  if (results) {
    let score = results.total > 0 ? results.correct / results.total * 100 : 0;
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f0fdfa"}}, [__jacJsx("div", {"style": {"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)", "textAlign": "center", "maxWidth": "500px"}}, [__jacJsx("h1", {"style": {"fontSize": "2rem", "color": "#065f46", "marginBottom": "24px"}}, ["Quiz Complete!"]), __jacJsx("div", {"style": {"fontSize": "3rem", "color": "#10b981", "marginBottom": "24px", "fontWeight": "bold"}}, [round(score), "%"]), __jacJsx("p", {"style": {"fontSize": "1.25rem", "color": "#4b5563", "marginBottom": "32px"}}, ["You got ", results.correct, " out of ", results.total, " correct"]), __jacJsx("div", {"style": {"display": "flex", "gap": "1rem", "justifyContent": "center"}}, [__jacJsx(Link, {"to": "/lesson/" + lessonId, "style": {"padding": "0.75rem 1.5rem", "backgroundColor": "#065f46", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}, ["Back to Lesson"]), __jacJsx(Link, {"to": "/", "style": {"padding": "0.75rem 1.5rem", "backgroundColor": "#10b981", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}, ["Dashboard"])])])]);
  }
  if (!questions || len(questions) === 0) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}, [__jacJsx("div", {}, ["No questions available"])]);
  }
  let q = questions[currentQuestion];
  function createOptionItem(i, opt) {
    let optionKey = i < 4 ? ["A", "B", "C", "D"][i] : func(i);
    let qKey = func(currentQuestion);
    let isSelected = qKey in selectedAnswers ? selectedAnswers[qKey] : "" === optionKey;
    return __jacJsx("div", {"key": i, "onClick": e => {
      let newSelected = selectedAnswers.copy();
      newSelected[func(currentQuestion)] = i < 4 ? ["A", "B", "C", "D"][i] : func(i);
      setSelectedAnswers(newSelected);
    }, "style": {"padding": "16px", "border": "2px solid " + isSelected ? "#065f46" : "#d1d5db", "borderRadius": "8px", "cursor": "pointer", "backgroundColor": isSelected ? "#f9fafb" : "#ffffff"}}, [opt]);
  }
  let option_list = [];
  for (const i of range(len(q.options))) {
    option_list.append(createOptionItem(i, q.options[i]));
  }
  function handlePrevious() {
    setCurrentQuestion(max(0, currentQuestion - 1));
  }
  function handleNext() {
    setCurrentQuestion(min(len(questions) - 1, currentQuestion + 1));
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f0fdfa", "padding": "40px"}}, [__jacJsx("div", {"style": {"maxWidth": "800px", "margin": "0 auto"}}, [__jacJsx("div", {"style": {"marginBottom": "24px", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx(Link, {"to": "/lesson/" + lessonId, "style": {"padding": "0.5rem 1rem", "backgroundColor": "#065f46", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none"}}, ["← Back"]), __jacJsx("div", {"style": {"color": "#4b5563"}}, ["Question ", currentQuestion + 1, " of ", len(questions)])]), __jacJsx("div", {"style": {"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"fontSize": "1.5rem", "color": "#065f46", "marginBottom": "32px"}}, [q.question]), __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "16px", "marginBottom": "32px"}}, [option_list]), __jacJsx("div", {"style": {"display": "flex", "gap": "1rem", "justifyContent": "space-between"}}, [__jacJsx("button", {"onClick": handlePrevious, "disabled": currentQuestion === 0, "style": {"padding": "0.75rem 1.5rem", "backgroundColor": "#6b7280", "color": "#ffffff", "border": "none", "borderRadius": "8px", "cursor": "pointer", "opacity": currentQuestion === 0 ? "0.5" : "1"}}, ["Previous"]), currentQuestion === len(questions) - 1 ? __jacJsx("button", {"onClick": handleSubmit, "style": {"padding": "0.75rem 1.5rem", "backgroundColor": "#10b981", "color": "#ffffff", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontWeight": "600"}}, ["Submit Quiz"]) : __jacJsx("button", {"onClick": handleNext, "style": {"padding": "0.75rem 1.5rem", "backgroundColor": "#065f46", "color": "#ffffff", "border": "none", "borderRadius": "8px", "cursor": "pointer"}}, ["Next"])])])])]);
}
function Progress() {
  let [attempts, setAttempts] = useState([]);
  let [skills, setSkills] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  let router = useRouter();
  useEffect(() => {
    if (!jacIsLoggedIn()) {
      router.navigate("/login");
      return;
    }
    async function loadProgress() {
      try {
        let username = __getLocalStorage("jac_username");
        if (!username || username === "") {
          username = "guest";
        }
        let resultAttempts = await jacSpawn(null, "get_user_attempts", {"user_id": username});
        if (resultAttempts && resultAttempts.reports) {
          setAttempts(resultAttempts.reports[0]);
        }
        let resultSkills = await jacSpawn(null, "get_user_skills", {"user_id": username});
        if (resultSkills && resultSkills.reports) {
          setSkills(resultSkills.reports[0]);
        }
        setLoading(false);
      } catch (e) {
        setError("Failed to load progress: " + func(e));
        setLoading(false);
      }
    }
    loadProgress();
  });
  if (loading) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}, [__jacJsx("div", {}, ["Loading progress..."])]);
  }
  function createAttemptItem(i, attempt) {
    let scorePercent = attempt.score ? attempt.score * 100 : 0;
    return __jacJsx("div", {"key": i, "style": {"backgroundColor": "#ffffff", "padding": "24px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("div", {}, [__jacJsx("h3", {"style": {"fontSize": "1.25rem", "color": "#065f46", "margin": "0 0 8px 0"}}, [attempt.lesson_id]), __jacJsx("p", {"style": {"color": "#6b7280", "margin": "0 0 8px 0"}}, ["Status: ", attempt.status]), __jacJsx("p", {"style": {"color": "#6b7280", "margin": "0", "fontSize": "0.875rem"}}, [attempt.timestamp])]), __jacJsx("div", {"style": {"textAlign": "right"}}, [__jacJsx("div", {"style": {"fontSize": "2rem", "fontWeight": "bold", "color": "#10b981"}}, [round(scorePercent), "%"]), __jacJsx("div", {"style": {"color": "#6b7280", "fontSize": "0.875rem"}}, ["Score"])])])]);
  }
  function createSkillItem(i, skill) {
    let conf = skill.confidence * 100;
    return __jacJsx("div", {"key": i, "style": {"padding": "12px", "borderBottom": "1px solid #e5e7eb"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "marginBottom": "8px"}}, [__jacJsx("span", {"style": {"fontWeight": "600", "color": "#1f2937"}}, [skill.concept]), __jacJsx("span", {"style": {"color": "#065f46", "fontWeight": "bold"}}, [round(conf), "%"])]), __jacJsx("div", {"style": {"height": "8px", "backgroundColor": "#e5e7eb", "borderRadius": "4px", "overflow": "hidden"}}, [__jacJsx("div", {"style": {"width": func(conf) + "%", "height": "100%", "backgroundColor": "#10b981"}}, [])])]);
  }
  let attempt_list = [];
  for (const i of range(len(attempts))) {
    attempt_list.append(createAttemptItem(i, attempts[i]));
  }
  let skill_list = [];
  for (const i of range(len(skills))) {
    skill_list.append(createSkillItem(i, skills[i]));
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f0fdfa", "padding": "40px"}}, [__jacJsx("div", {"style": {"maxWidth": "1200px", "margin": "0 auto"}}, [__jacJsx("div", {"style": {"marginBottom": "40px", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("h1", {"style": {"fontSize": "2.5rem", "color": "#065f46", "margin": "0"}}, ["My Progress"]), __jacJsx(Link, {"to": "/", "style": {"padding": "0.75rem 1.5rem", "backgroundColor": "#065f46", "color": "#ffffff", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "600"}}, ["← Dashboard"])]), error && __jacJsx("div", {"style": {"color": "#dc2626", "marginBottom": "24px"}}, [error]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "2fr 1fr", "gap": "24px"}}, [__jacJsx("div", {}, [__jacJsx("h2", {"style": {"fontSize": "1.5rem", "color": "#065f46", "marginBottom": "16px"}}, ["Recent Activity"]), len(attempts) === 0 ? __jacJsx("div", {"style": {"backgroundColor": "#ffffff", "padding": "40px", "borderRadius": "12px", "textAlign": "center", "color": "#4b5563"}}, ["No progress yet. Start a lesson to track your progress!"]) : __jacJsx("div", {"style": {"display": "grid", "gap": "24px"}}, [attempt_list])]), __jacJsx("div", {}, [__jacJsx("h2", {"style": {"fontSize": "1.5rem", "color": "#065f46", "marginBottom": "16px"}}, ["Skill Map"]), __jacJsx("div", {"style": {"backgroundColor": "#ffffff", "padding": "24px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}, [len(skills) === 0 ? __jacJsx("div", {"style": {"color": "#6b7280", "textAlign": "center"}}, ["Skills will appear here as you learn."]) : __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "8px"}}, [skill_list])])])])])]);
}
function app() {
  return __jacJsx(HashRouter, {}, [__jacJsx(Routes, {}, [__jacJsx(Route, {"path": "/", "element": __jacJsx(Landing, {}, [])}, []), __jacJsx(Route, {"path": "/login", "element": __jacJsx(Login, {}, [])}, []), __jacJsx(Route, {"path": "/signup", "element": __jacJsx(Signup, {}, [])}, []), __jacJsx(Route, {"path": "/dashboard", "element": __jacJsx(Dashboard, {}, [])}, []), __jacJsx(Route, {"path": "/lesson/:id", "element": __jacJsx(LessonDetail, {}, [])}, []), __jacJsx(Route, {"path": "/chat/:id", "element": __jacJsx(AIChat, {}, [])}, []), __jacJsx(Route, {"path": "/quiz/:id", "element": __jacJsx(Quiz, {}, [])}, []), __jacJsx(Route, {"path": "/progress", "element": __jacJsx(Progress, {}, [])}, [])])]);
}
export { AIChat, Dashboard, Landing, LessonDetail, Login, Progress, Quiz, Signup, app };
