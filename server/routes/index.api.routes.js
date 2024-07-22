const indexRoute = require("express").Router();

const categoriesRoutes = require("./api/categories.routes");
const tasksRoutes = require("./api/tasks.routes");
const authRoute = require("./api/auth.routes")
const tokensRoute = require("./api/tokens.routes");

indexRoute.use("/categories", categoriesRoutes);
indexRoute.use("/tasks", tasksRoutes);
indexRoute.use("/auth", authRoute);
indexRoute.use("/tokens", tokensRoute);


module.exports = indexRoute;