import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import app from "./app";
import {connectionDB} from "./db";
import {PORT} from "./envConfig";
import serviceAccount from "./credentials.json";

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(serviceAccount))),
});

(() => {
  connectionDB;
  app.listen(PORT);
  console.log(`listen on port ${PORT}`);
})();

export const crud = functions.https.onRequest(app);
