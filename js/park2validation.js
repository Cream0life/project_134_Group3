function valiAndCal(){
    var seasonPass= document.getElementById("t1").value;
    var underFour=document.getElementById("t2").value;
    var overFour= document.getElementById("t3").value;
    var familyPass=document.getElementById("t4").value;
   

    if (seasonPass ==""){
        document.getElementById("t1result").innerHTML="Number of season pass is blank.";
    }
    else
        document.getElementById("t1result").innerHTML="";

    if (underFour ==""){
        document.getElementById("t2result").innerHTML="Number of children under 4 years old is blank.";
        }
    else
        document.getElementById("t2result").innerHTML="";

    if (overFour ==""){
        document.getElementById("t3result").innerHTML="Number of people over 4 years old is blank.";
        }
    else
          document.getElementById("t3result").innerHTML="";
    
    if (familyPass ==""){
          document.getElementById("t4result").innerHTML="Number of family pass is blank.";
            }
    else
           document.getElementById("t4result").innerHTML="";

    let seasonPassSum = Number(seasonPass) * 90;
    let underFourSum = Number(underFour) * 34.75;
    let overFourSum = Number(overFour) * 45;
    let familyPassSum = Number(familyPass) * 146;
    let total= Number(seasonPassSum) + Number(underFourSum)+Number(overFourSum)+Number(familyPassSum);
    document.getElementById("total").innerHTML= "$"+ Number(total);
}