const express = require('express');
const {firebase, admin} = require('../config/config.js');
const router = express.Router()
require('dotenv').config();
const bodyParser = require('body-parser');
const JSONParser = bodyParser.json();

//get all user info 
//this route needs to get authorization
router.get('/userinfo', JSONParser, (req, res) => {
    // let pic = firebase
    //     .auth().currentUser.photoURL || '/images/profile_placeholder.png'
    //     .then(function (result) {
    //     }).catch(function (error) {
    //         res.send(error);
    //     });
    // let name = firebase
    //     .auth().currentUser.displayName || 'User'
    //     .then(function (result) {
    //     }).catch(function (error) {
    //         res.send(error);
    //     });
    // res.send({displayName: name, photoURL: pic});
    // db.collection('user').
});


module.exports = router;