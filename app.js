const express = require("express");
const PORT = 3000;
const taskRouter = require("./routes/taskRoutes");
const connectDB = require("./db/dbConnect");
require("dotenv").config();

const app = express();

app.use(express.static("./public"));
//parsing middleware
app.use(express.json());
//routes
app.use("/api/v1/tasks", taskRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
