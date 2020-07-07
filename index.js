const app = require("./server/server");

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log("Listening");
});
