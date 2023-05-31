let git=document.getElementById("git")
let score=0
let scoreboard=document.getElementById("scoreboard")
let in_git = false

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

git.addEventListener("mouseenter" , ()=> {
    git.style.bottom=getRndInteger(0,100)+"%"
    git.style.left=getRndInteger(0,100)+"%"
    in_git = true
})

git.addEventListener("mouseleave" , ()=> {
    in_git = false
    score = 0
    scoreboard.textContent="score:"+score
})

setInterval(() => {
    if (in_git) {
        score+=1
        scoreboard.textContent="score:"+score
    }
}, 1000)













