const express = require('express');
const firebase = require('../config/config.js');
const router = express.Router()
require('dotenv').config();
const bodyParser = require('body-parser');
const JSONParser = bodyParser.json();

///// Email + Password
router.post('/login', JSONParser, (req, res) => {
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

router.post('/signup', JSONParser, (req, res) => {
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



//Sign in w/ Google and Facebook -- Need to test
router.post('/signin', JSONParser, (req, res) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    //firebase.auth.FacebookAuthProvider()
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            res.send(result.user);
        }).catch(function (error) {
        res.send(error);
    });
});

router.post('/signout', JSONParser, (req, res) => {
    firebase
        .auth()
        .signOut()
        .then(function (result) {
            res.send(result);
        }).catch(function (error) {
        res.send(error);
    });
});

router.get('/userinfo', JSONParser, (req, res) => {
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


module.exports = router;