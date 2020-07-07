const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
const history = require("connect-history-api-fallback");
const app = express();

const Song = mongoose.model("song");
const Lyric = mongoose.model("lyric");

console.log(process.env.MONGODB_URL);

//To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true }
mongoose.Promise = global.Promise;

let dbUrl = process.env.DB_URL;
mongoose
  .connect(`${dbUrl}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log("error in mongose", e.message),
      e ? (dbUrl = "mongodb://localhost:27017/graphqlDB") : process.exit(1);
  })
  .then(() => console.log("connected to the mongodb"))
  .catch(() => {
    console.log("Please check your database connection on server");
  });
// mongoose.connection
//   .once("open", () => console.log("Connected to MongoLab instance."))
//   .on("error", (error) => console.log("Error connecting to MongoLab:", error));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//graphiql is a development tool that allows us to make queries against our development server so only intended to use in development.

app.use("/delete", async (req, res) => {
  await Song.deleteMany();
  res.redirect("/");
});

app.use("/deletelyrics", async (req, res) => {
  await Lyric.deleteMany();
  res.redirect("/");
});
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

//this enables routing
app.use(history());

const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
const compiler = webpack(webpackConfig);

app.use(
  webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(
  webpackHotMiddleware(compiler, {
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000,
  })
);

module.exports = app;
