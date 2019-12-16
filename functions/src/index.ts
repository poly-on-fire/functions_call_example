import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// https://us-central1-delmcast.cloudfunctions.net/helloWorld
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Pete, from Firebase!");
});


// https://us-central1-delmcast.cloudfunctions.net/helloThere
export const helloThere = functions.https.onCall((data) => {
  const text = data.text;
  const message = "hello " + text;
  return { text: message };
});
