const getBtnRef = document.querySelector("#getsub");
var subjects, labs;

var content = "";
getBtnRef.addEventListener("click", (event) => {

    
    const regulation = document.querySelector("#regulation").value.trim();
    const branch = document.querySelector("#branch").value;
    const semester = document.querySelector("#semester").value;

    getBtnRef.disabled = true;
    event.preventDefault();

    if (!regulation.match(/[R]{1}[0-9]{2}/)) {

        alert("Enter valid Regulation regulation!");
        document.querySelector("#regulation").focus;
        getBtnRef.disabled = false;
        return;
    }
    if (branch == "branch") {

        getBtnRef.disabled = false;
        alert("Select a Branch!");
        return;        
    }
    if (semester == "sem") {

        getBtnRef.disabled = false;
        alert("Select a Semester!");
        return;
    }

    $('#subjects').empty();
    $("#labs").empty();
    database.ref().child("Subjects").child(regulation).child(branch).child(semester).get().then(  (snapshot) => {
  
        if (snapshot.exists()) {

            
            document.querySelector("#subjects-title").innerHTML = "Subjects:";
            content = "<thead ><tr>";
            content += "<th id='subject-code' >Subject Code</th>";
            content += "<th id='subject-name' >Subject Name </th>";
            content += "<th id='subject-short'>Subject Short Name</th>";
            content += "<th id='' >Internal Marks</th>";
            content += "<th id=''>External Marks</th>";
            content += "</tr></thead>";

            $('#subjects').append(content);
    
            var data = snapshot.val(); 
            console.log(data);
            subjects = data;

            for (let i = 0; i < data.length; i ++) {

                addSubjects(i);
            }

            function addSubjects(i) {

                setTimeout(function() {

                    
                    content = "<tr>";
                    content += "<td>" + data[i].subject_code + "</td>";
                    content += "<td>" + data[i].subject_name + "</td>";
                    content += "<td>" + data[i].subject_short_name + "</td>";
                    content += "<td class='marks-field'><input type='text' id='" + "sub-int-" + i + "'" + "/></td>";
                    content += "<td class='marks-field'><input type='text' id='" + "sub-ext-" + i + "'" + "/></td>";
                    content += "</tr>";
                    
                    $('#subjects').append(content);
                }, 150 * i); 
            }

            database.ref().child("Labs").child(regulation).child(branch).child(semester).get().then(  (snapshot) => {
  
                if (snapshot.exists()) {
                    
                    setTimeout(function() {

                        document.querySelector("#labs-title").innerHTML = "Labs:";
                        content = "<thead>";
                        content += "<tr>";
                        content += "<th id='lab-code' >Lab Code</th>";
                        content += "<th id='lab-name' >Lab Name </th>";
                        content += "<th id='kab-shortcuts'>Lab Shortcut Name</th>";
                        content += "<th id='' >Internal Marks</th>";
                        content += "<th id=''>External Marks</th>";
                        content += "</tr></thead>";
                        $('#labs').append(content);
                    }, 150 * subjects.length);
            
                    var data = snapshot.val(); 
                    console.log(data);
                    labs = data;

                    for (let i = 0; i < data.length; i ++) {

                        addLabs(i);        
                    }       

                    function addLabs(i) {

                        setTimeout(function() {


                            content = "<tr>";
                            content += "<td>" + data[i].lab_code + "</td>";
                            content += "<td>" + data[i].lab_name + "</td>";
                            content += "<td>" + data[i].lab_short_name + "</td>";
                            content += "<td class='marks-field'><input type='text' id='" + "lab-int-" + i + "'" + "/></td>";
                            content += "<td class='marks-field'><input type='text' id='" + "lab-ext-" + i + "'" + "-ext'" + "/></td>";
                            content += "</tr>";
                            
                            $('#labs').append(content); 
                        }, 150 * subjects.length + 150 * (i + 1));
                    }


                }
            });
        }
    })
    .catch((e) => {
        console.log(e);    
    });

    setTimeout(function() {
        getBtnRef.disabled = false;
    }, 500);
});




const saveBtn = document.querySelector("#export1");

saveBtn.addEventListener("click", (e) => {

    const regno = document.querySelector("#regno").value.trim();   
    const semester = document.querySelector("#semester").value;

    e.preventDefault();

    if (!regno.match(/[0-9]{2}[G]{1}[0-9]{2}[A]{1}[0-9]{4}/)) {

        alert("Please enter a valid register numbeer Eg: 17G31A0501");
        return;
    }
    
    // if ($("input:empty").length != 0) {

    //     alert("Please fill all the marks of subjects and labs!");
    //     return;
    // }
    var res = true;
    $('table :input').each(function() {

        if(!$(this).val()){
            alert('Please fill all the marks of subjects and labs!');
            $(this).focus();
            res = false;
            return false;
        }
        if (!$(this).val().match(/^[0-9]{1,2}$/)) {

            if ($(this).val() != "NA") {

                alert("Please enter valid marks!");
                $(this).focus();
                res = false;
                return false;
            }
        }
    });    
    if (!res) {
        return;
    }
    
    var subjectsMarks = [], labsMarks = [];
    var sum = 0;
    var length = parseInt(subjects.length + labs.length, 10);
    for(let i = 0; i < subjects.length; i ++) {

        var marks = {

            internal: document.querySelector("#sub-int-" + i).value,
            external: document.querySelector("#sub-ext-" + i).value
        };
        subjectsMarks.push(marks);
        if (marks.internal != "NA" ){
            if ( marks.external != "NA") {
                var int = parseInt(marks.internal, 10);
                var ext = parseInt(marks.external, 10);
                if (int > 30) {
                    alert("Internal Marks should be less or equal to 30!");
                    return;
                }
                if (ext > 70) {
                    if (int != 0) { 
                        alert("External Marks should be less or equal to 70!");
                        return;
                    }
                }
                sum += int + ext;
            }
            else {
                length --;
            }
        }
        else {
            length --;
        }
    }

    for(let i = 0; i < labs.length; i ++) {

        var marks = {

            internal: document.querySelector("#lab-int-" + i).value,
            external: document.querySelector("#lab-ext-" + i).value
        };
        labsMarks.push(marks);
        if (marks.internal != "NA" ){
            if ( marks.external != "NA") {

                var int = parseInt(marks.internal, 10);
                var ext = parseInt(marks.external, 10);
                if (int > 30) {
                    alert("Internal Marks should be less or equal to 30!");
                    return;
                }
                if (ext > 70) {
                    if (int != 0) { 
                        alert("External Marks should be less or equal to 70!");
                        return;
                    }
                }
                sum += int + ext;
            }
            else {
                length --;
            }
        }
        else {
            length --;
        }
    }

    console.log(subjectsMarks);
    console.log(labsMarks);
    console.log(sum);


    var percentage = (sum / length).toFixed(2);
    var marks = {

        subjects: subjectsMarks,
        labs: labsMarks,
        percentage: percentage
    };
    console.log(marks);

    database.ref("Marks/" + regno + "/" + semester).set({
        marks: marks,
    });

    
    alert("Data Submitted successfully!");
});


