// onclick event handler mouseover event handler
let btns = document.querySelectorAll("button");
 for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = saygoodbye;
    console.dir(btn);
    }

function sayHello(){
    console.log("Hello Lucky Gupta");   
}
function saygoodbye(){
    console.log("Goodbye Lucky Gupta");
}

// addEvenetlistner

for(btn of btns){
    addEventListener("click",sayHello);
    addEventListener("click",saygoodbye);
    }
let head = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");
btn.addEventListener("click",()=>{
    head.innerText = random(); 
    div.style.backgroundColor=random();
})
function random(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}

let btn = document.querySelector("button");
btn.addEventListener("mouseenter",function(){
    console.log(this);
});

// keyboard event

let inp = document.querySelector("input");
inp.addEventListener("keydown",function(e){
    if(e.code=="ArrowUp"){
        console.log("go up");
    }else if(e.code=="ArrowDown"){
        console.log("go down");
    } if(e.code=="ArrowLeft"){
        console.log("go left");
    } if(e.code=="ArrowRight"){
        console.log("go Right");
    }
});
// form event 

let form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("your form is submitted");
    let inp = document.querySelector("input");
    console.log(inp.value);

})

// ass
// 1
