module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/supabase.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, esm_import, [project]/node_modules/@supabase/supabase-js)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
/* ================= ENV ================= */ const supabaseUrl = ("TURBOPACK compile-time value", "https://dlmzyuwatgzsrhovkgps.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsbXp5dXdhdGd6c3Job3ZrZ3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODg3NDgsImV4cCI6MjA5MjI2NDc0OH0.PXk4O6bODPkTSwIaCMXEyqlHinXeu5TKo3TJVA3nBxc");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
/* ================= GLOBAL CLIENT ================= */ let supabase;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    // 🔥 Prevent multiple instances in dev (Next.js hot reload fix)
    if (!/*TURBOPACK member replacement*/ __turbopack_context__.g._supabase) {
        /*TURBOPACK member replacement*/ __turbopack_context__.g._supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__["createClient"])(supabaseUrl, supabaseKey);
    }
    supabase = /*TURBOPACK member replacement*/ __turbopack_context__.g._supabase;
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/api/upload-creators.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
/* ================= HELPERS ================= */ function cleanUsername(name) {
    return (name || '').toString().replace('@', '').trim().toLowerCase();
}
function parseDuration(str) {
    if (!str) return 0;
    let hours = 0;
    const h = str.match(/(\d+\.?\d*)h/i);
    const m = str.match(/(\d+\.?\d*)m/i);
    const s = str.match(/(\d+\.?\d*)s/i);
    if (h) hours += parseFloat(h[1]);
    if (m) hours += parseFloat(m[1]) / 60;
    if (s) hours += parseFloat(s[1]) / 3600;
    return Number(hours.toFixed(2));
}
/* ================= PARSER ================= */ function parseRow(row) {
    if (!row) return null;
    const usernameRaw = row["Creator's username"] || row["Username"] || row["username"];
    if (!usernameRaw) return null;
    const username = cleanUsername(usernameRaw);
    if (!username || username.length < 3 || username.includes('~')) {
        return null;
    }
    return {
        username,
        diamonds: Number(row["Diamonds"] ?? row["diamonds"]) || 0,
        live_days: Number(row["Valid go LIVE days"] ?? row["live_days"]) || 0,
        live_hours: parseDuration(row["LIVE duration"] ?? row["live_hours"]),
        avatar: `https://unavatar.io/tiktok/${username}`
    };
}
async function handler(req, res) {
    try {
        /* ===== METHOD ===== */ if (req.method !== 'POST') {
            return res.status(405).json({
                success: false,
                error: 'Method not allowed'
            });
        }
        /* ===== SAFE BODY ===== */ const body = req.body || {};
        const admin = body.admin;
        const data = body.data;
        /* ===== AUTH ===== */ if (!admin || ![
            'ppn777',
            'ppm1'
        ].includes(admin)) {
            return res.status(403).json({
                success: false,
                error: 'Unauthorized'
            });
        }
        /* ===== VALIDATE ===== */ if (!Array.isArray(data)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid data format'
            });
        }
        if (data.length > 5000) {
            return res.status(400).json({
                success: false,
                error: 'Too many rows'
            });
        }
        /* ===== PARSE ===== */ const cleaned = data.map(parseRow).filter(Boolean);
        if (!cleaned.length) {
            return res.status(400).json({
                success: false,
                error: 'No valid rows found'
            });
        }
        /* ===== UNIQUE ===== */ const unique = Object.values(Object.fromEntries(cleaned.map((c)=>[
                c.username,
                c
            ])));
        /* ===== CLEAR TABLE (SAFE) ===== */ const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('creators').delete().gt('id', 0) // 🔥 ALWAYS WORKS
        ;
        if (deleteError) {
            console.error('DELETE ERROR:', deleteError);
            throw deleteError;
        }
        /* ===== INSERT ===== */ const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('creators').insert(unique);
        if (insertError) {
            console.error('INSERT ERROR:', insertError);
            throw insertError;
        }
        return res.status(200).json({
            success: true,
            count: unique.length
        });
    } catch (err) {
        console.error('UPLOAD ERROR:', err);
        return res.status(500).json({
            success: false,
            error: err.message || 'Upload failed'
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0xdi14e._.js.map