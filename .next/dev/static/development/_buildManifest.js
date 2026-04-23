self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/admin": [
    "static/chunks/pages/admin.js"
  ],
  "/dashboard/[user]": [
    "static/chunks/pages/dashboard/[user].js"
  ],
  "/incentives": [
    "static/chunks/pages/incentives.js"
  ],
  "/leaderboard": [
    "static/chunks/pages/leaderboard.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/admin",
    "/api/clear-creators",
    "/api/fetch-avatar",
    "/api/get-creator",
    "/api/get-creators",
    "/api/upload-creators",
    "/dashboard",
    "/dashboard/[user]",
    "/incentives",
    "/leaderboard"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()