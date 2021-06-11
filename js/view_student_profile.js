// // Your web app's Firebase configuration
// var firebaseConfig = {
//         apiKey: "AIzaSyDuu4FIsR0yRIkOrtu6T59lqfPbN7SG53M",
//         authDomain: "sms-demo-9ec85.firebaseapp.com",
//         databaseURL: "https://sms-demo-9ec85-default-rtdb.firebaseio.com",
//         projectId: "sms-demo-9ec85",
//         storageBucket: "sms-demo-9ec85.appspot.com",
//         messagingSenderId: "401316316472",
//         appId: "1:401316316472:web:2929d9673d92fbfbb66dcd"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
// const auth = firebase.auth();





const studentName = document.querySelector("#name");
const studentEmail = document.querySelector("#email");
const studentPhone = document.querySelector("#phone");
const studentRegNo = document.querySelector("#regno");


const institutionName = document.querySelector("#institution");
const yearofjoin = document.querySelector("#joinyear");
const regulation = document.querySelector("#regulation");
const branch = document.querySelector("#branch");
const fatherName = document.querySelector("#fname");
const motherName = document.querySelector("#mname");
const mobileNumber = document.querySelector("#fphone");
const alternateNumber = document.querySelector("#altphone");
const dateofbirth = document.querySelector("#dob");
const gender = document.querySelector("#gender");
const aadharNumber = document.querySelector("#aadhar");
const aadharURL = document.querySelector("#aadhardoc");
const incomeNumber = document.querySelector("#income");
const incomeURL = document.querySelector("#incomedoc");
const caste = document.querySelector("#caste");
const casteURL = document.querySelector("#castedoc");
const primaryAddress = document.querySelector("#primaryaddress");
const primaryZip = document.querySelector("#primaryzip");
const secondaryAddress = document.querySelector("#secondaryaddress");
const secondaryZip = document.querySelector("#secondaryzip");
const sscHallticket = document.querySelector("#sscticket");
const sscPercentage = document.querySelector("#sscpercentage");
const sscCertificate = document.querySelector("#sscurl");
const sscYear = document.querySelector("#sscyear");
const interHallticket = document.querySelector("#interticket");
const interPercentage = document.querySelector("#interpercentage");
const interCertificate = document.querySelector("#interurl");
const interYear = document.querySelector("#interyear");






var student ;

  
  
auth.onAuthStateChanged(function(user) {

  student = user;
  // const id = user.uid;

  console.log(student.uid); 
  
  database.ref().child("Students").child(student.uid).get().then((snapshot) => {
                        
    if (snapshot.exists()) {
      const studentData = snapshot.val();
      studentName.value = studentData.Name;
      studentEmail.value = studentData.Email;
      studentPhone.value = studentData.Phoneno;
      studentRegNo.value = studentData.Regno;
    } 
  })
  .catch((e) => {
      console.log(e);
  });
  database.ref().child("students_details").child(student.uid).get().then((snapshot) => {
                        
    if (snapshot.exists()) {
      const studentDetails = snapshot.val();
      institutionName.value = studentDetails.Institution;
      yearofjoin.value = studentDetails.Year_Of_Join;
      regulation.value = studentDetails.Regulation;
      branch.value = studentDetails.Branch;
      dateofbirth.value = studentDetails.Date_Of_Birth;
      gender.value = studentDetails.Gender;
      aadharNumber.value = studentDetails.Aadhar_Number;
      aadharURL.value=studentDetails.Aadhar_URL;
      incomeNumber.value=studentDetails.Annual_Income;
      incomeURL.value=studentDetails.Income_URL;
      caste.value=studentDetails.Caste;
      casteURL.value=studentDetails.Caste_URL;
      primaryAddress.value=studentDetails.Primary_Address;
      primaryZip.value=studentDetails.Primary_Zip;
      secondaryAddress.value=studentDetails.Secondaryaddress;
      secondaryZip.value=studentDetails.Secondaryzip;
      sscHallticket.value=studentDetails.SSC_HallTicket_Number;
      sscPercentage.value=studentDetails.SSC_Percentage;
      sscCertificate.value=studentDetails.SSC_Certificate_URL;
      sscYear.value=studentDetails.SSC_Year_Of_pass;
      interHallticket.value=studentDetails.Inter_HallTicket_Number;
      interPercentage.value=studentDetails.Inter_Percentage;
      interCertificate.value=studentDetails.Inter_Certificate_URL;
      interYear.value=studentDetails.Inter_Year_Of_pass;
       
      const parentData =studentDetails.parent_details;
      fatherName.value=parentData.Father_Name;
      motherName.value=parentData.Mother_Name;
      mobileNumber.value=parentData.Mobile_Number;
      alternateNumber.value=parentData.Alternate_Mobile_Number;
      } 
  })
  .catch((e) => {
      console.log(e);
  });
  
});

//for log out button

// function noBack()
//          {
//              window.history.forward()
//          }
//         noBack();
//         window.onload = noBack;
//         window.onpageshow = function(evt) { if (evt.persisted) noBack() }
//         window.onunload = function() { void (0) }
