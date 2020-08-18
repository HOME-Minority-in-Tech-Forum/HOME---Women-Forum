const express = require('express');
const bodyParser = require('body-parser')
const JSONParser = bodyParser.json();
require('dotenv').config();
const firebase = require('../server/config/config.js');
const db = firebase.firestore();
const app = express();

//port
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

//landing page
app.get("/", (req, res) => {
    res.send("Welcome");
});

//sign in
app.post('/signin', JSONParser, (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(req.body);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => res.json({ uid: user.uid }))
        .catch((error) => {
            res.json({
                code: error.code,
                message: error.message,
            });
        });

});

//sign up
app.post('/signup', JSONParser, (req, res) => {
    const { email, username, password } = req.body;
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function (userRecord) {
            const { uid } = userRecord.user;
            firebase
                .database()
                .ref('users/' + uid)
                .set({
                    id: uid,
                    email,
                    username
                });
            res.status(200).sendStatus(200);
        })
        .catch((error) => {
            res.json({
                code: error.code,
                message: error.message,
            });
        });
});

//get all info from all companies
app.get("/api/companies", (req, res) => {

    (async function getMarkers() {
        const events = db.collection('info');
        events
        .get()
        .then((querySnapshot) => {
            const tempDoc = []
            querySnapshot.forEach((doc) => {
                tempDoc.push({ id: doc.id, ...doc.data() })
            })
            res.send(tempDoc);
            })
    })()
});


//post a single document to collection info
app.post('/api/companies', (req, res) => {
    const data = req.body;
    // res.send(data);
    db.collection("info").add(data)
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
});


//Get all Youtube Video JSON
app.get("/api/youtubevideos", (req, res) => {
    // res.send("hello");
    (async function getMarkers() {
        const events = db.collection('YoutubeVid');
        events
            .get()
            .then((querySnapshot) => {
                const tempDoc = []
                querySnapshot.forEach((doc) => {
                    tempDoc.push({ id: doc.id, ...doc.data() })
                })
                res.send(tempDoc);
            })
    })()
})

//Get all video requests and likes
app.get("/api/videosreq", (req, res) => {
    (async function getMarkers() {
        const events = db.collection('VideoReq');
        events
            .get()
            .then((querySnapshot) => {
                const tempDoc = []
                querySnapshot.forEach((doc) => {
                    tempDoc.push({ id: doc.id, ...doc.data() })
                })
                res.send(tempDoc);
            })
    })()
})

//Add a video request
app.post("/api/videosreq", (req, res) => {
    let message = req.body;
    db.collection('VideoReq')
        .doc()
        .set(message)
        .then(() => {
            res.send(message);
        })
})

app.get("/api/storagevideos", (req, res) => {
    (async function getMarkers() {
        let listRef = db.ref("Videos")
        let i = 1
        listRef.listAll().then(function(result) {
            let tempDoc = []
            let length = result.items.length
            result.items.forEach(function(itemRef) {
                itemRef.getDownloadURL()
                    .then(function(url){
                        tempDoc.push(url);
                        console.log(tempDoc);
                        if(i === length){
                            res.send(tempDoc);   //only gets 1 video url which is why I add to tempDoc
                        }
                        else{
                            i = i+1;
                        }
                    });
            });

        }).catch(function(error) {
            console.log(error);
        });
    })()

})



//Get Video from firebase storage
//TODO: Not working yet
// app.get("/api/videos", (req, res) => {
//     (async function getMarkers() {
//         let listRef = storage.ref("Videos")
//         let i = 1
//         listRef.listAll().then(function(result) {
//             let tempDoc = []
//             let length = result.items.length
//             result.items.forEach(function(itemRef) {
//                 itemRef.getDownloadURL()
//                     .then(function(url){
//                         tempDoc.push(url);
//                         console.log(tempDoc);
//                         if(i === length){
//                              res.send(tempDoc);   //only gets 1 video url which is why I add to tempDoc
//                         }
//                         else{
//                             i = i+1;
//                         }
//                     });
//             });

//         }).catch(function(error) {
//             console.log("error encountered");
//         });
//     })()
// })
app.listen(PORT, () => console.log(`Listening on ${PORT}`));