const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blog-routes.js");
const router = require("./routes/user-routes");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successful"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Backend server is running at ${process.env.PORT}!`);
});
