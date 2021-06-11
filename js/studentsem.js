
//src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    // type="text/Javascript"> 
        $(document).ready(function(){
          $("#newrow").click(function(){
               var addcontrols="<tr>"
                   addcontrols+="<td><input type='checkbox' name='record'></td>"
                   addcontrols+="<td><input type='text' name='sub'></td>"
                   addcontrols+="<td><input type='text' name='code'></td>"
                   

                   addcontrols+="<center><td><input type='text' name='i1'></center></td>"
                   addcontrols+="<td><input type='text' name='i2'></td>"
                   addcontrols+="<td><input type='text' name='semister'></td>"
                   addcontrols+="<td><input type='text' name='t2'></td>"

                 
                   addcontrols+="</tr>";
                   $("table tbody").append(addcontrols);
                 // $("table tbody").Remove(addcontrols);
            
               $("#delrow").on('click',function(){
                   $("table tbody").find('input[name="record"]').each(function() {
                       if($(this).is(":checked")){
                           $(this).parents("tr").remove();
                       }
                   });
               });
            
          
            });
                
         }); 
          
       
        
        
            function check()
            {
               // var empt = document.forms["sem"].value;
                var regis = /^[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{4}$/;
                var regno = document.sem.reg.value;
                console.log(regno);
                if(regno.match(regis))
                {
                    if(regno!=null || regno!=""){
                
                    alert("Data has been saved successfully!!");
                    }
                }
                    
                     else
                      {
                           alert("Please input register no properly!!");
                         }
                }
            
        
