let canvas= document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;

canvas.addEventListener("mousedown", function(event){
    desenhando=true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - contexto.offsetLeft,
        event.clientY - contexto.offsetTop);
})
canvas.addEventListener("mousemove", function(event){
    if(desenhando){
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
})

canvas.addEventListener("mouseup", function(event){
    desenhando=false;
})

function cor1(){
    contexto.strokeStyle = "#010005";
}

function cor2(){
    contexto.strokeStyle = "#2acd6e";
}

function cor3(){
    contexto.strokeStyle = "#e661f6";
}

function cor4(){
    contexto.strokeStyle = "#2d006e";
}

function cor5(){
    contexto.strokeStyle = "#8c0cf8";
}

function cor6(){
    contexto.strokeStyle = "#01b235";
}