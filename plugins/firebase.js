import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDxb8qU1eeu0F-A6ZuJEOuWoNPCl6nswK8",
    authDomain: "event-75f97.firebaseapp.com",
    databaseURL: "https://event-75f97.firebaseio.com",
    projectId: "event-75f97",
    storageBucket: "event-75f97.appspot.com",
    messagingSenderId: "1085545854963"
  })
}

export default firebase
