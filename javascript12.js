// async function great(){
//     // throw "404 not found";
//     return "Welcome to my home";
// }
// great().then((res)=>{
//     console.log("your promise is resolved");
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("your promise is rejected");
//     console.log(err);
// })
// await 
// let h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log("color changed to"+color);
//             resolve("color is. changed successfully ");
//         }, delay);
//     })
// }
// async function demo(){
//     await changeColor("red",1000);
//      await changeColor("blue",1000);
//       await changeColor("green",1000);
//        await changeColor("yellow",1000);
// }

// JSON

// let jso = '{"fact":"A group of cats is called a clowder.","length":36}'
// let newFormat = JSON.parse(jso);
// console.log(newFormat);
// console.log(newFormat.length);


// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json()
// })
// .then((data1)=>{
//     console.log(data1.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

// async function catFact(){
//    try{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res1 = await fetch(url);
//     let data2 = await res1.json();
//     console.log(data2.fact);
//    }
//    catch(e){
//     console.log(e);
//    }
// }
// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");
// let img = document.querySelector("img");

// btn.addEventListener("click",async ()=>{
//    let link = await dogImg();
//    img.setAttribute("src",link);
// })
// async function dogImg(){
//    try{
//     let res = await axios.get(url2);
//     return res.data.message;
//    }
//    catch(e){
//     return "No image found found";
//    }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("#ul");

btn.addEventListener('click',async ()=>{
   ul.innerText="";
   let country = input.value;
   console.log(country);
   let detail = await countryDetail(country);
   for(det of detail){
      console.log(det);
      let li = document.createElement("li");
      li.innerText=det.name;
      ul.appendChild(li);
   }
})
async function countryDetail(country) {
   try{
   let res = await axios.get(url+country);
   return res.data;
   }
   catch(e){
      console.log(e);
      return [];
   }
}
