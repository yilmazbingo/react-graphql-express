const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
const history = require("connect-history-api-fallback");
const app = express();

//To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true }
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/graphqlDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log("error in mongose", e.message), process.exit(1);
  })
  .then(() => console.log("connected to the mongodb"));
// mongoose.connection
//   .once("open", () => console.log("Connected to MongoLab instance."))
//   .on("error", (error) => console.log("Error connecting to MongoLab:", error));

app.use(express.static("public"));
app.use(bodyParser.json());

//graphiql is a development tool that allows us to make queries against our development server so only intended to use in development.

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
const compiler = webpack(webpackConfig);
//this enables routing
app.use(history());

app.use(webpackMiddleware(compiler, compiler.options.devServer));

module.exports = app;
