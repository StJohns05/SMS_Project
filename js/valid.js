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
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));

    alert("SignUp Successfully");

  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
   
    if(email_Verification(email.value) && password_Verification(password.value)){

    alert("signed in successfully");
    window.location.replace("https://www.google.com/");
    
    }
    
  }

  function password_Verification(pin){
    if(pin.length >=4){
        return true;
    }else{
      alert('password must be At least 4 characters and In Valid password....')
        return false;
    }
}


  function email_Verification(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //var address = document.getElementById[email].value;
    if (reg.test(email) == true) 
    {
        return (true);
    }else{
        alert('Invalid Email Id !!!!!!');
        return(false);
    }
}  

  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
    window.location.replace("index.html");
      
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);
      

    }else{
      alert("No Active user Found")
    }
  })
 