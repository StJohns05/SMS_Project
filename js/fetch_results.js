const getResultBtn = document.querySelector("#get-results-btn");

getResultBtn.addEventListener("click", (event) => {

        const regulation = document.querySelector("#regulation").value.trim();
        const branch = document.querySelector("#branch").value;
        const semester = document.querySelector("#semester").value;
        const regno = document.querySelector("#regno").value.trim();

        getResultBtn.disabled = true;
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

        if (!regno.match(/[0-9]{2}[G]{1}[0-9]{2}[A]{1}[0-9]{4}/)) {

                alert("Please enter a valid register numbeer Eg: 17G31A0501");
                return;
        }


        var subjects, labs, marks;
        $('#subjects').empty();
        $("#labs").empty();
        $("#percentage").empty();
        $("#subjects-title").empty();
        $("#labs-title").empty();

        database.ref().child("Subjects").child(regulation).child(branch).child(semester).get().then(  (snapshot) => {
        
                if (snapshot.exists()) { 

                        subjects = snapshot.val();
                        database.ref().child("Labs").child(regulation).child(branch).child(semester).get().then(  (snapshot) => {
  
                                if (snapshot.exists()) {

                                        labs = snapshot.val();
                                        database.ref().child("Marks").child(regno).child(semester).child("marks").get().then((snapshot) => {

                                                if (snapshot.exists()) {

                                                        marks = snapshot.val();
                                                        console.log(subjects);
                                                        console.log(labs);
                                                        console.log(marks);

                                                        document.querySelector("#subjects-title").innerHTML = "Subjects:";
                                                        content = "<thead ><tr>";
                                                        content += "<th id='subject-code' >Subject Code</th>";
                                                        content += "<th id='subject-name' >Subject Name </th>";
                                                        content += "<th id='subject-short'>Subject Short Name</th>";
                                                        content += "<th id='' >Internal Marks</th>";
                                                        content += "<th id=''>External Marks</th>";
                                                        content += "</tr></thead>";

                                                        $('#subjects').append(content);

                                                        for (let i = 0; i < subjects.length; i ++) {

                                                                addSubjects(i);
                                                        }
                                                
                                                        function addSubjects(i) {
                                                
                                                                setTimeout(function() {
                                                
                                                                        
                                                                        content = "<tr>";
                                                                        content += "<td>" + subjects[i].subject_code + "</td>";
                                                                        content += "<td>" + subjects[i].subject_name + "</td>";
                                                                        content += "<td>" + subjects[i].subject_short_name + "</td>";
                                                                        content += "<td class='marks-field'>" + marks.subjects[i].internal + "</td>";
                                                                        content += "<td class='marks-field'>" + marks.subjects[i].external + "</td>";
                                                                        content += "</tr>";
                                                                        
                                                                        $('#subjects').append(content);
                                                                }, 150 * i); 
                                                        }

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
                                                        }, 150 * subjects.length + 150);

                                                        for (let i = 0; i < labs.length; i ++) {

                                                                addLabs(i);        
                                                        }       
                                        
                                                        function addLabs(i) {
                                        
                                                                setTimeout(function() {
                        
                                                                        content = "<tr>";
                                                                        content += "<td>" + labs[i].lab_code + "</td>";
                                                                        content += "<td>" + labs[i].lab_name + "</td>";
                                                                        content += "<td>" + labs[i].lab_short_name + "</td>";
                                                                        content += "<td class='marks-field'>" + marks.labs[i].internal + "</td>";
                                                                        content += "<td class='marks-field'>" + marks.labs[i].external + "</td>";
                                                                        content += "</tr>";
                                                                        
                                                                        $('#labs').append(content); 
                                                                }, 150 * subjects.length + 150 * (i + 2));
                                                        }

                                                        setTimeout(function() {

                                                                document.querySelector("#percentage").innerHTML = "Percentage: " + marks.percentage + "%"
                                                        }, 150 * (subjects.length + labs.length + 3));
                                                }
                                        })                                        
                                        .catch((e) => {
                                                console.log(e);    
                                        });  
                                }
                        })
                        .catch((e) => {
                            console.log(e);    
                        });                        
                }
        })
        .catch((e) => {
            console.log(e);    
        });
        setTimeout(function() {
                
                getResultBtn.disabled = false;
        }, 1500);
});