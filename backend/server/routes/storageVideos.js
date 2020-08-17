const express = require('express');
const firebase = require('../config/config.js');
const router = express.Router()
require('dotenv').config();

const storage = firebase.storage();

//Get Video from firebase storage 
router.get("/", (req, res) => {
    (async function getMarkers() {
        let listRef = storage.ref("Videos")
        let i = 1
        listRef.listAll().then(function(result) {
            let tempDoc = []
            let length = result.items.length
            result.items.forEach(function(itemRef) {
                itemRef.getDownloadURL()
                    .then(function(url){
                        tempDoc.push(url);
                        // console.log(tempDoc);
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

module.exports = router;