console.log("Hello Wold!");
// template litrells
let mango = 90;
let banana = 89;
console.log(`hi this is the total price = ${mango+banana}`);
// == just compare value
//  === also compare type 
let name = " RamLakhan"

// if else
if(name.length>3 && name[0]=="a"){
    console.log("good string");
}else{
    console.log("Not a good string");
}
//  q1
let num = 56;
if(num%10==0){
    console.log("good");
} else{
    console.log("bad");
}
// q2
let namee = prompt("write your name");
let age = prompt("write your age");
alert(`your name is ${namee} and your age is ${age}`);

// q6
let num1 = 67;
let num2 = 87;

if(num1%10==num2%10){
    console.log("same");
} else{
    console.log("not same");
}