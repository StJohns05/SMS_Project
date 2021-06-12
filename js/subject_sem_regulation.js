
//src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    // type="text/Javascript"> 
        $(document).ready(function(){
            //subject
          $("#newrow").click(function(){
               var addcontrols="<tr>"
                   addcontrols+="<td><input type='checkbox' name='record'></td>"
                   addcontrols+="<td><input type='text' name='subjectcode'></td>"
                   addcontrols+="<td><input type='text' name='subjectname'></td>"
                   addcontrols+="<td><input type='text' name='shortcuts'></td>"
                   addcontrols+="</tr>";

                   $("#subject tbody").append(addcontrols);
                 // $("table tbody").Remove(addcontrols);
            
               $("#delrow").on('click',function(){
                   $("#subject tbody").find('input[name="record"]').each(function() {
                       if($(this).is(":checked")){
                           $(this).parents("tr").remove();
                       }
                   });
               });
            
          
            });

        });
            //lab
            $(document).ready(function(){
            $("#newlabrow").click(function(){
                var addcontrols="<tr>"
                    addcontrols+="<td><input type='checkbox' name='checkbox'></td>"
                    addcontrols+="<td><input type='text' name='labcode'></td>"
                    addcontrols+="<td><input type='text' name='labname'></td>"
                    addcontrols+="<td><input type='text' name='labshortcuts'></td>"
                    addcontrols+="</tr>";
 
                    $("#lab tbody").append(addcontrols);
                  // $("table tbody").Remove(addcontrols);
             
                $("#dellabrow").on('click',function(){
                    $("#lab tbody").find('input[name="checkbox"]').each(function() {
                        if($(this).is(":checked")){
                            $(this).parents("tr").remove();
                        }
                    });
                });
              }); 
           
             });

                 
             //valudation part


             function check() {

                 //regulation
             

               
                var regulation =  document.getElementById("regulation");
                
                 
                  if(regulation.value == "")
                    {
                       alert("Please Enter Regulation");
                      regulation.focus();
                       return false;
                    }
                
               
                //branch
                var branch=document.getElementById("branch");
                if(branch.value=="branch")
                {
                   alert("Please Select Branch!!");
                   branch.focus();
                   return false;
                } 
                

                //semister
                var semister=document.getElementById("semister");
                if(semister.value=="sem")
                {
                  
                alert("Please Select semister!!");
                semister.focus();
                return false;
                }

               /*//subject
                var subject=document.getElementById("subject");
                if(subject.value==null)
                {
                  
                alert("Please Enter Subject Details!!");
                subject.focus();
                return false;
                }

                //lab
                var lab=document.getElementById("lab");
                if(lab.value==null)
                {
                  
                alert("Please Enter Lab Details!!");
                lab.focus();
                return false;
                }*/
            
                else
                    {
                        alert("Data Saved Successfully!!")
                    }
                }
                    
                    
        
        
           
     
          
       
        
              //excel sheet download

              /* document.getElementById("export").onclick=function(){
                    var tableId= document.getElementById("tableData").id;
                    htmlTableToExcel(tableId, filename = "");
                }
               var htmlTableToExcel= function(tableId, fileName = ""){
                var excelFileName="C:\Users\AMULYA\Desktop\SMS.xlsx";
                var TableDataType = 'application/vnd.ms-excel';
                var selectTable = document.getElementById(tableId);
                var htmlTable = selectTable.outerHTML.replace(/ /g, '%20');
                
                filename = filename?filename+'.xls':excelFileName+'.xls';
                var excelFileURL = document.createElement("a");
                document.body.appendChild(excelFileURL);
                
                if(navigator.msSaveOrOpenBlob){
                    var blob = new Blob(['\ufeff', htmlTable], {
                        type: TableDataType
                    });
                    navigator.msSaveOrOpenBlob( blob, fileName);
                }else{
                    
                    excelFileURL.href = 'data:' + TableDataType + ', ' + htmlTable;
                    excelFileURL.download = fileName;
                    excelFileURL.click();
                }
            }*/

           