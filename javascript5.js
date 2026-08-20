// objct litrels - it is a data structure whch stire the key value pairs;
const students ={
    2:"a",
    name:"lucky gupta",
    age:24,
    class:"btech",
    subj:["math","physics","chemistry"]
};
//get value
console.log(students.name);
console.log(students["name"]);
console.log(students[2]);
// conversion in get values

// Math obj 
Math.abs(-7);
Math.pow(2,8);
Math.floor(7.99); // 7
Math.ceil(7.44); // 8
Math.random() //genrate random number

// gerate a random integer
Math.floor(Math.random()*10)+1;// 1 to 10

Math.floor(Math.random()*100)+1;// 1 to 100

// ass
let car = {
    name:"Toyota",
    model:"2016",
    color:"red"
};
console.log(car.name);

// q
let person = {
    name:"Lucky gupta",
    age:"34",
    city:"New York"
}
person.city="kadaura";
person.country="U.S.";
console.log(person);

// guessing game 
let user = prompt("put any random number");
let ran = Math.floor(Math.random()*user)+1;
let guess = prompt("Guess the number");
while(true){
    if(guess==ran){
        console.log("Congrats you hit it");
        break;
    } else{
        console.log("Failed attemp");
    }
    guess = prompt("try another guess");
}
function dice(){
    let num = Math.floor(Math.random()*6)+1;
    console.log(num);
}
dice();

// avrage of 3 num

function avg(n1,n2,n3){
    let avg = (n1+n2+n3)/3;
    console.log(avg);
}
avg(2,3,4);
function sum(a,b){
    return a+b;
}
