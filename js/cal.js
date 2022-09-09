
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

// console.log(add(1,1));
// console.log(subtract(1,1));
// console.log(multiply(1,1));
// console.log(divide(1,1));

// console.log(run(num1,operator,num2));

const numBtn = Array.from(document.querySelectorAll(".btn.num"));
const result = document.querySelector(".result");
const problem = document.querySelector(".problem");
const num1Container = document.querySelector(".num1-container");
const operatorContainer = document.querySelector(".operator-container");
const num2Container = document.querySelector(".num2-container");
const operator = Array.from(document.querySelectorAll(".btn.operator"));
const dot = document.querySelector(".btn.dot");

 
let num1 = "", num2 = "", operatorSym ="";

numBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        const selected = operator.some(op => op.classList.contains("op-selected"));
        if (!selected){
            num1 += btn.innerHTML
            console.log(num1)
            num1Container.innerHTML = num1
            result.innerHTML = `=${num1}`
        }
        else if (selected){
            num2Container.classList.add("num2-selected");
            num2 += btn.innerHTML
            console.log(num2)
            num2Container.innerHTML = num2
            // result.innerHTML = `=${num1}`
            console.log(run(num1,operatorSym,num2))
            result.innerHTML = `=${run(num1,operatorSym,num2)}`
        }
    });
}); 

dot.addEventListener("click", ()=>{
    if (!dot.classList.contains("dot-selected-num1")){    
        dot.classList.add("dot-selected-num1");
        num1 += ".";
        num1Container.innerHTML = num1
        result.innerHTML = `=${num1}`
    }
    else if (!dot.classList.contains("dot-selected-num2")){    
        dot.classList.add("dot-selected-num2");
        num2 += ".";
        num2Container.innerHTML = num2
    }
});

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

// const selected = operator.some(op => op.classList.contains("selected"));
// console.log(selected);  

