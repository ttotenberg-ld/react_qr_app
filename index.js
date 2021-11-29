// This example repeats the code from the previous example because in Node, the client methods are
// asynchronous, so in order to add another step that happens after the previous steps are finished,
// we need to add code *inside* the existing block. In other words, do not type the whole thing over
// again, just modify the last part you added as shown.
//
// Again, in a real application, this step is something you would only do when the application is
// about to quit, not after every call to variation().

//does NOT work--moving on for now*****

const LaunchDarkly = require("launchdarkly-node-server-sdk");

const client = LaunchDarkly.init("sdk-f736700e-5e55-4221-a045-3dfc960e01ef");

// client.waitForInitialization().then(client) => {
//   console.log("Welcome to our node.js and React playground!");
// });

const checkingFlag = async () => {
  try {
    await client.waitForInitialization();
  } catch (err) {
    console.log(err);
  }
  var showFeature = await client.variation(
    "node-feature",
    { key: "5de6fc8b62da8a3d7fc41402624f2319" },
    false
  );
  console.log("line 27", showFeature);
  if (showFeature) {
    console.log("this node.js flag is ON");
  } else {
    console.log("this node.js flag is OFF");
  }
};

// client
//   .waitForInitialization()
//   .then(() => {
//     console.log("Welcome to our node.js and React playground!");
//   })
//   .then((client) => {
//     var showFeature = client.variation(
//       "node-feature",
//       { key: "5de6fc8b62da8a3d7fc41402624f2319" },
//       false
//     );
//     if (showFeature) {
//       console.log("this node.js flag is ON");
//     } else {
//       console.log("this node.js flag is OFF");
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const checkingFlag = () => {};

checkingFlag();
