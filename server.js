const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3030;
// const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/api");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// client.once("ready", () => {
//   console.log("Welcome to our node.js and React playground!");
// });

// Define API routes here
// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// client.waitForInitialization().then(client) => {
//   console.log("Welcome to our node.js and React playground!");
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
