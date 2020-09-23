const express = require('express');
const cors = require('cors')

const {admin} = require('./config/config.js');
require('dotenv').config();


const app = express();


//port
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//import routes
const storageVideos = require('./routes/storageVideos');
const videoRequests = require('./routes/videoReqs');
// const {videoRequests, postVideoReqs} = require('./routes/videoReqs');
const videos = require('./routes/videos');
const companiesInfo = require('./routes/company');

//check authorization, if the current user is signed in
const checkAuth = (req, res, next) => {
    // console.log(req.headers.authtoken)
 
    if (req.headers.authtoken) {
        //idToken comes from the client app
        admin.auth().verifyIdToken(req.headers.authtoken)
        .then(function(decodedToken) {
            let uid = decodedToken.uid;
            console.log(uid)
            next();
        }).catch(function(error) {
            // Handle error
            res.status(403).send('Unauthorized');
        });
    } else {
        console.log('hitting')
        res.status(403).send('Unauthorized');
    }
  
}


//landing page
app.use("/", checkAuth);
app.get("/", (req, res) => {
    res.send("Hello World!");
});



//get all info from all companies
app.use("/api/companies", companiesInfo);

//Get all Youtube Video JSON
app.use("/api/videos", videos);

//Get all video requests and likes
app.use("/api/videosreq", videoRequests);

//Get Video from firebase storage 
app.use("/api/storage/videos", storageVideos);


//check authorization to all post routes that starts with /api/post
// app.use('/api/post/', checkAuth);

//post route for video request
app.use("/api/post", videoRequests);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// module.exports = app;