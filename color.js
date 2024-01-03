function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}

function setRandomColor() {
    document.getElementById("colorCode").innerHTML = getRandomColor();
    document.getElementById("colorBox").style.background = getRandomColor();
}


function copyFunc(){
    let theText = document.getElementById("colorCode");
    navigator.clipboard.writeText(theText.innerHTML);
    document.getElementById("text").innerHTML= theText.innerHTML;
    
}
function myTimeAlert(){
    let noti = document.getElementById("notice");
    noti.style.display = "flex";
   
}
function myTimeAlertStop(){
    let noti = document.getElementById("notice");
    noti.style.display = "none";
}








