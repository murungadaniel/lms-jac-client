cl import from react { useState }
cl import from "@jac-client/utils" {
    Router,
    Routes,
    Route,
    Link,
    jacLogin,
    jacSignup
}

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
            </div>
        </div>
    </div>;
}

def Login() -> any {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");

    async def handleLogin(e: any) -> None {
        e.preventDefault();
        setError("");

        if not username or not password {
            setError("Please fill in all fields");
            return;
        }

        success = await jacLogin(username, password);
        if success {
            window.location.href = "/";
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
                {error && <div style={{"color": "#dc2626", "fontSize": "14px", "marginBottom": "12px", "textAlign": "center"}}>{error}</div>}
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

    async def handleSignup(e: any) -> None {
        e.preventDefault();
        setError("");

        if not username or not password {
            setError("Please fill in all fields");
            return;
        }

        result = await jacSignup(username, password);
        if result["success"] {
            window.location.href = "/login";
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
                {error && <div style={{"color": "#dc2626", "fontSize": "14px", "marginBottom": "12px", "textAlign": "center"}}>{error}</div>}
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

def app() -> any {
    return <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>;
}