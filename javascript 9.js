//DOM - it is a logical tree like structure It allow us to change webpage content 

// getElementById- i selecft the element by id and manipulate it
let img = document.getElementById("mainImg");
console.log(img);

// getElementByClassName - it select the element by class name and manipulate it
let oldImg = document.getElementsByClassName("oldImg");

for(i=0;i<oldImg.length;i++){
    console.dir(oldImg[i]);
}

// getElementByTagName - it select the element by tag name and manipulate it
let h1 = document.getElementsByTagName("h1");
console.log(h1[0]);

// querySelector - it select the element by css selector and manipulate it
let h2 = document.querySelector("div a");
console.log(h2);

// querySelectorAll - it select the element by css selector and manipulate it
let p = document.querySelectorAll("div a ");
console.log(p);

let para = document.querySelector("p");

// innerHTML - it is used to change the content of the element
para.innerHTML = "<h1>Hello Lucky Gupta</h1>";   

// innerText - is used to change the text of the element
para.innerText = "Hello Lucky Gupta";

// textContent - it is used to change the text of the element
para.textContent = "Hello  Gupta";

console.log(img.getAttribute("id"));

img.setAttribute("id","spiderImg");

// obj.classlist - it is used to add or remove the class of the element
console.log(img.classList);
img.classList.add("newImg");
console.log(img.classList);
img.classList.remove("newImg");
img.classList.contains("newImg");
img.classList.toggle("green");
console.log(img.classList);

// navigation - it is used to navigate the dom tree
console.log(img.parentElement);
console.log(img.children);
console.log(img.childElementCount);
console.log(img.parentElement.parentElement);
console.log(img.nextElementSibling);
console.log(img.previousElementSibling);

// creation of button 
let btn = document.createElement("button");
btn.innerText = "Submit me";
let bd = document.querySelector("body");
bd.appendChild(btn);

bd.prepend(btn);