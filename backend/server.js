const express = require("express");
require("dotenv").config();

const app = express();

const goalRouter = require("./routes/goal");
app.use("/api/goals", goalRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
