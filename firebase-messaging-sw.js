importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDyATZQa83BCVhFkPkNpqiCAlYU7ozLVSs",
  authDomain: "emergencynotificationsys-e45b1.firebaseapp.com",
  databaseURL: "https://emergencynotificationsys-e45b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "emergencynotificationsys-e45b1",
  storageBucket: "emergencynotificationsys-e45b1.appspot.com",
  messagingSenderId: "628147783877",
  appId: "1:628147783877:web:81b466ef1f914e8c5848ac"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
  alert(message);
});




console.log("LOLOLOLOLOLO");

// messaging.onMessage((message) => {
//   console.log("onBackgroundMessage", message);
//   alert(message);
// });

