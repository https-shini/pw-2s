'use strict'

function anima(){
    let posx = Math.round(Math.random()*1920);
    let posy = Math.round(Math.random()*1080);
    document.querySelector("#img").style.left = posx + "px";
    document.querySelector("#img").style.top = posy + "px";
}

setInterval(anima,15)
