/*
    make an array and get the each btn click and then do operations on it
*/

let totalCounter = 0;
let buffer = "0";
let prevOperator;
const screen = document.querySelector(".result-box")

document.querySelector('.num-pad').addEventListener("click", function(event){
    btnClick(event.target.innerText);
})

function btnClick(value){
    if (isNaN(parseInt(value))){
        symbolHandler(value);
    }
    else{
        numberHandler(value);
    }
}

function symbolHandler(value){



}

function numberHandler(value){

    if (buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
    }
    rerender();
}

function rerender(){
    screen.innerText = buffer; 
}


// const numBtn = document.querySelector(".reg-btn");
// const firstArr = [];
// const optBtn = document.querySelector(".op-btn");
// console.log(`This is opBtn: ${optBtn}`);
// if(numBtn){
//     numBtn.addEventListener("click", myfunction(event));
// }
// else if(optBtn){
//     optBtn.addEventListener("click", function(){
//         console.log(optBtn);
//     })
// }

// function myfunction(){
//     firstArr.push(event.target.innerHTML);
//     document.getElementsByClassName('.result-box').innerHTML = console.log(`${typeof(parseInt(event.target.innerText))}`);
//     firstArr.forEach(console.log);
//     // foreachconsole.log(parseInt(firstArr));

// }


// // function add('reg-btn', 'opt-btn', 'reg-btn'){
// //     myfunction()

// // }