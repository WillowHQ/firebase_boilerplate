import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/storage"
import "firebase/analytics"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC3S8T72q8RzPcxKesk5IjqHRhP9qY4IgU",
    authDomain: "auth-mar-23.firebaseapp.com",
    projectId: "auth-mar-23",
    storageBucket: "auth-mar-23.appspot.com",
    messagingSenderId: "673057412398",
    appId: "1:673057412398:web:61c7479c5a496da46196bf",
    measurementId: "G-MD993K8F4H"
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)



export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

// export const IDStorage = firebase.app().storage("gs://auth-mar-23-ids/");
if (process.env.NEXT_PUBLIC_DB_HOST === 'localhost') {
  // db.useEmulator('localhost', 8080)
  console.log("using ems")
} 
// export { db, auth, storage }
// export default firebase;

//  COLLECTIONS
 export const PRIVATE_PROFILES = "private-profiles";
 export const SPACS = "spacs";
 export const SPAC_USERS = "spac-users";
 export const USER_PROFILES = "user-profiles";
 export const FORMS = "forms";



/**
 * Updates the document with the provided data.
 * Additionally appends the `updatedAt` and `updatedBy`
 * fields to the document. If you want to a changeLog
 * add a triggered cloud function to the collection you want a changelog on
 *
 * @param {String} collection Firebase collection name
 * @param {String} id Firebase document id
 * @param {Object} data Updates that needs to be applied
 * @returns {Object} Applied updates to the document
 */
export async function updateDocument(collection, id, data) {
  if (!collection || !id || !data) return null

  const documentRef = db.doc(`${collection}/${id}`)
  const updatedAt = Date.now()
  const updatedBy = auth.currentUser ? auth.currentUser.uid : null

  const updates = {...data, updatedAt, updatedBy}

  await documentRef.update(updates)

  return updates
}


export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

