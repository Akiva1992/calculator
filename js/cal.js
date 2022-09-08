// let num1 = +(prompt("num1?"));
// let operator = prompt("operator?");
// let num2 = +(prompt("num2?"));

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