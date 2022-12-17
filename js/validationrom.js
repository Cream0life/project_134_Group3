function validationrom(){

    var age = document.getElementById("t1").value;
    var student = document.querySelector('input[name="student"]:checked');
    var ttype = document.querySelector('input[name="ttype"]:checked');


    if(age==""){
        document.getElementById("t1result").innerHTML="(Age is blank)";
    }
    else if(age<4 || age>130){
        document.getElementById("t1result").innerHTML="(Age range is not right: 4-130)";
    }
    else
        document.getElementById("t1result").innerHTML="";

    if(student==null){
        document.getElementById("t2result").innerHTML="(You must choose whether you are student or not)";
    }
    else   
        document.getElementById("t2result").innerHTML="";


    if(ttype==null){
        document.getElementById("t3result").innerHTML="(You must choose one)";
    }
    else   
        document.getElementById("t3result").innerHTML="";


    if(ttype.value=="ga"){
        if(student.value=="yes" && age>=4 && age<=130 || age>=15 && age<=19 || age>=65 && age<=130){
            alert("The General Admission price is $18");
            } 
        else if(age>=4 && age<=14){
            alert("The General Admission price is $14");
            }
        else if(age>=20 && age<=64){
            alert("The General Admission price is $23");
        }
        else 
            alert("The info you entered is incorrect, please try again!");
    }
    else if(ttype.value="fb"){
        if(student.value=="yes" && age>=4 && age<=130 || age>=15 && age<=19 || age>=65 && age<=130){
            alert("The General Admission + Fantastic Beasts price is $29");
            } 
        else if(age>=4 && age<=14){
            alert("The General Admission + Fantastic Beasts price is $21");
            }
        else if(age>=20 && age<=64){
            alert("The General Admission + Fantastic Beasts price is $35");
        }
        else 
            alert("The info you entered is incorrect, please try again!");
    }

    }

function validationsurvey(){

    var lname = document.getElementById("ln").value;
    var fname = document.getElementById("fn").value;
    var gender = document.querySelector('input[name="gen"]:checked');
    var age = document.getElementById("age").value;
    var nat = document.getElementById("nat").value;
    var email = document.getElementById("em").value;
    var phone = document.getElementById("ph").value;
    var checkvalue=true
    

    if(lname==""){
        document.getElementById("t1result").innerHTML="(Last Name is blank)";
        checkvalue=false;
    }
    else
        document.getElementById("t1result").innerHTML="";

    if(fname==""){
        document.getElementById("t2result").innerHTML="(First Name is blank)";
        checkvalue=false;
    }
    else
        document.getElementById("t2result").innerHTML="";

    if(gender==null){
        document.getElementById("t3result").innerHTML="(You must choose one)";
        checkvalue=false;
    }
    else   
        document.getElementById("t3result").innerHTML="";

    if(age==""){
        document.getElementById("t4result").innerHTML="(Age is blank)";
        checkvalue=false;
    }
    else if(age<15 || age>100){
        document.getElementById("t4result").innerHTML="(Age must between 15-100)";
        checkvalue=false;
    }
    else
        document.getElementById("t4result").innerHTML="";

    if(nat==""){
        document.getElementById("t5result").innerHTML="(Nationality is blank)";
        checkvalue=false;
    }
    else
        document.getElementById("t5result").innerHTML="";

    if(email==""){
        document.getElementById("t6result").innerHTML="(Email Address is blank)";
        checkvalue=false;
    }
    else
        document.getElementById("t6result").innerHTML="";
    
    if(phone==""){
        document.getElementById("t7result").innerHTML="(Phone No. is blank)";
        checkvalue=false;
    }
    else
        document.getElementById("t7result").innerHTML="";

    if(checkvalue==true){
        alert("Submited! Thank you for your response.")
    }
    else
        alert("Please try again!");
}


