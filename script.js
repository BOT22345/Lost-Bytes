//variables
score = 0;
cross = true;

//audio varaibles 
audio=new Audio('./Assets/Main.mp3');
audioGameOver=new Audio('./Assets/gameOver.mp3');

setInterval(()=>{
},2000);

// function for keys
document.onkeydown = function (e) {
    console.log("key code is ", e.keyCode);
    if (e.keyCode == 38 || e.keyCode == 32) {
        mario = document.querySelector(".mario")
        mario.classList.add("animateMario")
        setTimeout(() => {
            mario.classList.remove("animateMario");
        }, 1000)
    }
    
    if (e.keyCode == 39) {
        mario = document.querySelector(".mario")
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 100 + "px";
    }
    if (e.keyCode == 37) {
        audio.play()
        mario = document.querySelector(".mario")
        marioNegativeX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioNegativeX - 100) + "px";
    }


}

// function for collision detection
setInterval(() => {
    mario = document.querySelector(".mario")
    obstacle = document.querySelector(".obstacle");
    gameOver = document.querySelector(".gameOver");
    restartButton=document.querySelector("#restartButton");

    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)

    if (offsetX < 73 && offsetY < 52) {
        obstacle.classList.remove('obstacleAni')
        gameOver.innerText="GameOver Click Below to start again";
        audioGameOver.play()
        audio.pause();
        restartButton.style.visibility="visible";
        restartButton.classList.add('animateButton')
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score)
        cross = false;
        setTimeout(() => {
            cross = true
        }, 1000)
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            console.log(newDur)
            obstacle.style.animationDuration = newDur +'s';
        }, 500)
    }

}, 10)

function updateScore(score) {
    const scoreElement = document.getElementById("scoreCont");
    if (scoreElement) { // Check if the element exists
        scoreElement.innerText = "Your score: " + score;
    } else {
        console.error('Element with id "scoreCont" not found.');
    }
}