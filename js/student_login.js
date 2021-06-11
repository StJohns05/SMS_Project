// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDuu4FIsR0yRIkOrtu6T59lqfPbN7SG53M",
  authDomain: "sms-demo-9ec85.firebaseapp.com",
  databaseURL: "https://sms-demo-9ec85-default-rtdb.firebaseio.com",
  projectId: "sms-demo-9ec85",
  storageBucket: "sms-demo-9ec85.appspot.com",
  messagingSenderId: "401316316472",
  appId: "1:401316316472:web:2929d9673d92fbfbb66dcd"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



var sname = "";
var regno = "";
var phoneno = "";
var email = "";
var password = "";
var conpassword = "";

const errorSignUP = document.querySelector("#errorTxt-signUp");
const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", function(event) {
  
  errorSignUP.innerHTML = "";
  sname = document.querySelector(".name").value.trim();
  regno = document.querySelector(".regno").value.trim();
  phoneno = document.querySelector(".phoneno").value.trim();
  email = document.querySelector(".email").value.trim();
  password = document.querySelector(".password").value.trim();
  conpassword = document.querySelector(".conpassword").value.trim();

  // Simple validations -- NO ONE TOUCH THESE
  
  if (sname.length != 0 && regno.length != 0 && phoneno.length != 0 && email.length != 0 && password.length) {

    if (password == conpassword) {
      
      // If all the validations get succeed!
      signup();
      event.preventDefault();
    }
    else {

      // alert("Password doesn't match");
      errorSignUP.innerHTML = "Password doesn't matches ...."
      event.preventDefault();
    }
  }  
  else {

    // alert("Password doesn't match");
    errorSignUP.innerHTML = "Please fill all the fields with valid data"
    event.preventDefault();
  }

  // Simple validations end here
});


function signup() {
  console.log("Success!");

  console.log(sname);
  console.log(regno);
  console.log(phoneno);
  console.log(email);
  console.log(password);
  console.log(conpassword);


  auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {

      console.log("Success!");
      console.log(cred.user);
      
      database.ref("Students/" + cred.user.uid).set({
        Name: sname,
        Regno: regno,
        Phoneno: phoneno,
        Email: email,
        Password: password
      });
      document.querySelector("#signupForm").reset(); 

      // document.querySelector("#signupForm").reset(); 
      // document.querySelector("#signupForm").reset(); 
      cred.user.updateProfile({
        displayName: sname
      });

      alert("Sign up successful");
      document.querySelector("#sign-in-btn").click();
    })
    .catch((error) => {
      errorSignUP.innerHTML = error.message;
    });


}



const errorSignIn = document.querySelector("#errorTxt-signIn");
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", function(event) {

  errorSignIn.innerHTML = "";
  event.preventDefault();

  email = document.querySelector(".login-email").value.trim();
  password = document.querySelector(".login-password").value.trim();

  if (email.length != 0 && password.length != 0) {

    login();
  }
  else {

    errorSignIn.innerHTML = "Invalid Register number or Password!";
  }
});


function login() {

  auth.signInWithEmailAndPassword(email, password).then((cred) => {

    
    console.log("Successfully signed-in" );
    console.log(cred);
    document.querySelector("#loginForm").reset();
    // sessionStorage.setItem("user", JSON.stringify(auth.currentUser));
    window.location.href = "./student_dashboard.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode == "auth/wrong-password") {
      errorSignIn.innerHTML = "Invalid Password !";
    }
    else if (errorCode == "auth/user-not-found") {
      errorSignIn.innerHTML = "Invalid Email !";
    }
    else {
      errorSignIn.innerHTML = "An Error Occurred, Please Try Again !";
    }
  });
}

//toggle button
$(document).on('click', '.toggle-password', function() {

  $(this).toggleClass("bi-eye");
  
  var input = $("#Pass,#pass");
  
  input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});






