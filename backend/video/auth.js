const express = require('express');
const firebase = require('../server/config/config.js');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');
const JSONParser = bodyParser.json();

// To test this route on POSTMAN, Choose Body -> raw + JSON
// Example: localhost:3000/signin
// If sign in successfully, response sends back status 200
// If sign in fail, response sends back status 200, errorCode and errorMessage
app.post('/signin', JSONParser, (req, res) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            res.send(result.user);
        }).catch(function (error) {
            res.send(error);
    });
});

app.post('/signout', JSONParser, (req, res) => {
     firebase
         .auth()
         .signOut()
         .then(function (result) {
            res.send(result);
         }).catch(function (error) {
         res.send(error);
     });
});

app.get('/userinfo', JSONParser, (req, res) => {
    let pic = firebase
        .auth().currentUser.photoURL || '/images/profile_placeholder.png'
        .then(function (result) {
        }).catch(function (error) {
            res.send(error);
        });
    let name = firebase
        .auth().currentUser.displayName || 'User'
        .then(function (result) {
        }).catch(function (error) {
            res.send(error);
        });
    res.send({displayName: name, photoURL: pic});
});



///// Email + Password
app.post('/login', JSONParser, (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
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


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


//
// let provider = new firebase.auth.GoogleAuthProvider();
//
// function signIn(){
//     firebase
//         .auth()
//         .signInWithPopup(provider)
//         .then(function (result) {
//             console.log("hello");
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             //var token = result.credential.accessToken;
//             // The signed-in user info.
//             //var user = result.user;
//             //console.log(user)
//         }).catch(function (error) {
//         // Handle Errors here.
//         //var errorCode = error.code;
//         //var errorMessage = error.message;
//         //var email = error.email;
//         //var credential = error.credential;
//         console.log(errorMessage)
//     });
// }
//
// // Signs-out of HOME
// function signOut() {
//     // Sign out of Firebase.
//     firebase.auth().signOut();
// }

// // Initiate Firebase Auth.
// function initFirebaseAuth() {
//     // Listen to auth state changes.
//     firebase.auth().onAuthStateChanged(authStateObserver);
// }
//
// // Returns the signed-in user's profile pic URL.
// function getProfilePicUrl() {
//     return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
// }
//
// // Returns the signed-in user's display name.
// function getUserName() {
//     return firebase.auth().currentUser.displayName;
// }
//
// // Adds a size to Google Profile pics URLs.
// function addSizeToGoogleProfilePic(url) {
//     if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
//         return url + '?sz=150';
//     }
//     return url;
// }
//
// // Triggers when the auth state change for instance when the user signs-in or signs-out.
// function authStateObserver(user) {
//     if (user) { // User is signed in!
//         // Get the signed-in user's profile pic and name.
//         var profilePicUrl = getProfilePicUrl();
//         var userName = getUserName();
//
//         // Set the user's profile pic and name.
//         userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
//         userNameElement.textContent = userName;
//
//         // Show user's profile and sign-out button.
//         userNameElement.removeAttribute('hidden');
//         userPicElement.removeAttribute('hidden');
//         signOutButtonElement.removeAttribute('hidden');
//
//         // Hide sign-in button.
//         signInButtonElement.setAttribute('hidden', 'true');
//
//         // We save the Firebase Messaging Device token and enable notifications.
//         //saveMessagingDeviceToken();
//     } else { // User is signed out!
//         // Hide user's profile and sign-out button.
//         userNameElement.setAttribute('hidden', 'true');
//         userPicElement.setAttribute('hidden', 'true');
//         signOutButtonElement.setAttribute('hidden', 'true');
//
//         // Show sign-in button.
//         signInButtonElement.removeAttribute('hidden');
//     }
// }
//
// let userPicElement = document.getElementById('user-pic');
// let userNameElement = document.getElementById('user-name');
// let signInButtonElement = document.getElementById('sign-in');
// let signOutButtonElement = document.getElementById('sign-out');
//
// signOutButtonElement.addEventListener('click', signOut);
// signInButtonElement.addEventListener('click', signIn);

// initialize Firebase
//initFirebaseAuth();



