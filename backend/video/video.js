const express = require('express');
const router = express.Router();

const server = require('../server');


var files = [];

//To DO: Make a files button in HTML
document.getElementById("files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

//To DO: Make a submit button in HTML
document.getElementById("send").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
                                                 
      //create a storage reference
      var storage = firebase.storage().ref("Videos").child(files[i].name);

      //upload file
      var upload = storage.put(files[i]);


      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress").value = percentage;
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
          document.getElementById("uploading").innerHTML += `${files[i].name} upoaded <br />`;
        }
      );
    }
  } else {
    alert("No file chosen");
  }
});


//Gets reference to the one video. specify filename
function getFileUrl(filename) {
//.mp4 is the only movie format that it works for.

  let storage = firebase.storage().ref("Videos").child(filename);

  storage
    .getDownloadURL()
    .then(function(url) {
       console.log(url);
       document.getElementById("videourl").src=url;
    })
    .catch(function(error) {
      console.log("error encountered");
    });

}

getFileUrl("");