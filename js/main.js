
function myFunction(){
    document.getElementById("listbox").classList.toggle("show");
}


function openFunction(){
    document.getElementById("leftNav").classList.toggle("show");
    document.querySelector(".main").classList.toggle("close");
}




var header = document.getElementById("sliderIcon");
var btn = header.getElementsByClassName("ic");
for (var i=0 ; i<btn.length ; i++){
    btn[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("active");
        if(current.length >0){
            current[0].className = current[0].className.replace(" active","");
        }
        this.className += " active";
    })
}