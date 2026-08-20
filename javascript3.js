// Trim
let name = prompt("enter your num.name");
let display = name.trim();
console.log(display);

// Strings - Strings are imutable 
let num = "Apna collage";

// toUpperCase and toLowerCase
console.log(num.toUpperCase());
console.log(num.toLowerCase());

// index-of
let str = "iLoveCoding";

console.log(str.indexOf("L"));

// Methord Chaining
let newMsg = "    Hello.   ";
console.log(newMsg.trim().toUpperCase()); 

// Slice Methord
let coll = "ApnaCollage";

let first = coll.slice(0,5);
let mid = coll.slice(4);
let end = coll.slice(-1);
 
console.log(first);
console.log(mid);
console.log(end);

// replace
console.log(coll.replace("Apna","IDo"));

// repeat

console.log(coll.repeat(2));

// array - it is a datastructure which is used to store the data;
// type of array in java sript is object
let students = ["Lucky","Aman","Anmol"];

// arrays are mutable
students[0]="Ram";
console.log(students);

// Array methord
//push
students.push("Man")
console.log(students);

//pop
students.pop();
console.log(students);

// unshift- add from starting
// shift remove from starting


// indexof
console.log(students.indexOf("Anmol"));

// includes - search the value and give true and false

//. concatenate
let teach = ['prakash', 'rahul', 'lucky'];
console.log(teach.concat(students));

// reverse
teach.reverse();
console.log(teach);

// Slice in array is juat likje slice in string
// Splice-change in it original array ------ splice(Start,delete,add);
let colors = ["pink","red","Blue","yellow","Green"];
colors.splice(2,0,"violet");
console.log(colors);

// Sort - it is based on string 
// Array.sort();

//. pq
let star = ['january','july','march','august'];
star.splice(0,2,"july","june");
console.log(star);

star.reverse();
console.log(star.indexOf("march"));

// Array refrences - refrence variable - store the address of the array not the value

// ass
//1
let arr = [7,9,0,-2];
console.log(arr.slice(0,3));
console.log(arr.slice(1));

let nam = "aman";
let i = 2;
if(nam[i]==nam[i].toLowerCase()){
    console.log("lower case");
} else{
    console.log("upper case");
}
let ar = ["a","b","c","d"];
console.log(ar.includes("r"));