// import mongojs from 'mongojs';

// import * as admin from 'firebase-admin';

// const admin = require('firebase-admin')

// var serviceAccount = require('../firebaseConfig.json');

const fetch = require('node-fetch');
const header = { 'Authorization': 'Bearer UvHW9Dq0xWgYEpDrCMgoLvoFU2B4Bfzu', 'MadivaConsumer': 'AR_VALORA_PRO' }


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://test-74eeb.firebaseio.com"
// });

// var db = admin.firestore();

module.exports = app => {

  app.get('/calcularValora', function (req, res) {
    // console.log(req.query)
    var params = {
      latitude: req.query.latitude,
      longitude: req.query.longitude,
      m2: req.query.m2,
      propertyType: req.query.propertyType
    }


    const path = `ApiV3pre/rest/ar/testigos/valoracion?latitude=${params.latitude}&longitude=${params.longitude}&m2=${params.m2}&propertyType=${params.propertyType}`;



    fetch('https://madiva.inmoconsulta.com/' + path, {
      // agent: CONFIG.proxyHttps,
      headers: header
    })
      .then((response) => response.json())
      .then((json) => {
        // resolve(json);
        res.status(200).send(json);
        /*  return console.log(json); */
      })
      // .then(resData => {
      //   res.status(200).send(resData);
      // })
      .catch(err => reject(err));



    // services.calcularValora(params)
    //     .then(resData => {
    //         res.status(200).send(resData);
    //     })
    //     .catch(err => {
    //         res.send(err)
    //     })
  });

  // app.post('/get', (req, res) => {

  //   const collection = req.body.collection;

  //   console.log(collection);

  //   db.collection(collection).get()
  //     .then(snapshot => {
  //       console.log("TAMANO:   " + snapshot.length);
  //       snapshot.forEach((doc) => {
  //         // console.log(doc.id, '=>', doc.data());
  //         console.log(doc.id, " => ", doc.data());
  //         // res.json({
  //         //   response: doc.data()
  //         // })
  //       });
  //     })
  //     .catch((err) => {
  //       res.json({
  //         response: err
  //       })
  //       // console.log('Error getting documents', err);
  //     });
  // });


  // app.post('/post', (req, res) => {

  //   const collection = req.body.collection;
  //   const doc = req.body.doc;

  //   db.collection(collection).doc().set(doc).then(
  //     response => {

  //       res.json({
  //         response: {
  //           status: 'OK'
  //         }
  //       })
  //     }
  //   ).catch(
  //     error => {
  //       res.json({
  //         response: error
  //       })
  //     }
  //   )
  // });


  // app.post('/delete', (req, res) => {

  //   console.log(req.body)

  //   const collection = req.body.collection;
  //   const id = req.body.id;

  //   db.collection(collection).doc(id).delete().then(
  //     response => {

  //       res.json({
  //         response: {
  //           status: 'OK'
  //         }
  //       })
  //     }
  //   ).catch(
  //     error => {
  //       res.json({
  //         response: error
  //       })
  //     }
  //   )
  // });

};
