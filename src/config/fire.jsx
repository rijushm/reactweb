  import firebase from 'firebase';
  
  var firebaseConfig = {
    apiKey: "AIzaSyCbcn1FQPklZHq266_ulbXXNrxlZYP0YwA",
    authDomain: "my-website-project-b9957.firebaseapp.com",
    databaseURL: "https://my-website-project-b9957.firebaseio.com",
    projectId: "my-website-project-b9957",
    storageBucket: "my-website-project-b9957.appspot.com",
    messagingSenderId: "148321753920",
    appId: "1:148321753920:web:228e0a3085c4e81fa1b8a5",
    measurementId: "G-5HKC9QZ5MY"
  };

  const Fire  = firebase.initializeApp(firebaseConfig);
  export default Fire;