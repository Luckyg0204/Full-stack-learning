// array methord

// for each

let arr = [2, 4, 6, 8, 6, 9, 5, 4, 1];

arr.forEach((el) => {
    console.log(el);
});

// arr.map

let double = arr.map((el) => {
    return el * el;
})

// arr map
let filt = arr.filter((el) => {
    return (el % 2 == 0);
})

// every
console.log(arr.every((el) => {
    return el % 2 == 0;
}));

// Some 

// reduce
let red = arr.reduce((res, el) => {
    console.log(res);
    return res + el;
});
console.log(red);

let num = [2, 6, 8, 6, 18, 8, 12, 8, 16, 2, 18];

let max = num.reduce((max, el) => {
    if (max > el) {
        return max;
    } else {
        return el;
    }
});
console.log(max);
// min in arr

let min = num.reduce((res, el) => {
    if (el < res) {
        return el;
    } else {
        return res;
    }
})
console.log(min)
// spread in array
let ar = [..."Hello Lucky", ...num];

// spread in object litrel 
let marks = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
let obj1 = {
    ..."hello",
    ...marks,
}

// as 
// 1
let avg = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;
    }
    return sum / arr.length;
}
let arr = [2, 3, 4, 5, 6, 7];

// 2
let doubleAndReturArgs = (arr, ...args) => {
    let newArr = args.map((el) => {
        return el * 2;
    });
    return [...arr, ...newArr];
}
// 5 
let obj1 = {
    name: "Lucky",
    age: 23,
    city: "New York"
};
let obj2 = {
    A: 1,
    B: 2,
    C: 3
};
let obj3 = {
    ...obj1,
    ...obj2,
    country: "U.S."
};
let mergeObj = (obj1,obj2) => {
    return { ...obj1, ...obj2 };
}
console.log(mergeObj(obj1, obj2));
let gameSeq = [];
let start = false;
let level = 0;
let color = ["pink", "blue", "green", "yellow"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        console.log("Started");

        levelup();
    }
});


function levelup(){
    level++;
    h2.innerText = "level "+level;
    let rand = Math.floor(Math.random()*4);
    let randColor = color[rand];
    gameSeq.push(randColor);
    let randBtn = document.querySelector("."+randColor); 
    btnflash(randBtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },400);
}
let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnPressed);
}
function btnPressed(){
    // console.log(this);
    btnflash(this);
    let usrColor = this.getAttribute("id");
    console.log(usrColor);
}