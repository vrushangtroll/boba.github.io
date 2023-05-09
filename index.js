let count=0
if(window.navigator.userAgentData.mobile){
    alert("Open this link on your laptop!!")
    window.location.reload()
}

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