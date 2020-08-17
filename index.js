const express = require("express");
const cors = require("cors");
const videosRoute = require("./routes/videos.js");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/videos", videosRoute);

app.listen(PORT, () => {
  console.log("the server is running!");
});
