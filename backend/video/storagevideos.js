const express = require('express')
const firebase = require('../server/config/firebase.js');
const port = 3000;
const app = express();
const db = firebase.storage();
global.XMLHttpRequest = require("xhr2");

app.use(express.json());

//Get Video JSON
app.get("/api/videos", (req, res) => {
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
            console.log("error encountered");
        });
    })()

})

// //Post a Video
// let file = './backend/video/bread.mp4';
//
// app.post("/api/videos", (req, res) => {
//     let file = req;  //file is of type object, req = 'bread.mp4' binary by POSTMAN
//     console.log(file.name)
//     let storage = db.ref("Videos").child(file.name);
//     storage.put(file)
//         .then(function(snapshot) {
//             res.send('Uploaded video!') //this res.send does not go through
//     }).catch(function(error) {
//         console.log(error);
//     });
// })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})