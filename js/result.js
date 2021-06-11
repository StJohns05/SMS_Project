function checkvalue() {
    var regis = /^[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{4}$/;
        var regno = document.sem.search.value;
        console.log(regno);
    if(document.getElementById("d1").value !== "" &&
       document.getElementById("d2").value !== "" &&
       document.getElementById("d3").value !== "" &&
       document.getElementById("d4").value !== ""
      )
     {
    
       // var empt = document.forms["sem"].value;
        
        if(regno.match(regis))
        {
            if(regno!=null || regno!=""){
        
           
              alert("Now u can view Student Result!!")
            }
        }
    }

else{
alert("Please select every field");
return false;
}
}
