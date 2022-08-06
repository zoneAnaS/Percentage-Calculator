const physics = document.getElementById("physics");
const chemistry = document.getElementById("chemistry");
const maths = document.getElementById("maths");
const biology = document.getElementById("bio");

function calc(){
   phmarks = parseInt(physics.value);
   chmarks = parseInt(chemistry.value);
   mamarks = parseInt(maths.value);
   bimarks = parseInt(biology.value);
   totalMarks();
   
   

}
function totalMarks(){ 
    
    document.getElementById("Grade").classList.remove("red","green","B","C","D");
    document.getElementById("percentage").classList.remove("red" , "green");
    document.getElementById("h2").classList.remove("red" , "green"); 
    document.getElementById("total").classList.remove("red" , "green");
    

    
    let totalMark = phmarks+chmarks+mamarks+bimarks;
    let percent = parseFloat(totalMark*100/400);
    if(totalMark>140){
        document.getElementById("total").innerHTML=totalMark;
        document.getElementById("total").classList.add("green"); 
        document.getElementById("h2").innerHTML="Conratulations!<br>You are pass";
        document.getElementById("h2").classList.add("green"); 
        document.getElementById("percentage").innerHTML=percent+"%";
        document.getElementById("percentage").classList.add("green"); 

        if(percent>90){
            document.getElementById("Grade").innerHTML="A++"
        document.getElementById("Grade").classList.add("green");
        } 
        if(percent<35){
            document.getElementById("Grade").innerHTML="F"
        document.getElementById("Grade").classList.add("red");
        } 
         if(percent<90){
            document.getElementById("Grade").innerHTML="A+"
        document.getElementById("Grade").classList.add("green");
        } 
         if(percent<70){
            document.getElementById("Grade").innerHTML="A"
            document.getElementById("Grade").classList.add("green");
        } 
        if(percent<60){
            document.getElementById("Grade").innerHTML="B"
        document.getElementById("Grade").classList.add("B");
        } 
        if(percent<50){
            document.getElementById("Grade").innerHTML="C"
        document.getElementById("Grade").classList.add("C");
        } 
        if(percent<40){
            document.getElementById("Grade").innerHTML="D"
        document.getElementById("Grade").classList.add("D");
        } 
        
       
        document.getElementById("bottom").classList.remove("none")
    }
    else{
        document.getElementById("total").innerHTML=totalMark;
        document.getElementById("total").classList.add("red"); 
        document.getElementById("h2").innerHTML="Sorry! You are fail";
        document.getElementById("h2").classList.add("red"); 
        document.getElementById("percentage").innerHTML=percent+"%";
        document.getElementById("percentage").classList.add("red");
        document.getElementById("Grade").innerHTML="F"
        document.getElementById("Grade").classList.add("red");
        document.getElementById("bottom").classList.remove("none")
    }
    
    
    
     
 }


