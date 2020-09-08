const express = require('express');
// const firebase = require('./config/config.js');
require('dotenv').config({path: "../.env"});
var cors = require('cors');

const app = express();


//port
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//import routes
const storageVideos = require('./routes/storageVideos');
const videoRequests = require('./routes/videoReqs');
const videos = require('./routes/videos');
const companiesInfo = require('./routes/company');
const auth = require('./routes/auth');
const chat = require('./routes/chat');

//landing page
app.get("/", (req, res) => {
    res.send("Welcome");
});



//get all info from all companies
app.use("/api/companies", companiesInfo);

//Get all Youtube Video JSON
app.use("/api/videos", videos);

//Get all video requests and likes
app.use("/api/videosreq", videoRequests);

//Get Video from firebase storage 
app.use("/api/storage/videos", storageVideos);

//Sign in and Sign out
app.use("/api/auth", auth);

//Chat thread
app.use("/api/chat", chat);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));