function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans =  two() + one();
    console.log(ans);
}
three();


// Callback hell 
let h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color=color;
        resolve("Coloe changed to "+color);
    }, delay);
    })
}

changeColor("red",1000).then((res)=>{
    
    console.log("color changed to red");
    console.log(res);
    return changeColor("blue",1000);
})
.then((res)=>{
    console.log("Color changed to blue");
    console.log(res);
    return changeColor("green",1000);
})
.then((res)=>{
    console.log("Color change to green");
    console.log(res);
    return changeColor("yellow",1000);
})
.then((res)=>{
    console.log("color changed to yellow");
    console.log(res);
})
.catch((error)=>{
    console.log("Sorry your color was not changed");
    console.log(error);
})


changeColor("red",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000);
        });
    });
});

// Promise 

function saveToDate(Data,success, failure){
    let int = Math.floor(Math.random()*10);
    if(int>4){
        success();
    }
    else{
        failure();
    }
}
saveToDate('data',()=>{
    console.log('data1 was saved');
    saveToDate('data2',()=>{
        console.log('data2 was saved');
        saveToDate('data3',()=>{
            console.log('data3 was saved');
        },()=>{
            console.log("data3 was not saved")
        })
    },()=>{
        console.log("data2 was not saved");
    })
},()=>{
    console.log('data1 was not saved');
})

function savetoData(data){
    return new Promise((resolve,reject)=>{
        let int = Math.floor(Math.random()*10);
        if(int>4){
            resolve(" your query is resolve: data was saved");
         } else {
            reject("your query is not resolve: data was not saved");
        }
    });
}

savetoData('data1').then((result)=>{
    console.log("data1 was saved");
    console.log(result);
    return savetoData("data2");
})
.then((result)=>{
    console.log("data2 was saved");
    console.log(result);
    return savetoData("data3");
})
.then((result)=>{
    console.log("data3 was saved");
    console.log(result);
}).catch((error)=>{
    console.log("neither any data was not saved");
    console.log(error);
})