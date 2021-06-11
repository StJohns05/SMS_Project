// var firebaseConfig = {
//     apiKey: "AIzaSyDuu4FIsR0yRIkOrtu6T59lqfPbN7SG53M",
//     authDomain: "sms-demo-9ec85.firebaseapp.com",
//     databaseURL: "https://sms-demo-9ec85-default-rtdb.firebaseio.com",
//     projectId: "sms-demo-9ec85",
//     storageBucket: "sms-demo-9ec85.appspot.com",
//     messagingSenderId: "401316316472",
//     appId: "1:401316316472:web:2929d9673d92fbfbb66dcd"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
// const auth = firebase.auth();


const facultyName = document.querySelector("#name");
const facultyEmail = document.querySelector("#email");
const facultyPhone = document.querySelector("#phone");
const uniqueid =document.querySelector("#uniqueid");
const joinYear=document.querySelector("#join");
const branch=document.querySelector("#facultybranch");

//reading data

var faculty ;
auth.onAuthStateChanged(function(user) {

  faculty = user;
  // const id = user.uid;

  console.log(faculty.uid); 
  
  database.ref().child("Faculty").child(faculty.uid).get().then((snapshot) => {
                        
    if (snapshot.exists()) {
      const facultyData = snapshot.val();
      facultyName.value = facultyData.Name;
      facultyPhone.value = facultyData.Email;
      facultyEmail.value = facultyData.Phoneno;
      
    } 
  })
  .catch((e) => {
      console.log(e);
  });
  //fetching data from database
  database.ref().child("faculty_details").child(faculty.uid).get().then((snapshot) => {
                        
    if (snapshot.exists()) {
      const facultyDetails = snapshot.val();
      uniqueid.value=facultyDetails.Uniqueid;
      
      branch.value=facultyDetails.Branch;
      joinYear.value=facultyDetails.Join;
    }
})
.catch((e) => {
  console.log(e);
  });
});