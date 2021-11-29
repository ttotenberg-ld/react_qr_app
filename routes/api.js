const router = require("express").Router();

// router.get("/api", (req, res) => {
//   res.json({ message: "Welcome to our node.js and React playground!" });
// });

// router.get("/flag?", (req, res) => {
//   console.log("its hitting the back end route");
//   client.variation(
//     "node-feature",
//     { key: "nfinnegan@launchdarkly.com" },
//     false,
//     (err, showFeature) => {
//       if (showFeature) {
//         console.log("this node.js flag is ON -------->save to database 1");
//       } else if (!showFeature) {
//         console.log("this node.js flag is OFF -------->save to database 2");
//       } else {
//         res.status(404).json(err);
//       }
//     }
//   );
// });

module.exports = router;
