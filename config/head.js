module.exports = {
  title: "投票システム",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "format-detection", content: "telephone=no" },
    { hid: "description", name: "description", content: "投票システム" }
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
  script: [
    {
      src:
        "//www.gstatic.com/firebasejs/4.6.0/firebase.js"
    },
    {
      innerHTML: `// Initialize Firebase
var config = {
  apiKey: "AIzaSyDxb8qU1eeu0F-A6ZuJEOuWoNPCl6nswK8",
  authDomain: "event-75f97.firebaseapp.com",
  databaseURL: "https://event-75f97.firebaseio.com",
  projectId: "event-75f97",
  storageBucket: "event-75f97.appspot.com",
  messagingSenderId: "1085545854963"
};
firebase.initializeApp(config);`
    }
  ],
  // innerHTML内の文字がエスケープされるのを防ぐ
  __dangerouslyDisableSanitizers: ['script']
};
