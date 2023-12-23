const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzaFx8eJnkqgOiBr0InMY5wNIYGxsiGZU",
    authDomain: "login-page-with-asad.firebaseapp.com",
    projectId: "login-page-with-asad",
    storageBucket: "login-page-with-asad.appspot.com",
    messagingSenderId: "752517575444",
    appId: "1:752517575444:web:dc56d566916927228d0801",
    measurementId: "G-4FJFQD81VR"
  });
  
  const auth = firebaseApp.auth();
//   const dataBase = firebaseApp.firestore();

let loginForm = document.getElementById('indexPage').addEventListener('submit', (event)=>{
    event.preventDefault()
});

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace('home.html')
    }
  })


  function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email)
    console.log(password)

    auth.createUserWithEmailAndPassword(email, password)
    .then((res)=>{
        console.log( res.message)
        alert('sign up successfully');
    })
    .catch((error)=>{
        alert(error.message)
    })
  }

  
  function logIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email)
    console.log(password)

    auth.signInWithEmailAndPassword(email, password)
    .then((res)=>{
        console.log(res)
        alert('sign In successfully');
    })
    .catch((error)=>{
        console.log(error)
        alert(error.message)
    })
  }