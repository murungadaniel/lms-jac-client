function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
import { Router, Routes, Route, Link, jacLogin, jacSignup, jacSpawn, jacLogout, jacIsLoggedIn, useRouter, __getLocalStorage, __setLocalStorage } from "@jac-client/utils";
import { HashRouter, useNavigate } from "react-router-dom";
function Landing() {
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundColor": "#f0fdfa",
      "color": "#065f46",
      "fontFamily": "sans-serif"
    }
  }, [__jacJsx("div", {
    "style": {
      "textAlign": "center",
      "padding": "40px",
      "backgroundColor": "#ffffff",
      "borderRadius": "16px",
      "boxShadow": "0 10px 25px rgba(0,0,0,0.1)",
      "width": "400px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "fontSize": "3rem",
      "marginBottom": "1rem",
      "color": "#065f46"
    }
  }, ["Welcome to Jaseci Master"]), __jacJsx("p", {
    "style": {
      "fontSize": "1.25rem",
      "marginBottom": "3rem",
      "color": "#4b5563"
    }
  }, ["Your self-paced learning portal for Jac and Jaseci"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "1rem",
      "justifyContent": "center"
    }
  }, [__jacJsx(Link, {
    "to": "/login",
    "style": {
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "padding": "1rem 2rem",
      "borderRadius": "8px",
      "textDecoration": "none",
      "fontWeight": "bold"
    }
  }, ["Login"]), __jacJsx(Link, {
    "to": "/signup",
    "style": {
      "backgroundColor": "#ffffff",
      "color": "#065f46",
      "padding": "1rem 2rem",
      "borderRadius": "8px",
      "border": "2px solid #065f46",
      "textDecoration": "none",
      "fontWeight": "bold"
    }
  }, ["Sign Up"]), jacIsLoggedIn() && __jacJsx(Link, {
    "to": "/dashboard",
    "style": {
      "backgroundColor": "#10b981",
      "color": "#ffffff",
      "padding": "1rem 2rem",
      "borderRadius": "8px",
      "textDecoration": "none",
      "fontWeight": "bold"
    }
  }, ["Go to Dashboard"])])])]);
}
function Login() {
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var navigate = useNavigate();
  function handleLogin(_x) {
    return _handleLogin.apply(this, arguments);
  }
  function _handleLogin() {
    _handleLogin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var success;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!username || !password)) {
              _context.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context.a(2);
          case 1:
            _context.n = 2;
            return jacLogin(username, password);
          case 2:
            success = _context.v;
            if (success) {
              __setLocalStorage("jac_username", username);
              navigate("/dashboard");
            } else {
              setError("Invalid credentials");
            }
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _handleLogin.apply(this, arguments);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundColor": "#f0fdfa"
    }
  }, [__jacJsx("div", {
    "style": {
      "backgroundColor": "#ffffff",
      "padding": "40px",
      "borderRadius": "12px",
      "boxShadow": "0 10px 25px rgba(0,0,0,0.1)",
      "width": "320px"
    }
  }, [__jacJsx("h2", {
    "style": {
      "marginBottom": "24px",
      "textAlign": "center",
      "color": "#065f46"
    }
  }, ["Student Login"]), __jacJsx("form", {
    "onSubmit": handleLogin
  }, [__jacJsx("input", {
    "type": "text",
    "value": username,
    "onChange": function onChange(e) {
      setUsername(e.target.value);
    },
    "placeholder": "Username",
    "style": {
      "width": "100%",
      "padding": "12px",
      "marginBottom": "12px",
      "border": "1px solid #d1d5db",
      "borderRadius": "8px",
      "fontSize": "16px"
    }
  }, []), __jacJsx("input", {
    "type": "password",
    "value": password,
    "onChange": function onChange(e) {
      setPassword(e.target.value);
    },
    "placeholder": "Password",
    "style": {
      "width": "100%",
      "padding": "12px",
      "marginBottom": "12px",
      "border": "1px solid #d1d5db",
      "borderRadius": "8px",
      "fontSize": "16px"
    }
  }, []), error && __jacJsx("div", {
    "style": {
      "color": "#dc2626",
      "fontSize": "14px",
      "marginBottom": "12px",
      "textAlign": "center"
    }
  }, [error]), __jacJsx("button", {
    "type": "submit",
    "style": {
      "width": "100%",
      "padding": "12px",
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "8px",
      "fontWeight": "600",
      "cursor": "pointer"
    }
  }, ["Login"])]), __jacJsx("p", {
    "style": {
      "textAlign": "center",
      "marginTop": "20px",
      "fontSize": "14px",
      "color": "#4b5563"
    }
  }, ["Don't have an account? ", __jacJsx(Link, {
    "to": "/signup",
    "style": {
      "color": "#065f46",
      "textDecoration": "underline"
    }
  }, ["Sign up"])])])]);
}
function Signup() {
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    username = _useState8[0],
    setUsername = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    password = _useState0[0],
    setPassword = _useState0[1];
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    error = _useState10[0],
    setError = _useState10[1];
  var navigate = useNavigate();
  function handleSignup(_x2) {
    return _handleSignup.apply(this, arguments);
  }
  function _handleSignup() {
    _handleSignup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var result;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!username || !password)) {
              _context2.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return jacSignup(username, password);
          case 2:
            result = _context2.v;
            if (result["success"]) {
              navigate("/login");
            } else {
              setError(result["error"] ? result["error"] : "Signup failed");
            }
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return _handleSignup.apply(this, arguments);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundColor": "#f0fdfa"
    }
  }, [__jacJsx("div", {
    "style": {
      "backgroundColor": "#ffffff",
      "padding": "40px",
      "borderRadius": "12px",
      "boxShadow": "0 10px 25px rgba(0,0,0,0.1)",
      "width": "320px"
    }
  }, [__jacJsx("h2", {
    "style": {
      "marginBottom": "24px",
      "textAlign": "center",
      "color": "#065f46"
    }
  }, ["Student Sign Up"]), __jacJsx("form", {
    "onSubmit": handleSignup
  }, [__jacJsx("input", {
    "type": "text",
    "value": username,
    "onChange": function onChange(e) {
      setUsername(e.target.value);
    },
    "placeholder": "Username",
    "style": {
      "width": "100%",
      "padding": "12px",
      "marginBottom": "12px",
      "border": "1px solid #d1d5db",
      "borderRadius": "8px",
      "fontSize": "16px"
    }
  }, []), __jacJsx("input", {
    "type": "password",
    "value": password,
    "onChange": function onChange(e) {
      setPassword(e.target.value);
    },
    "placeholder": "Password",
    "style": {
      "width": "100%",
      "padding": "12px",
      "marginBottom": "12px",
      "border": "1px solid #d1d5db",
      "borderRadius": "8px",
      "fontSize": "16px"
    }
  }, []), error && __jacJsx("div", {
    "style": {
      "color": "#dc2626",
      "fontSize": "14px",
      "marginBottom": "12px",
      "textAlign": "center"
    }
  }, [error]), __jacJsx("button", {
    "type": "submit",
    "style": {
      "width": "100%",
      "padding": "12px",
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "8px",
      "fontWeight": "600",
      "cursor": "pointer"
    }
  }, ["Sign Up"])]), __jacJsx("p", {
    "style": {
      "textAlign": "center",
      "marginTop": "20px",
      "fontSize": "14px",
      "color": "#4b5563"
    }
  }, ["Already have an account? ", __jacJsx(Link, {
    "to": "/login",
    "style": {
      "color": "#065f46",
      "textDecoration": "underline"
    }
  }, ["Login"])])])]);
}
function Dashboard() {
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    lessons = _useState12[0],
    setLessons = _useState12[1];
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = useState(""),
    _useState16 = _slicedToArray(_useState15, 2),
    error = _useState16[0],
    setError = _useState16[1];
  var router = useRouter();
  useEffect(function () {
    if (!jacIsLoggedIn()) {
      router.navigate("/login");
      return;
    }
    function loadLessons() {
      return _loadLessons.apply(this, arguments);
    }
    function _loadLessons() {
      _loadLessons = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var result, _t;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return __jacSpawn("list_lessons", "", {});
            case 1:
              result = _context3.v;
              if (result && result.reports) {
                setLessons(result.reports[0]);
              }
              setLoading(false);
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t = _context3.v;
              setError("Failed to load lessons: " + func(_t));
              setLoading(false);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }));
      return _loadLessons.apply(this, arguments);
    }
    loadLessons();
  });
  function handleLogout() {
    return _handleLogout.apply(this, arguments);
  }
  function _handleLogout() {
    _handleLogout = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            jacLogout();
            router.navigate("/login");
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return _handleLogout.apply(this, arguments);
  }
  if (loading) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("div", {}, ["Loading lessons..."])]);
  }
  if (error) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("div", {
      "style": {
        "color": "#dc2626"
      }
    }, [error])]);
  }
  var lesson_items = [];
  var _iterator = _createForOfIteratorHelper(lessons),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var lesson = _step.value;
      lesson_items.append(__jacJsx(Link, {
        "key": lesson.id,
        "to": "/lesson/" + lesson.id,
        "style": {
          "textDecoration": "none",
          "color": "inherit"
        }
      }, [__jacJsx("div", {
        "style": {
          "backgroundColor": "#ffffff",
          "padding": "24px",
          "borderRadius": "12px",
          "boxShadow": "0 4px 6px rgba(0,0,0,0.1)",
          "cursor": "pointer"
        }
      }, [__jacJsx("h2", {
        "style": {
          "fontSize": "1.5rem",
          "color": "#065f46",
          "marginBottom": "12px",
          "marginTop": "0"
        }
      }, [lesson.title]), __jacJsx("p", {
        "style": {
          "color": "#4b5563",
          "margin": "0"
        }
      }, [lesson.description])])]));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f0fdfa",
      "padding": "40px"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "1200px",
      "margin": "0 auto"
    }
  }, [__jacJsx("div", {
    "style": {
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "40px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "fontSize": "2.5rem",
      "color": "#065f46",
      "margin": "0"
    }
  }, ["Lessons"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "1rem"
    }
  }, [__jacJsx(Link, {
    "to": "/progress",
    "style": {
      "padding": "0.75rem 1.5rem",
      "backgroundColor": "#10b981",
      "color": "#ffffff",
      "borderRadius": "8px",
      "textDecoration": "none",
      "fontWeight": "600"
    }
  }, ["My Progress"]), __jacJsx("button", {
    "onClick": handleLogout,
    "style": {
      "padding": "0.75rem 1.5rem",
      "backgroundColor": "#dc2626",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "8px",
      "fontWeight": "600",
      "cursor": "pointer"
    }
  }, ["Logout"])])]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "repeat(auto-fill, minmax(300px, 1fr))",
      "gap": "24px"
    }
  }, [lesson_items])])]);
}
function LessonDetail() {
  var router = useRouter();
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    lesson = _useState18[0],
    setLesson = _useState18[1];
  var _useState19 = useState(true),
    _useState20 = _slicedToArray(_useState19, 2),
    loading = _useState20[0],
    setLoading = _useState20[1];
  var _useState21 = useState(""),
    _useState22 = _slicedToArray(_useState21, 2),
    error = _useState22[0],
    setError = _useState22[1];
  var _useState23 = useState(""),
    _useState24 = _slicedToArray(_useState23, 2),
    code = _useState24[0],
    setCode = _useState24[1];
  var _useState25 = useState(""),
    _useState26 = _slicedToArray(_useState25, 2),
    output = _useState26[0],
    setOutput = _useState26[1];
  var lessonId = router.params ? router.params.id : "";
  useEffect(function () {
    if (!jacIsLoggedIn()) {
      router.navigate("/login");
      return;
    }
    function loadLesson() {
      return _loadLesson.apply(this, arguments);
    }
    function _loadLesson() {
      _loadLesson = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var result, username, _t2, _t3;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return jacSpawn(null, "get_lesson_detail", {
                "lesson_id": lessonId
              });
            case 1:
              result = _context5.v;
              if (!(result && result.reports && !result.reports[0].error)) {
                _context5.n = 6;
                break;
              }
              setLesson(result.reports[0]);
              _context5.p = 2;
              username = __getLocalStorage("jac_username");
              if (!username || username === "") {
                username = "guest";
              }
              _context5.n = 3;
              return jacSpawn(null, "record_attempt", {
                "user_id": username,
                "lesson_id": lessonId,
                "status": "started",
                "score": 0.0
              });
            case 3:
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t2 = _context5.v;
            case 5:
              _context5.n = 7;
              break;
            case 6:
              setError(result.reports ? result.reports[0].error : "Lesson not found");
            case 7:
              setLoading(false);
              _context5.n = 9;
              break;
            case 8:
              _context5.p = 8;
              _t3 = _context5.v;
              setError("Failed to load lesson: " + func(_t3));
              setLoading(false);
            case 9:
              return _context5.a(2);
          }
        }, _callee5, null, [[2, 4], [0, 8]]);
      }));
      return _loadLesson.apply(this, arguments);
    }
    if (lessonId) {
      loadLesson();
    }
  });
  function runCode() {
    setOutput("Running...\\n(Simulation: Code execution successful!)");
  }
  if (loading) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("div", {}, ["Loading lesson..."])]);
  }
  if (error || !lesson) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("div", {
      "style": {
        "color": "#dc2626"
      }
    }, [error])]);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f0fdfa",
      "padding": "40px"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "1200px",
      "margin": "0 auto",
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "24px"
    }
  }, [__jacJsx("div", {}, [__jacJsx("div", {
    "style": {
      "marginBottom": "24px",
      "display": "flex",
      "gap": "1rem",
      "alignItems": "center"
    }
  }, [__jacJsx(Link, {
    "to": "/",
    "style": {
      "padding": "0.5rem 1rem",
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "borderRadius": "8px",
      "textDecoration": "none"
    }
  }, ["← Back"]), __jacJsx(Link, {
    "to": "/quiz/" + lessonId,
    "style": {
      "padding": "0.5rem 1rem",
      "backgroundColor": "#10b981",
      "color": "#ffffff",
      "borderRadius": "8px",
      "textDecoration": "none"
    }
  }, ["Take Quiz"]), __jacJsx(Link, {
    "to": "/chat/" + lessonId,
    "style": {
      "padding": "0.5rem 1rem",
      "backgroundColor": "#3b82f6",
      "color": "#ffffff",
      "borderRadius": "8px",
      "textDecoration": "none"
    }
  }, ["Ask Tutor"])]), __jacJsx("div", {
    "style": {
      "backgroundColor": "#ffffff",
      "padding": "40px",
      "borderRadius": "12px",
      "boxShadow": "0 4px 6px rgba(0,0,0,0.1)",
      "maxHeight": "80vh",
      "overflowY": "auto"
    }
  }, [__jacJsx("h1", {
    "style": {
      "fontSize": "2.5rem",
      "color": "#065f46",
      "marginBottom": "12px",
      "marginTop": "0"
    }
  }, [lesson.title]), __jacJsx("p", {
    "style": {
      "color": "#4b5563",
      "marginBottom": "32px"
    }
  }, [lesson.description]), __jacJsx("div", {
    "style": {
      "borderTop": "1px solid #e5e7eb",
      "paddingTop": "32px",
      "whiteSpace": "pre-wrap",
      "fontFamily": "monospace",
      "lineHeight": "1.6"
    }
  }, [lesson.content])])]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "gap": "24px"
    }
  }, [__jacJsx("div", {
    "style": {
      "backgroundColor": "#1e293b",
      "borderRadius": "12px",
      "padding": "16px",
      "color": "#ffffff",
      "boxShadow": "0 10px 25px rgba(0,0,0,0.2)",
      "flex": "1",
      "display": "flex",
      "flexDirection": "column"
    }
  }, [__jacJsx("div", {
    "style": {
      "marginBottom": "12px",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center"
    }
  }, [__jacJsx("span", {
    "style": {
      "fontWeight": "bold",
      "color": "#fbbf24"
    }
  }, ["Code Playground"]), __jacJsx("button", {
    "onClick": runCode,
    "style": {
      "backgroundColor": "#22c55e",
      "color": "#fff",
      "border": "none",
      "padding": "8px 16px",
      "borderRadius": "6px",
      "cursor": "pointer",
      "fontWeight": "bold"
    }
  }, ["▶ Run"])]), __jacJsx("textarea", {
    "value": code,
    "onChange": function onChange(e) {
      setCode(e.target.value);
    },
    "placeholder": "# Write your Jac code here...",
    "style": {
      "width": "100%",
      "flex": "1",
      "backgroundColor": "#0f172a",
      "color": "#f8fafc",
      "border": "none",
      "fontFamily": "monospace",
      "padding": "12px",
      "resize": "none",
      "outline": "none"
    }
  }, [])]), __jacJsx("div", {
    "style": {
      "backgroundColor": "#0f172a",
      "borderRadius": "12px",
      "padding": "16px",
      "color": "#f8fafc",
      "height": "200px",
      "overflowY": "auto",
      "fontFamily": "monospace",
      "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("div", {
    "style": {
      "color": "#94a3b8",
      "fontSize": "0.8rem",
      "marginBottom": "8px"
    }
  }, ["Output Terminal"]), __jacJsx("pre", {
    "style": {
      "margin": "0"
    }
  }, [output])])])])]);
}
function AIChat() {
  var router = useRouter();
  var _useState27 = useState([]),
    _useState28 = _slicedToArray(_useState27, 2),
    messages = _useState28[0],
    setMessages = _useState28[1];
  var _useState29 = useState(""),
    _useState30 = _slicedToArray(_useState29, 2),
    input = _useState30[0],
    setInput = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loading = _useState32[0],
    setLoading = _useState32[1];
  var lessonId = router.params ? router.params.id : "";
  function handleSend() {
    return _handleSend.apply(this, arguments);
  }
  function _handleSend() {
    _handleSend = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var userMsg, newMessages, result, _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (input.trim()) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            userMsg = {
              "role": "user",
              "text": input
            };
            newMessages = messages.slice();
            newMessages.push(userMsg);
            setMessages(newMessages);
            setInput("");
            setLoading(true);
            _context6.p = 2;
            _context6.n = 3;
            return jacSpawn(null, "ai_chat", {
              "message": input
            });
          case 3:
            result = _context6.v;
            if (result && result.reports && result.reports[0].reply) {
              newMessages = messages.slice();
              newMessages.push(userMsg);
              newMessages.push({
                "role": "assistant",
                "text": result.reports[0].reply
              });
              setMessages(newMessages);
            }
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t4 = _context6.v;
            newMessages = messages.slice();
            newMessages.push(userMsg);
            newMessages.push({
              "role": "error",
              "text": "Error: " + func(_t4)
            });
            setMessages(newMessages);
          case 5:
            setLoading(false);
          case 6:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 4]]);
    }));
    return _handleSend.apply(this, arguments);
  }
  function createMessageItem(i, msg) {
    return __jacJsx("div", {
      "key": i,
      "style": {
        "alignSelf": msg.role === "user" ? "flex-end" : "flex-start",
        "maxWidth": "70%",
        "padding": "12px 16px",
        "borderRadius": "12px",
        "backgroundColor": msg.role === "user" ? "#ffffff" : "#e0f2fe",
        "color": "#1f2937"
      }
    }, [msg.text]);
  }
  var msg_list = [];
  var _iterator2 = _createForOfIteratorHelper(range(len(messages))),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var i = _step2.value;
      msg_list.append(createMessageItem(i, messages[i]));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f0fdfa",
      "display": "flex",
      "flexDirection": "column"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "800px",
      "margin": "0 auto",
      "width": "100%",
      "display": "flex",
      "flexDirection": "column",
      "height": "100vh"
    }
  }, [__jacJsx("div", {
    "style": {
      "padding": "24px",
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "display": "flex",
      "gap": "1rem",
      "alignItems": "center"
    }
  }, [__jacJsx(Link, {
    "to": "/lesson/" + lessonId,
    "style": {
      "color": "#ffffff",
      "textDecoration": "none"
    }
  }, ["← Back"]), __jacJsx("h1", {
    "style": {
      "margin": "0",
      "flex": "1"
    }
  }, ["JacTutor AI"])]), __jacJsx("div", {
    "style": {
      "flex": "1",
      "overflowY": "auto",
      "padding": "24px",
      "display": "flex",
      "flexDirection": "column",
      "gap": "16px"
    }
  }, [msg_list, loading && __jacJsx("div", {
    "style": {
      "alignSelf": "flex-start",
      "padding": "12px 16px",
      "borderRadius": "12px",
      "backgroundColor": "#e0f2fe"
    }
  }, ["Thinking..."])]), __jacJsx("div", {
    "style": {
      "padding": "24px",
      "backgroundColor": "#ffffff",
      "borderTop": "1px solid #e5e7eb",
      "display": "flex",
      "gap": "12px"
    }
  }, [__jacJsx("input", {
    "type": "text",
    "value": input,
    "onChange": function onChange(e) {
      setInput(e.target.value);
    },
    "onKeyPress": function onKeyPress(e) {
      if (e.key === "Enter") {
        handleSend();
      }
    },
    "placeholder": "Ask a question about Jac...",
    "style": {
      "flex": "1",
      "padding": "12px",
      "border": "1px solid #d1d5db",
      "borderRadius": "8px",
      "fontSize": "16px"
    }
  }, []), __jacJsx("button", {
    "onClick": handleSend,
    "disabled": loading,
    "style": {
      "padding": "12px 24px",
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "8px",
      "fontWeight": "600",
      "cursor": "pointer"
    }
  }, ["Send"])])])]);
}
function Quiz() {
  var router = useRouter();
  var _useState33 = useState([]),
    _useState34 = _slicedToArray(_useState33, 2),
    questions = _useState34[0],
    setQuestions = _useState34[1];
  var _useState35 = useState(0),
    _useState36 = _slicedToArray(_useState35, 2),
    currentQuestion = _useState36[0],
    setCurrentQuestion = _useState36[1];
  var _useState37 = useState({}),
    _useState38 = _slicedToArray(_useState37, 2),
    selectedAnswers = _useState38[0],
    setSelectedAnswers = _useState38[1];
  var _useState39 = useState(null),
    _useState40 = _slicedToArray(_useState39, 2),
    results = _useState40[0],
    setResults = _useState40[1];
  var _useState41 = useState(false),
    _useState42 = _slicedToArray(_useState41, 2),
    loading = _useState42[0],
    setLoading = _useState42[1];
  var _useState43 = useState(""),
    _useState44 = _slicedToArray(_useState43, 2),
    error = _useState44[0],
    setError = _useState44[1];
  var lessonId = router.params ? router.params.id : "";
  function loadQuestions() {
    return _loadQuestions.apply(this, arguments);
  }
  function _loadQuestions() {
    _loadQuestions = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var username, result, rawText, parsed, _t5;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            setLoading(true);
            setError("");
            _context7.p = 1;
            username = __getLocalStorage("jac_username");
            if (!username || username === "") {
              username = "guest";
            }
            _context7.n = 2;
            return jacSpawn(null, "generate_quiz_questions", {
              "lesson_id": lessonId,
              "user_id": username
            });
          case 2:
            result = _context7.v;
            if (result && result.reports && result.reports[0].questions_raw) {
              rawText = result.reports[0].questions_raw;
              parsed = parseQuizQuestions(rawText);
              setQuestions(parsed);
            } else {
              setError("Failed to generate questions");
            }
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t5 = _context7.v;
            setError("Error: " + func(_t5));
          case 4:
            setLoading(false);
          case 5:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 3]]);
    }));
    return _loadQuestions.apply(this, arguments);
  }
  function parseQuizQuestions(text) {
    questions = [];
    var lines = text.split("\\n");
    var currentQ = null;
    var _iterator3 = _createForOfIteratorHelper(lines),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var line = _step3.value;
        var trimmed = line.strip();
        if (!trimmed) {
          continue;
        }
        var firstChar = len(trimmed) > 0 ? trimmed[0] : "";
        var isDigit = firstChar >= "0" && firstChar <= "9";
        if (isDigit && "." in trimmed || trimmed.startsWith("Q")) {
          if (currentQ) {
            questions.append(currentQ);
          }
          currentQ = {
            "question": trimmed,
            "options": [],
            "correct": ""
          };
        } else if (trimmed.startsWith("A.") || trimmed.startsWith("B.") || trimmed.startsWith("C.") || trimmed.startsWith("D.")) {
          if (currentQ) {
            currentQ.options.append(trimmed);
          }
        } else if ("Correct:" in trimmed || "Answer:" in trimmed) {
          if (currentQ) {
            var parts = trimmed.split(":");
            if (len(parts) > 1) {
              currentQ.correct = parts[1].strip();
            }
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (currentQ) {
      questions.append(currentQ);
    }
    return questions;
  }
  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }
  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var correct, wrong, idx, _q, key, selected, username, _t6;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            correct = 0;
            wrong = 0;
            idx = 0;
            while (idx < len(questions)) {
              _q = questions[idx];
              key = func(idx);
              selected = key in selectedAnswers ? selectedAnswers[key] : "";
              if (selected === _q.correct) {
                correct = correct + 1;
              } else {
                wrong = wrong + 1;
              }
              idx = idx + 1;
            }
            _context8.p = 1;
            username = __getLocalStorage("jac_username");
            if (!username || username === "") {
              username = "guest";
            }
            _context8.n = 2;
            return jacSpawn(null, "quiz_record_attempt", {
              "user_id": username,
              "lesson_id": lessonId,
              "correct": correct,
              "wrong": wrong
            });
          case 2:
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t6 = _context8.v;
          case 4:
            setResults({
              "correct": correct,
              "wrong": wrong,
              "total": correct + wrong
            });
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 3]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }
  useEffect(function () {
    if (lessonId) {
      loadQuestions();
    }
  });
  if (loading) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("div", {}, ["Generating quiz questions..."])]);
  }
  if (error) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("div", {
      "style": {
        "color": "#dc2626"
      }
    }, [error])]);
  }
  if (results) {
    var score = results.total > 0 ? results.correct / results.total * 100 : 0;
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#f0fdfa"
      }
    }, [__jacJsx("div", {
      "style": {
        "backgroundColor": "#ffffff",
        "padding": "40px",
        "borderRadius": "12px",
        "boxShadow": "0 4px 6px rgba(0,0,0,0.1)",
        "textAlign": "center",
        "maxWidth": "500px"
      }
    }, [__jacJsx("h1", {
      "style": {
        "fontSize": "2rem",
        "color": "#065f46",
        "marginBottom": "24px"
      }
    }, ["Quiz Complete!"]), __jacJsx("div", {
      "style": {
        "fontSize": "3rem",
        "color": "#10b981",
        "marginBottom": "24px",
        "fontWeight": "bold"
      }
    }, [round(score), "%"]), __jacJsx("p", {
      "style": {
        "fontSize": "1.25rem",
        "color": "#4b5563",
        "marginBottom": "32px"
      }
    }, ["You got ", results.correct, " out of ", results.total, " correct"]), __jacJsx("div", {
      "style": {
        "display": "flex",
        "gap": "1rem",
        "justifyContent": "center"
      }
    }, [__jacJsx(Link, {
      "to": "/lesson/" + lessonId,
      "style": {
        "padding": "0.75rem 1.5rem",
        "backgroundColor": "#065f46",
        "color": "#ffffff",
        "borderRadius": "8px",
        "textDecoration": "none"
      }
    }, ["Back to Lesson"]), __jacJsx(Link, {
      "to": "/",
      "style": {
        "padding": "0.75rem 1.5rem",
        "backgroundColor": "#10b981",
        "color": "#ffffff",
        "borderRadius": "8px",
        "textDecoration": "none"
      }
    }, ["Dashboard"])])])]);
  }
  if (!questions || len(questions) === 0) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("div", {}, ["No questions available"])]);
  }
  var q = questions[currentQuestion];
  function createOptionItem(i, opt) {
    var optionKey = i < 4 ? ["A", "B", "C", "D"][i] : func(i);
    var qKey = func(currentQuestion);
    var isSelected = qKey in selectedAnswers ? selectedAnswers[qKey] : "" === optionKey;
    return __jacJsx("div", {
      "key": i,
      "onClick": function onClick(e) {
        var newSelected = selectedAnswers.copy();
        newSelected[func(currentQuestion)] = i < 4 ? ["A", "B", "C", "D"][i] : func(i);
        setSelectedAnswers(newSelected);
      },
      "style": {
        "padding": "16px",
        "border": "2px solid " + isSelected ? "#065f46" : "#d1d5db",
        "borderRadius": "8px",
        "cursor": "pointer",
        "backgroundColor": isSelected ? "#f9fafb" : "#ffffff"
      }
    }, [opt]);
  }
  var option_list = [];
  var _iterator4 = _createForOfIteratorHelper(range(len(q.options))),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var i = _step4.value;
      option_list.append(createOptionItem(i, q.options[i]));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  function handlePrevious() {
    setCurrentQuestion(max(0, currentQuestion - 1));
  }
  function handleNext() {
    setCurrentQuestion(min(len(questions) - 1, currentQuestion + 1));
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f0fdfa",
      "padding": "40px"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "800px",
      "margin": "0 auto"
    }
  }, [__jacJsx("div", {
    "style": {
      "marginBottom": "24px",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center"
    }
  }, [__jacJsx(Link, {
    "to": "/lesson/" + lessonId,
    "style": {
      "padding": "0.5rem 1rem",
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "borderRadius": "8px",
      "textDecoration": "none"
    }
  }, ["← Back"]), __jacJsx("div", {
    "style": {
      "color": "#4b5563"
    }
  }, ["Question ", currentQuestion + 1, " of ", len(questions)])]), __jacJsx("div", {
    "style": {
      "backgroundColor": "#ffffff",
      "padding": "40px",
      "borderRadius": "12px",
      "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h2", {
    "style": {
      "fontSize": "1.5rem",
      "color": "#065f46",
      "marginBottom": "32px"
    }
  }, [q.question]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "gap": "16px",
      "marginBottom": "32px"
    }
  }, [option_list]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "1rem",
      "justifyContent": "space-between"
    }
  }, [__jacJsx("button", {
    "onClick": handlePrevious,
    "disabled": currentQuestion === 0,
    "style": {
      "padding": "0.75rem 1.5rem",
      "backgroundColor": "#6b7280",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "8px",
      "cursor": "pointer",
      "opacity": currentQuestion === 0 ? "0.5" : "1"
    }
  }, ["Previous"]), currentQuestion === len(questions) - 1 ? __jacJsx("button", {
    "onClick": handleSubmit,
    "style": {
      "padding": "0.75rem 1.5rem",
      "backgroundColor": "#10b981",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "8px",
      "cursor": "pointer",
      "fontWeight": "600"
    }
  }, ["Submit Quiz"]) : __jacJsx("button", {
    "onClick": handleNext,
    "style": {
      "padding": "0.75rem 1.5rem",
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "8px",
      "cursor": "pointer"
    }
  }, ["Next"])])])])]);
}
function Progress() {
  var _useState45 = useState([]),
    _useState46 = _slicedToArray(_useState45, 2),
    attempts = _useState46[0],
    setAttempts = _useState46[1];
  var _useState47 = useState([]),
    _useState48 = _slicedToArray(_useState47, 2),
    skills = _useState48[0],
    setSkills = _useState48[1];
  var _useState49 = useState(true),
    _useState50 = _slicedToArray(_useState49, 2),
    loading = _useState50[0],
    setLoading = _useState50[1];
  var _useState51 = useState(""),
    _useState52 = _slicedToArray(_useState51, 2),
    error = _useState52[0],
    setError = _useState52[1];
  var router = useRouter();
  useEffect(function () {
    if (!jacIsLoggedIn()) {
      router.navigate("/login");
      return;
    }
    function loadProgress() {
      return _loadProgress.apply(this, arguments);
    }
    function _loadProgress() {
      _loadProgress = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var username, resultAttempts, resultSkills, _t7;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              username = __getLocalStorage("jac_username");
              if (!username || username === "") {
                username = "guest";
              }
              _context9.n = 1;
              return __jacSpawn("get_user_attempts", "", {
                "user_id": username
              });
            case 1:
              resultAttempts = _context9.v;
              if (resultAttempts && resultAttempts.reports) {
                setAttempts(resultAttempts.reports[0]);
              }
              _context9.n = 2;
              return __jacSpawn("get_user_skills", "", {
                "user_id": username
              });
            case 2:
              resultSkills = _context9.v;
              if (resultSkills && resultSkills.reports) {
                setSkills(resultSkills.reports[0]);
              }
              setLoading(false);
              _context9.n = 4;
              break;
            case 3:
              _context9.p = 3;
              _t7 = _context9.v;
              setError("Failed to load progress: " + func(_t7));
              setLoading(false);
            case 4:
              return _context9.a(2);
          }
        }, _callee9, null, [[0, 3]]);
      }));
      return _loadProgress.apply(this, arguments);
    }
    loadProgress();
  });
  if (loading) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("div", {}, ["Loading progress..."])]);
  }
  function createAttemptItem(i, attempt) {
    var scorePercent = attempt.score ? attempt.score * 100 : 0;
    return __jacJsx("div", {
      "key": i,
      "style": {
        "backgroundColor": "#ffffff",
        "padding": "24px",
        "borderRadius": "12px",
        "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"
      }
    }, [__jacJsx("div", {
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center"
      }
    }, [__jacJsx("div", {}, [__jacJsx("h3", {
      "style": {
        "fontSize": "1.25rem",
        "color": "#065f46",
        "margin": "0 0 8px 0"
      }
    }, [attempt.lesson_id]), __jacJsx("p", {
      "style": {
        "color": "#6b7280",
        "margin": "0 0 8px 0"
      }
    }, ["Status: ", attempt.status]), __jacJsx("p", {
      "style": {
        "color": "#6b7280",
        "margin": "0",
        "fontSize": "0.875rem"
      }
    }, [attempt.timestamp])]), __jacJsx("div", {
      "style": {
        "textAlign": "right"
      }
    }, [__jacJsx("div", {
      "style": {
        "fontSize": "2rem",
        "fontWeight": "bold",
        "color": "#10b981"
      }
    }, [round(scorePercent), "%"]), __jacJsx("div", {
      "style": {
        "color": "#6b7280",
        "fontSize": "0.875rem"
      }
    }, ["Score"])])])]);
  }
  function createSkillItem(i, skill) {
    var conf = skill.confidence * 100;
    return __jacJsx("div", {
      "key": i,
      "style": {
        "padding": "12px",
        "borderBottom": "1px solid #e5e7eb"
      }
    }, [__jacJsx("div", {
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "marginBottom": "8px"
      }
    }, [__jacJsx("span", {
      "style": {
        "fontWeight": "600",
        "color": "#1f2937"
      }
    }, [skill.concept]), __jacJsx("span", {
      "style": {
        "color": "#065f46",
        "fontWeight": "bold"
      }
    }, [round(conf), "%"])]), __jacJsx("div", {
      "style": {
        "height": "8px",
        "backgroundColor": "#e5e7eb",
        "borderRadius": "4px",
        "overflow": "hidden"
      }
    }, [__jacJsx("div", {
      "style": {
        "width": func(conf) + "%",
        "height": "100%",
        "backgroundColor": "#10b981"
      }
    }, [])])]);
  }
  var attempt_list = [];
  var _iterator5 = _createForOfIteratorHelper(range(len(attempts))),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var i = _step5.value;
      attempt_list.append(createAttemptItem(i, attempts[i]));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var skill_list = [];
  var _iterator6 = _createForOfIteratorHelper(range(len(skills))),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _i = _step6.value;
      skill_list.append(createSkillItem(_i, skills[_i]));
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f0fdfa",
      "padding": "40px"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "1200px",
      "margin": "0 auto"
    }
  }, [__jacJsx("div", {
    "style": {
      "marginBottom": "40px",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center"
    }
  }, [__jacJsx("h1", {
    "style": {
      "fontSize": "2.5rem",
      "color": "#065f46",
      "margin": "0"
    }
  }, ["My Progress"]), __jacJsx(Link, {
    "to": "/",
    "style": {
      "padding": "0.75rem 1.5rem",
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "borderRadius": "8px",
      "textDecoration": "none",
      "fontWeight": "600"
    }
  }, ["← Dashboard"])]), error && __jacJsx("div", {
    "style": {
      "color": "#dc2626",
      "marginBottom": "24px"
    }
  }, [error]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "2fr 1fr",
      "gap": "24px"
    }
  }, [__jacJsx("div", {}, [__jacJsx("h2", {
    "style": {
      "fontSize": "1.5rem",
      "color": "#065f46",
      "marginBottom": "16px"
    }
  }, ["Recent Activity"]), len(attempts) === 0 ? __jacJsx("div", {
    "style": {
      "backgroundColor": "#ffffff",
      "padding": "40px",
      "borderRadius": "12px",
      "textAlign": "center",
      "color": "#4b5563"
    }
  }, ["No progress yet. Start a lesson to track your progress!"]) : __jacJsx("div", {
    "style": {
      "display": "grid",
      "gap": "24px"
    }
  }, [attempt_list])]), __jacJsx("div", {}, [__jacJsx("h2", {
    "style": {
      "fontSize": "1.5rem",
      "color": "#065f46",
      "marginBottom": "16px"
    }
  }, ["Skill Map"]), __jacJsx("div", {
    "style": {
      "backgroundColor": "#ffffff",
      "padding": "24px",
      "borderRadius": "12px",
      "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"
    }
  }, [len(skills) === 0 ? __jacJsx("div", {
    "style": {
      "color": "#6b7280",
      "textAlign": "center"
    }
  }, ["Skills will appear here as you learn."]) : __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "gap": "8px"
    }
  }, [skill_list])])])])])]);
}
function app() {
  return __jacJsx(HashRouter, {}, [__jacJsx(Routes, {}, [__jacJsx(Route, {
    "path": "/",
    "element": __jacJsx(Landing, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/login",
    "element": __jacJsx(Login, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/signup",
    "element": __jacJsx(Signup, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/dashboard",
    "element": __jacJsx(Dashboard, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/lesson/:id",
    "element": __jacJsx(LessonDetail, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/chat/:id",
    "element": __jacJsx(AIChat, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/quiz/:id",
    "element": __jacJsx(Quiz, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/progress",
    "element": __jacJsx(Progress, {}, [])
  }, [])])]);
}
export { AIChat, Dashboard, Landing, LessonDetail, Login, Progress, Quiz, Signup, app };