 const express = require('express');
 const app = express();
 const path = require("path");
 const postsRoutes = require("./routes/posts");
 const userRoutes = require("./routes/user");
 const bodyParser = require("body-parser");
 const url = "mongodb://localhost:27017/mydb";
 const mongoose = require('mongoose');

 mongoose.connect(url).then(() => {
     console.log("Connected to database!");
   })
   .catch(() => {
     console.log("Connection failed!");
   });;
 const Post = require("./models/post");
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
   extended: false
 }));
 app.use("/images", express.static(path.join("/home/sanjayd/Desktop/angularApp/backend/images")));

 app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
   );
   res.setHeader(
     "Access-Control-Allow-Methods",
     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
   );
   next();
 });
 app.use("/api/posts", postsRoutes);
 app.use("/api/user", userRoutes);

 module.exports = app;
