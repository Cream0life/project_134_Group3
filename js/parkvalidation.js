function valiAndCal(){
    var adults= document.getElementById("t1").value;
    var childrenSenior=document.getElementById("t2").value;
   

    if (adults ==""){
        document.getElementById("t1result").innerHTML="Number of adults is blank.";
    }
    else
        document.getElementById("t1result").innerHTML="";

    if (childrenSenior ==""){
        document.getElementById("t2result").innerHTML="Number of children or senior is blank.";
        }
    else
        document.getElementById("t2result").innerHTML="";

    let adultSum = Number(adults) * 4.5;
    let childrenSeniorSum = Number(childrenSenior) * 3.5;
    let total= Number(adultSum) + Number(childrenSeniorSum);
    document.getElementById("total").innerHTML= "$"+ Number(total);
}