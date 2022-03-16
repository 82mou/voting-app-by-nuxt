import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import { Plugin } from '@nuxt/types';

// initialize
const firebaseConfig = {
  apiKey: process.env.NUXT_ENV_FIREBASE_API_KET,
  authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NUXT_ENV_FIREBASE_DATABASE_URL,
  projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
  appID: process.env.NUXT_ENV_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

declare module 'vue/types/vue' {
  interface Vue {
    $firebase: firebase.app.App;
    // $db: firebase.firestore.Firestore;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $firebase: firebase.app.App;
    // $db: firebase.firestore.Firestore;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $firebase: firebase.app.App;
    // $db: firebase.firestore.Firestore;
  }
}

// inject
const myPlugin: Plugin = (context, inject) => {
  inject('firebase', firebase);
  // inject('db', firebase.firestore());
  inject('increment', firebase.firestore.FieldValue.increment(1));
};

// use firestorePlugin
Vue.use(firestorePlugin);

export const db = firebase.firestore();
const { Timestamp, GeoPoint, FieldValue } = firebase.firestore;
export { Timestamp, GeoPoint, FieldValue };

export default myPlugin;
