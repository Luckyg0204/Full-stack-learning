for(i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i);
    }
}
//print all even number upto 10
for(i=0;i<10;i++){
    if(i%2==0){
        console.log(i);
    }
}
// guess movie

let movie = "3Idiot";
let guess = prompt("guess the movie");

while(guess!=movie){
    console.log("wrong movie");
    guess=prompt("guess the movie again");
}
if(guess==movie){
    console.log("Congrats");
}

let heroes=[["ironman","spiderman","thor"],["superman","wonder wpman","flash"]];
for(i of heroes){
    console.log("new tag");
    for(j of i){
        console.log(j);
    }
}
// Todo app
// as 
// 1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(i=0;i<arr.length;i++){
    if(arr[i]== num){
        arr.splice(i,1);
    }
    console.log(arr[i]);
}
// 2
let n = 2871527879;
let count = 0;
let add=0;
while(n>0){
    count++;
    n=Math.floor(n/10);
}
console.log(count);

while(n>0){
    let ld = n%10;
    add+=ld;
    n=Math.floor(n/10);
}
console.log(add);
let n = 7;
let fact =1;
while(n>0){
    fact*=n;
    n=n-1;
}
console.log(fact);