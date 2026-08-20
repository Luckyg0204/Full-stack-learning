let level = 0;
let gameSeq = [];
let usrSeq = [];
let color = ["pink", "blue", "green", "yellow"];
let h2 = document.querySelector("h2");
let start = false;
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        console.log("Started");
        levelup();
    }
})
function levelup(){
    level++;
    h2.innerHTML = `Level ${level}`;
    let random = Math.floor(Math.random()*4);
    let randColor = color[random];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    flashbtn(randBtn);
}
function flashbtn(randBtn){
    randBtn.classList.add("flash");
    setTimeout(()=>{
        randBtn.classList.remove("flash");
    },400);
}
let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener('click',btnPressed);
}
function btnPressed(){
    flashbtn(this);
    let userColor = this.getAttribute("id");
    usrSeq.push(userColor);
    checkAnswer(usrSeq.length-1);
}
function checkAnswer(ind){
    if(usrSeq[ind]===gameSeq[ind]){
        if(usrSeq.length===gameSeq.length){
            setTimeout(levelup,1000);
            usrSeq=[];
        }
    } else{
        h2.innerText=`Game Over Press your Score! ${level} press any key to restart`;
        let body = document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(()=>{
            body.style.backgroundColor="white";
        },100);
        reset();
    }
}

function reset(){
    level=0;
    gameSeq=[];
    usrSeq=[];
    start=false;
}
