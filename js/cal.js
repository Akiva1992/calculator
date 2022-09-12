
const add = (num1, num2) => Number(num1)+Number(num2);
const subtract = (num1, num2) => num1-num2;
const multiply = (num1, num2) => num1*num2;
const divide = (num1, num2) => num1/num2;

const run = (num1, operator, num2) => {
    if (operator==="+"){
        return add(num1,num2);
    }
    else if (operator==="-"){
        return subtract(num1,num2);
    }
    else if (operator==="x"){
        return multiply(num1,num2);
    }
    else {
        return divide(num1,num2);
    }
}

// console.log(run(num1,operator,num2));

const numBtn = Array.from(document.querySelectorAll(".btn.num"));
const result = document.querySelector(".result");
const problem = document.querySelector(".problem");
const num1Container = document.querySelector(".num1-container");
const operatorContainer = document.querySelector(".operator-container");
const num2Container = document.querySelector(".num2-container");
const operator = Array.from(document.querySelectorAll(".btn.operator"));
const dot = document.querySelector(".btn.dot");
const equals = document.querySelector(".btn.equals");

let num1active = false, num2active = false, operatorActive = false, equalsActive= false; 
let num1 = "", tempNum1="", num2 = "", operatorSym ="";

/////////////////num1 and num2 event listeners////////////////////////////////////////
numBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        const selected = operator.some(op => op.classList.contains("op-selected"));
        if (!selected){
            num2="";
            result.innerHTML = "";
            num2Container.innerHTML = "";
            operatorContainer.innerHTML ="";
            num1 += btn.innerHTML
            console.log("num1: " + num1)
            num1Container.innerHTML = num1
            result.innerHTML = `=${num1}`
            result.classList.remove("active");

        }
        else if (selected && !result.classList.contains("active")){
            num2Container.classList.add("num2-selected");
            num2 += btn.innerHTML
            console.log("num2: " +num2)
            num2Container.innerHTML = num2
            result.innerHTML = `=${run(num1,operatorSym,num2)}`
        }
    });
}); 

/////////////////////////Floating point listener////////////////////////////
dot.addEventListener("click", ()=>{
    if (!dot.classList.contains("dot-selected-num1")){    
        dot.classList.add("dot-selected-num1");
        num1 += ".";
        num1Container.innerHTML = num1
        result.innerHTML = `=${num1}`
    }
    else if (!dot.classList.contains("dot-selected-num2")&&!result.classList.contains("active")){    
        dot.classList.add("dot-selected-num2");
        num2 += ".";
        num2Container.innerHTML = num2
    }
});

//////////////////////////////////////Operator listener/////////////////////////////////
operator.forEach(op => {
    op.addEventListener("click", ()=>{
        if(!num2Container.classList.contains("num2-selected")){
            operatorContainer.innerHTML = op.innerHTML;
            op.classList.add("op-selected");
            dot.classList.add("dot-selected-num1");
            operatorSym = op.innerHTML;
            console.log(operatorSym)
        }
    });
});

////////////////////////////////////Equal listener/////////////////////////////////////////////
equals.addEventListener("click", ()=>{
    result.classList.add("active");
    problem.classList.add("inactive");
    operator.forEach(op=> op.classList.remove("op-selected"));
    tempNum1 = result.innerHTML.replace("=", "");
    num1 = "", num2="", operatorSym="";
    num2Container.classList.remove("num2-selected");
});









// const selected = operator.some(op => op.classList.contains("selected"));
// console.log(selected);  

