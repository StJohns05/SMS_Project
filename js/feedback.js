function send() {
    var firstname= document.getElementById('fname').value;
    if(firstname== ""){
        
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var branch= document.getElementById('branch').value;
    
       if(branch== ""){
        document.querySelector('.status').innerHTML = "Please select Branch";
        return false;
       } 
       
       var message= document.getElementById('subject').value;
    
       if(message== ""){
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
       } 
       alert("Message sent");
}