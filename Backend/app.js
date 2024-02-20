const express = require("express");
const cookieParser = require('cookie-parser');
const database = require("./config/db");
const authRouter = require("./router/routes");
const cors=require("cors");
const app = express();

// Connect to the database
database();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth/', authRouter);

//cors//
app.use(cors({
    origin:[process.env.CLIENT_URL],
    credentials:true
}))


// Fallback route
// app.use("/", (req, res) => {
//     res.status(200).json({
//         data: "JWT auth server"
//     });
// });

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

module.exports = app;
