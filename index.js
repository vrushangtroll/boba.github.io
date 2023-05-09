let count=0
function yes(){
    document.getElementById("happy").style.display="flex";
    document.getElementById("yes").style.display="none";
    document.getElementById("no").style.display="none";
}
function no(){
    count++;
    document.getElementById("no").style.top=`${Math.random()*90}%`;
    document.getElementById("no").style.left=`${Math.random()*90}%`;
    if(count==5){
        document.getElementById("sad").style.display="flex";
        document.getElementById("yes").style.display="none";
        document.getElementById("no").style.display="none";
    }
}