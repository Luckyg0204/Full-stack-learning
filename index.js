let gameSeq = [];
let usrSeq = [];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let color = ["pink", "blue", "green", "yellow"];
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        console.log("Started");
        levelup();
    }
});

function levelup(){
    level++;
    h2.innerHTML=`level ${level}`;
    let random = Math.floor(Math.random()*4);
    let randomColor = color[random];
    gameSeq.push(randomColor);
    let randomBtn = document.querySelector(`.${randomColor}`);
    flashbtn(randomBtn);
}
function flashbtn(randomBtn){
    randomBtn.classList.add("flash");
    setTimeout(()=>{
        randomBtn.classList.remove("flash");
    },400);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener('click',btnPressed);
}
function btnPressed(){
    
    flashbtn(this);
    let usrColor = this.getAttribute("id");
    console.log(usrColor);
    usrSeq.push(usrColor);
    checkAnswer(usrSeq.length-1);
}
function checkAnswer(ind){
    if(usrSeq[ind]===gameSeq[ind]){
        if(usrSeq.length===gameSeq.length){
            setTimeout(levelup,1000);
            usrSeq=[];
        }
    } else {
        h2.innerText="Game Over Press any key to restart";
        reset();
    }
}
function reset(){
    level=0;
    usrSeq=[];
    gameSeq=[];
    start=false;
}