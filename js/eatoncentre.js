function validation(){
    var fname = document.getElementById("t1").value;
    var lname = document.getElementById("t2").value;
    var age = document.getElementById("t3").value;
    var email = document.getElementById("t4").value;
    var comment = document.getElementById("t5").value;
    var code = document.getElementById("t6").value;

    if(fname == ""){
        document.getElementById("t1result").innerHTML="First name is blank";
    }
    else 
        document.getElementById("t1result").innerHTML="";

    if(lname == ""){
        document.getElementById("t2result").innerHTML="Last name is blank";
    }
    else 
        document.getElementById("t2result").innerHTML="";
    
    if(age == ""){
        document.getElementById("t3result").innerHTML="Age is blank";
    }
    else if(age<10 || age>90)
        document.getElementById("t3result").innerHTML="Please enter a valid age range";
    else 
        document.getElementById("t3result").innerHTML="";
    
    if(email == ""){
        document.getElementById("t4result").innerHTML="Email is blank";
    }
    else 
        document.getElementById("t4result").innerHTML="";

    if(comment == ""){
        document.getElementById("t5result").innerHTML="Comment is blank";
    }
    else 
        document.getElementById("t5result").innerHTML="";
    
    if(code == ""){
        document.getElementById("t6result").innerHTML="Verification code is blank";
    }
    else if(code == "8403")
        document.getElementById("t6result").innerHTML="";
    else
        document.getElementById("t6result").innerHTML="The verification code is wrong!";
}