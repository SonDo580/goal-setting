const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRouter = require("./routes/goal");
app.use("/api/goals", goalRouter);

const { errorHandler } = require("./middlewares/errorMiddleware");
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
