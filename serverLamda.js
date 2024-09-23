const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const host = process.env.HOST || "0.0.0.0";
const cors = require("cors");
const cookieParser = require('cookie-parser');
const serverless = require("serverless-http");

const whitelist = [
  "http://localhost:3000",
  "https://hakaton-front-sepia.vercel.app/"
];


const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  exposedHeaders: "*",
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.options('*', cors(corsOptions)); 

//init
require("dotenv").config({ path: "src/environment/.env.local" });

//routes
app.use(express.json());
app.use('/api',require('./src/routes/router'));

app.listen(port,host, () => {
    console.log(`hola hola hola`);
    console.log(`Server running at: http://${host}:${port}/`);
})


module.exports = {
  handler: serverless(app)
}



