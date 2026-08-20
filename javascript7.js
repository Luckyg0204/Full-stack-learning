// this - it rfer to the object which is help to access the variable.
// or it also refer to rindom object 

//try and catch - it is helpfull þo test the code


// arrow funtion
const sum = (a,b) => {
    console.log(a+b);
}
sum(2,3);


//  set timeintervel
// let id = setInterval(()=>{
//     console.log("lucky Gupta");
// },3000);

// this wit arrow function 


// pq
let sq = (n)=>{
    return n**2;
}
// console.log(sq(6));
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
},10000);

// as 
let arr = [2,3,4,5,6,7];
let arrAvg = (arr)=>{
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(arrAvg(arr));

// 2
let isEven=(n)=>{
    if(n%2==0){
        console.log("Even");
    } else{
        console.log("Odd");
    }
}
isEven(3);
isEven(4);
