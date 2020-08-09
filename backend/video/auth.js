const express = require('express');
const firebase = require('../server/config/firebase.js');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');
const JSONParser = bodyParser.json();

// To test this route on POSTMAN, Choose Body -> raw + JSON
// Example: localhost:5000/api/auth/signin
// If sign in successfully, response sends back status 200
// If sign in fail, response sends back status 200, errorCode and errorMessage
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
// To test this route on POSTMAN, Choose Body -> raw + JSON
// Example: localhost:5000/api/auth/signup
// If sign up successfully, response sends back status 200
// If sign up fail due to incorrect username or password but request has been processed by firebase,
//    response sends back status 200, code and message.
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
// Nothing to get currently
// app.get('/:uid', (req, res) => {
//     const uid = req.params.uid;
//     console.log(uid)
//     firebase
//         .database()
//         .ref('users/' + uid)
//         .once('value')
//         .then((data) => {
//             if (data.val() != null) {
//                 let val = Object(data.val());
//
//                 res.json(val);
//             } else {
//                 res.send('DOESNT EXIST');
//             }
//         })
//         .catch((err) => res.json({ err: err.message }));
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})