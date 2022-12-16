function validationrom(){

    var age=document.getElementById("t1").value;
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
