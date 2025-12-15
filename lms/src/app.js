import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState } from "react";
import { Router, Routes, Route, Link, jacLogin, jacSignup } from "@jac-client/utils";
function Landing() {
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f0fdfa", "color": "#065f46", "fontFamily": "sans-serif"}}, [__jacJsx("div", {"style": {"textAlign": "center", "padding": "40px", "backgroundColor": "#ffffff", "borderRadius": "16px", "boxShadow": "0 10px 25px rgba(0,0,0,0.1)", "width": "400px"}}, [__jacJsx("h1", {"style": {"fontSize": "3rem", "marginBottom": "1rem", "color": "#065f46"}}, ["Welcome to Jaseci Master"]), __jacJsx("p", {"style": {"fontSize": "1.25rem", "marginBottom": "3rem", "color": "#4b5563"}}, ["Your self-paced learning portal for Jac and Jaseci"]), __jacJsx("div", {"style": {"display": "flex", "gap": "1rem", "justifyContent": "center"}}, [__jacJsx(Link, {"to": "/login", "style": {"backgroundColor": "#065f46", "color": "#ffffff", "padding": "1rem 2rem", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "bold"}}, ["Login"]), __jacJsx(Link, {"to": "/signup", "style": {"backgroundColor": "#ffffff", "color": "#065f46", "padding": "1rem 2rem", "borderRadius": "8px", "border": "2px solid #065f46", "textDecoration": "none", "fontWeight": "bold"}}, ["Sign Up"])])])]);
}
function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    let success = await jacLogin(username, password);
    if (success) {
      window.location.href = "/";
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
  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    let result = await jacSignup(username, password);
    if (result["success"]) {
      window.location.href = "/login";
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
function app() {
  return __jacJsx(Router, {}, [__jacJsx(Routes, {}, [__jacJsx(Route, {"path": "/", "element": __jacJsx(Landing, {}, [])}, []), __jacJsx(Route, {"path": "/login", "element": __jacJsx(Login, {}, [])}, []), __jacJsx(Route, {"path": "/signup", "element": __jacJsx(Signup, {}, [])}, [])])]);
}
export { Landing, Login, Signup, app };
