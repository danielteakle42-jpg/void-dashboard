module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
;
;
;
;
function Home() {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    function cleanUsername(name) {
        return (name || "").toString().replace('@', '').replace(/\s+/g, '').toLowerCase().trim();
    }
    async function go() {
        if (loading) return;
        const u = cleanUsername(username);
        if (!u) {
            setError("Enter a username");
            return;
        }
        setError('');
        setLoading(true);
        try {
            if (u === 'ppn777' || u === 'ppm1') {
                localStorage.setItem('user', u);
                router.push('/admin');
                return;
            }
            const res = await fetch('/api/get-creators');
            const data = await res.json();
            const list = data?.creators || [];
            const found = list.find((c)=>c.username === u);
            if (!found) {
                setError("User not found");
                setLoading(false);
                return;
            }
            localStorage.setItem('user', u);
            router.push(`/dashboard/${u}`);
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "jsx-48789ffa19b97b5c" + " " + "wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-48789ffa19b97b5c" + " " + "bg"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-48789ffa19b97b5c" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: "/logo.jpg",
                        onError: (e)=>{
                            e.target.src = "https://api.dicebear.com/7.x/initials/png?seed=VOID";
                        },
                        className: "jsx-48789ffa19b97b5c" + " " + "logo"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "jsx-48789ffa19b97b5c",
                        children: "VOID"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "jsx-48789ffa19b97b5c" + " " + "sub",
                        children: "Enter your creator dashboard"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        value: username,
                        onChange: (e)=>{
                            setUsername(e.target.value);
                            setError('');
                        },
                        placeholder: "@username",
                        onKeyDown: (e)=>e.key === 'Enter' && go(),
                        className: "jsx-48789ffa19b97b5c"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-48789ffa19b97b5c" + " " + "error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 91,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: go,
                        disabled: loading,
                        className: "jsx-48789ffa19b97b5c",
                        children: loading ? "Entering..." : "Enter Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "48789ffa19b97b5c",
                children: ".wrapper.jsx-48789ffa19b97b5c{background:#050505;justify-content:center;align-items:center;min-height:100vh;display:flex;position:relative}.bg.jsx-48789ffa19b97b5c{opacity:.15;pointer-events:none;background:radial-gradient(circle,#7c3aed,#0000 70%);width:600px;height:600px;position:absolute}.card.jsx-48789ffa19b97b5c{z-index:2;text-align:center;background:#0a0a14;border:1px solid #7c3aed40;border-radius:20px;width:100%;max-width:420px;padding:42px;position:relative;box-shadow:0 20px 60px #000c,0 0 40px #7c3aed26}.logo.jsx-48789ffa19b97b5c{border-radius:14px;width:80px;margin-bottom:20px}h1.jsx-48789ffa19b97b5c{color:#0000;background:linear-gradient(90deg,#7c3aed,#06b6d4);-webkit-background-clip:text;margin-bottom:6px;font-size:38px;font-weight:900}.sub.jsx-48789ffa19b97b5c{opacity:.6;margin-bottom:28px;font-size:14px}input.jsx-48789ffa19b97b5c{color:#fff;background:#111827;border:1px solid #ffffff14;border-radius:12px;outline:none;width:100%;padding:14px;transition:border .2s}input.jsx-48789ffa19b97b5c:focus{border-color:#7c3aed}.error.jsx-48789ffa19b97b5c{color:#f87171;margin-top:10px;font-size:13px}button.jsx-48789ffa19b97b5c{cursor:pointer;color:#fff;background:linear-gradient(90deg,#7c3aed,#06b6d4);border:none;border-radius:12px;width:100%;margin-top:20px;padding:14px;font-weight:700;transition:opacity .2s,box-shadow .2s}button.jsx-48789ffa19b97b5c:hover{box-shadow:0 0 20px #7c3aed66}button.jsx-48789ffa19b97b5c:disabled{opacity:.6;cursor:not-allowed}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__101nxb~._.js.map