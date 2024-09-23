const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const host = process.env.HOST || "0.0.0.0";
const cors = require("cors");
const cookieParser = require('cookie-parser');

//cors
const whitelist = [
    "http://localhost:3000",
    "https://hakatonfrontend-pqkjvg0q7-arzeusys-projects.vercel.app/"
];


app.use(cors({
    origin: whitelist,
    credentials: true,
    exposedHeaders: "*",
}));
app.use(cookieParser());
app.options('*', cors());

//init
require("dotenv").config({ path: "src/environment/.env.local" });

//routes
app.use(express.json());
app.use('/api',require('./routes/router'));




app.listen(port,host, () => {
    console.log(`Server running at: http://${host}:${port}/`);
})
