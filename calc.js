
let totalCounter = 0;
let buffer = "0";
let prevOperator = null;
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
    rerender();
}

function symbolHandler(value){
    switch(value){
        case 'C':
            buffer = "0";
            totalCounter = 0;
            prevOperator = null;
            console.log("in C");
            break; 
        case "=": 
            console.log("in equal");
            if (prevOperator === null){
                return;
            }  
            flushOp(parseInt(buffer));
            prevOperator = null;
            buffer = "" + totalCounter;
            totalCounter = 0;
            break;
        case "←": 
           if(buffer.length === 1){
               console.log("here");
               buffer = "0";
           }else {
               console.log("in backspace");
               buffer = buffer.substring(0, buffer.length-1);
           }
           break;
        default:
            handleMath(value);
            break; 
        }
}   

function numberHandler(value){
    if (buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
    }    
}

function handleMath(value){
    const intBuffer = parseInt(buffer);
    if (totalCounter === 0){
        totalCounter = intBuffer;
    }else{
        flushOp(intBuffer);
    }
    prevOperator = value;
    buffer = "0";
}

function flushOp(intBuffer){
    if(prevOperator === "+"){
        totalCounter += intBuffer; 
    }else if(prevOperator === "-"){
        totalCounter -= intBuffer;
    }else if(prevOperator === "×"){
        totalCounter *= intBuffer;
    }else if(prevOperator === "÷"){
        totalCounter /= intBuffer;
    }
}

function rerender(){
    screen.innerText = buffer; 
}