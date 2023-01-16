const load = gsap.timeline({
    paused: "true"
})
load.to("#percent , #bar", {
    duration: .2,
    opacity: 0,
    zIndex: -1
})
load.to(".progress",{
    duration: .8,
    width: "0%"
})
load.from(".content", {
    duration: .8,
    opacity: 0,
    ease: "Power4.out"
}, "-=.5")
load.from(".content h1", {
    duration: .5,
    y: 50,
    skewY: 10,
    opacity: 0
},"-=1")

var id, width = 1;
function loading(){
    id = setInterval(frame, 25);
}
function frame(){
    if(width>=100){
        clearInterval(id)
        load.play();
    }
    else{
        width++;
        document.getElementById("barconfirm").style.width = width + '%';
        document.getElementById("percent").innerHTML = width + '%';
    }
}
window.onload = function(){
    loading();
}