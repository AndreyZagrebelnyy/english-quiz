const indexRoute = require("express").Router();

const farmsRoutes = require("./api/farms.routes");
const userFarmsRoutes = require("./api/userFarms.routes");
const authRoute = require("./api/auth.routes")
const tokensRoute = require("./api/tokens.routes");

indexRoute.use("/", farmsRoutes);
indexRoute.use("/farms", userFarmsRoutes);
indexRoute.use("/auth", authRoute);
indexRoute.use("/tokens", tokensRoute);


module.exports = indexRoute;