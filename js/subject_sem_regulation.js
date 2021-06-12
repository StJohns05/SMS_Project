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


var regulation = "R15"; 
var branch = "CSE";
var semester = "Semester-1";

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
             

               
                const regulationRef = document.getElementById("regulation");
                
                 
                  if(regulationRef.value == "")
                    {
                       alert("Please Enter Regulation");
                      regulationRef.focus();
                       return false;
                    }
                
               
                //branch
                const branchRef = document.getElementById("branch");
                if(branchRef.value=="branch")
                {
                   alert("Please Select Branch!!");
                   branchRef.focus();
                   return false;
                } 
                

                //semester
                const semesterRef = document.getElementById("semester");
                if(semesterRef.value=="sem")
                {
                  
                alert("Please Select semester!!");
                semesterRef.focus();
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
            
                // else
                //     {
                //         alert("Data Saved Successfully!!")
                //     }

                regulation = regulationRef.value.toUpperCase();
                branch = branchRef.value;
                semester = semesterRef.value;
                return true;
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

setTimeout(() => {
    document.querySelector("#newrow").click();
    document.querySelector("#newlabrow").click();  

}, 100);


const saveBtn = document.querySelector("#export1");

saveBtn.addEventListener("click", (event) => {

    if(check()) {

        event.preventDefault();
        //gets table
        var oTable = document.getElementById('subject');

        //gets rows of table
        var rowLength = oTable.rows.length;

        var subjects = [];

        //loops through rows    
        for (i = 1; i < rowLength; i++){

            //gets cells of current row
            var oCells = oTable.rows.item(i).cells;

            //gets amount of cells of current row
            var cellLength = oCells.length;

            //loops through each cell in current row
            var map = {
                subject_code: "",
                subject_name: "",
                subject_short_name: "" 
            };
            
            for(var j = 1; j < cellLength; j++){
                /* get your cell info here */
                /* var cellVal = oCells.item(j).innerHTML; */
                if (j == 1) {

                    map.subject_code = oTable.rows[i].cells[j].getElementsByTagName("input")[0].value.toUpperCase();
                }
                else if ( j == 2) {

                    let temp = oTable.rows[i].cells[j].getElementsByTagName("input")[0].value;
                    map.subject_name = capitalize(temp);
                }
                
                else {

                    map.subject_short_name = oTable.rows[i].cells[j].getElementsByTagName("input")[0].value.toUpperCase();
                }
            }
            // console.log("Success");
            subjects.push(map);
        }
        console.log(subjects);

        /****** For labs **********/
        oTable = document.getElementById('lab');

        //gets rows of table
        rowLength = oTable.rows.length;

        var labs = [];

        //loops through rows    
        for (i = 1; i < rowLength; i++){

            //gets cells of current row
            var oCells = oTable.rows.item(i).cells;

            //gets amount of cells of current row
            var cellLength = oCells.length;

            //loops through each cell in current row
            var map = {
                lab_code: "",
                lab_name: "",
                lab_short_name: "" 
            };
            
            for(var j = 1; j < cellLength; j++){
                /* get your cell info here */
                /* var cellVal = oCells.item(j).innerHTML; */
                if (j == 1) {

                    map.lab_code = oTable.rows[i].cells[j].getElementsByTagName("input")[0].value.toUpperCase();
                }
                else if ( j == 2) {

                    let temp = oTable.rows[i].cells[j].getElementsByTagName("input")[0].value;
                    map.lab_name = capitalize(temp);
                }
                
                else {

                    map.lab_short_name = oTable.rows[i].cells[j].getElementsByTagName("input")[0].value.toUpperCase();
                }
            }
            // console.log("Success");
            labs.push(map);
        }
        console.log(labs);

        database.ref("Subjects/" + regulation + "/" + branch + "/" + semester).set(subjects);
        database.ref("Labs/" + regulation + "/" + branch + "/" + semester).set(labs);
        
        alert("Subjects and Regulation saved successfully!");
    }
});


function capitalize(str) {

    var temp = str.split(" ");
    var res = "";
    for (let i = 0; i < temp.length; i ++) {

        res += temp[i].substring(0, 1).toUpperCase() + temp[i].substring(1) + " ";
    }
    return res;
}

// Database fetch subjects

// database.ref().child("Subjects").child("R15").child("CSE").child("Semester-1").get().then(  (snapshot) => {
  
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     }
// })
// .catch((e) => {
//       console.log(e);
//   });