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
    firebase.analytics();
  
    const auth =  firebase.auth();
    //signup function
  //   function signUp(){
  //     var email = document.getElementById("email");
  //     var password = document.getElementById("password");
  
  //     const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  //     //
  //     promise.catch(e=>alert(e.message));
  
  //     alert("SignUp Successfully");
  //   }
  
    //signIN function
    function  signIn(){
      var email = document.getElementById("email");
      var password  = document.getElementById("password");
      
      const promise = auth.signInWithEmailAndPassword(email.value,password.value);
      promise.catch(e=>alert(e.message));
      alert("signed in successfully");
     
    }
   
  
    //signOut
  
  //   function signOut(){
  //     auth.signOut();
  //     alert("SignOut Successfully from System");
  //   }
  
    //active user to homepage
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        var email = user.email;
        alert("Active user "+email);
        
        
  
      }else{
        alert("No Active user Found")
      }
    })
  
  
  //toggle button
$(document).on('click', '.toggle-password', function() {

  $(this).toggleClass("bi-eye");
  
  var input = $("#password");
  
  input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});
