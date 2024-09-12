// const express = require("express");
// const morgan = require("morgan");

// const hospitalRouter = require("./routes/hospitalRoutes");
// // const userRouter = require("./routes/userRoutes");

// const app = express();

// app.use(express.json());

// // 3) ROUTES

// app.use("/api/v1/hospital", hospitalRouter);
// // app.use("/api/v1/users", userRouter);

// module.exports = app;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); // Import cors

const hospitalRouter = require("./routes/hospitalRoutes");
// const userRouter = require("./routes/userRoutes");

const app = express();

// Enable CORS for all routes
app.use(cors()); // Allow all origins

// OR allow only specific origin (your frontend)
// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500", // Replace this with your frontend's URL if needed
//   })
// );

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json("Welcome to the server ");
// });

// 3) ROUTES
app.use("/api/v1/hospital", hospitalRouter);
// app.use("/api/v1/users", userRouter);

module.exports = app;
