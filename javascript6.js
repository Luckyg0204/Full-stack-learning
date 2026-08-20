// Scope - it tells the accesbillty of variable, objectlitrells and function;

// function scope - the value which is declared in function its not accesible outside the function 

// block scode - variable which is declared inside the {} its not accesible outside 

// lexical scope - inner function can used the variable of outer function  but outer funcyion can not.

// function expression - it is a format like declring the function name as declaring the variable name so the fuction can work like variable 
// we can do work at function what ever we done in variable 
let name = function(){
    console.log("lucky gupta");
}  
name();

// Higher order function - pass function as a argument;
let multigreat = function(func,n){
    for(i=0;i<n;i++){
        func();
    }
}
function great(){
    console.log("Welcome inside sir.");
}
multigreat(great,16);

function oddeventest(req){
    if(req=="odd"){
        function checkOdd(n){
            console.log(n%2!=0);
        }
        return checkOdd;

    } else if(req=="even"){
        function checkEven(n){
            console.log(n%2==0);
        }
        return checkEven;
    } else{
        console.log("wrong reuest");
    }
}

// rest 

function sum(...args){
    let total=0;
    for(i=0;i<args.length;i++){
        total+=args[i];
    }
    console.log(total);
}
sum(2,3,4,5,6,7,8,9);

function sum(){
    console.log(arguments);
}
sum(2,3,4,5,6,7,8,9);

// destructuring - it is a way to unpack the values from array or object and assign them to variable
let arr = ["Lucky","Gupta","New York"];
let [firstName,lastName,city] = arr;
console.log(firstName,lastName,city);

let obj1 = {
    name:"Lucky Gupta",
    age:23,
    city:"New York"
};
let {name: person,age: age,city: city} = obj1;

// ass 
// 1
let arr = [2,3,4,5,6,7,8,9];
let num =  4;
function printAll(arr,num){
    for(i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
printAll(arr,num);



//2"
let str = "aabbcdeffffggh";
let res="";
function extract(str){
    for(i=0;i<str.length;i++){
        if(res.indexOf(str[i]) === -1){
            res+=str[i];
        }
    }
}
extract(str);
console.log(res);

// 3
// let conuntry = [];
// let output="";
// for(i=0;i<3;i++){
//     let elem = prompt("enter your city");
//     conuntry.push(elem);
// }
// for(i=0;i<conuntry.length;i++){
//     if(conuntry[i].length > output.length){
//         output=conuntry[i];
//     }
// }
// console.log(output);

// 4 
// let na = "Lucky gupta";
// let count = 0;
// for(let i=0;i<na.length;i++){
//     if(na[i]=="a"||na[i]=="e"||na[i]=="i"||na[i]=="o"||na[i]=="u"){
//         count++;
//     }
// }
// console.log(count);

// //5
// function random(start,end){
//     let random=Math.floor(Math.random()*end)+start;
//     console.log(random);
// }
// random(50,60);