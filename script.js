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

    dx=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'))
    dy=parseInt(window.getComputedStyle(mario,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    offsetX=Math.abs(dx-ox)
    offsetY=Math.abs(dy-oy)

    if(offsetX<93 && offsetY<52){
        obstacle.classList.remove('obstacleAni')
    }
},100)