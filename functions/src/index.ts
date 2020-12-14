import * as functions from 'firebase-functions';
import * as Shippo from 'shippo';
import * as Stripe from 'stripe';

// const stripe = new Stripe(
//   'sk_test_...',
//   {
//     apiVersion: '2019-12-03',
//     typescript: true,
//   }
// );

const shippo = new Shippo('');

console.log(shippo, Stripe);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Sends an updated subscription shippment details to Shippo
export const stripeToShippoRedirect = functions.https.onRequest((request, response) => {

});

//Logic for Help me choose
export const helpMeChoose = functions.https.onRequest((request, response) => {


});

//comfirm valid email and check if customer exsists in Stripe
export const confirmEmailPassword = functions.https.onRequest((request, response) => {


});
