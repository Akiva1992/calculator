
const add = (num1, num2) => num1+num2;
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
    else if (operator==="*"){
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
const operator = document.querySelectorAll(".btn.operator");
const dot = document.querySelector(".btn.dot");

 
let num1 = "";
numBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        num1 += btn.innerHTML
        console.log(num1)
        problem.innerHTML = num1
        result.innerHTML = `=${num1}`
    });
}); 

dot.addEventListener("click", ()=>{
    if (!dot.classList.contains("selected")){
        dot.classList.add("selected")
        num1 += ".";
        problem.innerHTML = num1
        result.innerHTML = `=${num1}`
    }
});

