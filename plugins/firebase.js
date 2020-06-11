import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.NUXT_ENV_FIREBASE_API_KET,
  authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NUXT_ENV_FIREBASE_DATABASE_URL,
  projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
  appID: process.env.NUXT_ENV_FIREBASE_APP_ID,
}

firebase.initializeApp(firebaseConfig);

export default firebase
