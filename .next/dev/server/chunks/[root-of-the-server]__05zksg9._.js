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
"[project]/lib/data.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getCreator",
    ()=>getCreator,
    "getCreators",
    ()=>getCreators
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
/* ================= HELPERS ================= */ function cleanUsername(name) {
    return (name || '').toString().replace('@', '').toLowerCase().trim();
}
function num(v) {
    const n = Number(v);
    return isNaN(n) ? 0 : n;
}
/* ================= GAME ENGINE ================= */ function enrich(list) {
    const sorted = [
        ...list
    ].sort((a, b)=>b.diamonds - a.diamonds);
    const total = sorted.length;
    /* 🔥 FIND MAX GAP (FOR LEADERBOARD BARS) */ const maxGap = Math.max(...sorted.map((c, i)=>{
        const below = sorted[i + 1];
        return below ? c.diamonds - below.diamonds : 0;
    }), 1);
    return sorted.map((c, i)=>{
        const rank = i + 1;
        const above = sorted[i - 1];
        const below = sorted[i + 1];
        const gapUp = above ? Math.max(above.diamonds - c.diamonds, 0) : 0;
        const gapDown = below ? Math.max(c.diamonds - below.diamonds, 0) : 0;
        /* 🔥 GAP % (FOR LEADERBOARD) */ const gapPercent = Math.min(gapDown / maxGap * 100, 100);
        /* 🎮 XP SYSTEM (FOR DASHBOARD) */ const level = Math.floor(c.diamonds / 20000) + 1;
        const xp = c.diamonds % 20000;
        const xpPercent = Math.min(xp / 20000 * 100, 100);
        /* 🔥 STREAK */ const streak = Math.min(Math.floor(c.live_days / 3), 5);
        /* 🏆 TIERS */ let tier = "BRONZE";
        if (c.diamonds >= 150000) tier = "ELITE";
        else if (c.diamonds >= 100000) tier = "DIAMOND";
        else if (c.diamonds >= 50000) tier = "GOLD";
        else if (c.diamonds >= 10000) tier = "SILVER";
        return {
            ...c,
            rank,
            total,
            gapUp,
            gapDown,
            gapPercent,
            level,
            xp,
            xpPercent,
            streak,
            tier
        };
    });
}
async function getCreators() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('creators').select('*').order('diamonds', {
            ascending: false
        });
        if (error) {
            console.error('❌ Supabase error:', error);
            throw error;
        }
        if (!data || data.length === 0) {
            console.warn('⚠️ No data in DB');
            return [];
        }
        const cleaned = data.map((row)=>({
                username: cleanUsername(row.username),
                diamonds: num(row.diamonds),
                live_days: num(row.live_days),
                live_hours: num(row.live_hours),
                avatar: row.avatar || `https://unavatar.io/tiktok/${cleanUsername(row.username)}`
            }));
        return enrich(cleaned);
    } catch (err) {
        console.error('❌ getCreators failed:', err);
        return [];
    }
}
async function getCreator(username) {
    try {
        const target = cleanUsername(username);
        const list = await getCreators();
        return list.find((c)=>c.username === target) || null;
    } catch (err) {
        console.error('❌ getCreator failed:', err);
        return null;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/api/get-creators.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.js [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function handler(req, res) {
    /* ===== METHOD CHECK ===== */ if (req.method !== 'GET') {
        return res.status(405).json({
            success: false,
            error: 'Method not allowed'
        });
    }
    try {
        /* ===== FETCH ===== */ let raw = [];
        try {
            raw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__["getCreators"])();
        } catch (err) {
            console.error('DATA FETCH ERROR:', err);
            raw = [];
        }
        /* ===== SAFETY ===== */ if (!Array.isArray(raw)) {
            console.warn('Invalid creators format:', raw);
            raw = [];
        }
        /* ===== SORT ===== */ const sorted = [
            ...raw
        ].sort((a, b)=>(Number(b?.diamonds) || 0) - (Number(a?.diamonds) || 0));
        const total = sorted.length;
        /* ===== NORMALIZE ===== */ const creators = sorted.map((c, i)=>{
            const diamonds = Number(c?.diamonds) || 0;
            const below = sorted[i + 1];
            const above = sorted[i - 1];
            const belowDiamonds = Number(below?.diamonds) || 0;
            const aboveDiamonds = Number(above?.diamonds) || 0;
            const gapDown = Math.max(diamonds - belowDiamonds, 0);
            const gapUp = Math.max(aboveDiamonds - diamonds, 0);
            const gapPercent = diamonds > 0 ? Math.min(gapDown / diamonds * 100, 100) : 0;
            return {
                username: c?.username || '',
                diamonds,
                live_days: Number(c?.live_days) || 0,
                live_hours: Number(c?.live_hours) || 0,
                avatar: c?.avatar || `https://unavatar.io/tiktok/${c?.username || 'user'}`,
                /* CORE */ rank: i + 1,
                total,
                /* GAME DATA */ level: Number(c?.level) || 1,
                xp: Number(c?.xp) || 0,
                xpPercent: Math.min(Number(c?.xpPercent) || 0, 100),
                streak: Number(c?.streak) || 0,
                tier: c?.tier || 'BRONZE',
                /* GAP SYSTEM */ gapUp,
                gapDown,
                gapPercent,
                percentile: total ? Math.round((1 - i / total) * 100) : 0
            };
        });
        return res.status(200).json({
            success: true,
            creators
        });
    } catch (err) {
        console.error('❌ GET CREATORS CRASH:', err);
        return res.status(500).json({
            success: false,
            error: 'Server error',
            details: err.message
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05zksg9._.js.map