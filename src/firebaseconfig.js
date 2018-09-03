const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyAKvceT9qVXHgYJaYqUmsfI8TyruWofx4o",
    authDomain: "projeto-curso-teste.firebaseapp.com",
    databaseURL: "https://projeto-curso-teste.firebaseio.com",
    projectId: "projeto-curso-teste",
    storageBucket: "projeto-curso-teste.appspot.com",
    messagingSenderId: "1039666990784"
  };

  const app = firebase.initializeApp(FirebaseConfig);
  const config = Rebase.createClass(app.database());

  export const storage = app.storage();

  export default config;
