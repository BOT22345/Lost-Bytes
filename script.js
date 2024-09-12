document.onkeydown=function(e){
    console.log("key code is ",e.keyCode);
    if(e.keyCode==38 || e.keyCode==32){
        mario=document.querySelector(".mario")
        mario.classList.add("animateMario")
        setTimeout(()=>{
            mario.classList.remove("animateMario");
        },1000)
    }
}

setInterval(()=>{
    mario=document.querySelector(".mario")
    obstacle=document.querySelector(".obstacle");
    gameOver=document.querySelector(".gameOver");

    dx=window.getComputedStyle(mario,null).getPropertyValue('left')
    dy=window.getComputedStyle(mario,null).getPropertyValue('top');
    
    ox=window.getComputedStyle(obstacle,null).getPropertyValue('left');
    oy=window.getComputedStyle(obstacle,null).getPropertyValue('top');
    console.log(ox);
},100)