
const add = (num1, num2) => Number(num1)+Number(num2);
const subtract = (num1, num2) => num1-num2;
const multiply = (num1, num2) => num1*num2;
const divide = (num1, num2) => (num2 == 0)? "Can't divide by zero" : num1/num2;

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
const clear = document.querySelector(".btn.clear");
const off = document.querySelector(".btn.off"); 
const plusMinus = document.querySelector(".btn.plus-minus"); 
const backspace = document.querySelector(".btn.backspace"); 



let num1active = false, num2active = false, operatorActive = false, equalsActive= false, equalsNotZero = true, num1DotClicked = false, num2DotClicked = false;
let num1 = "", tempNum1="", num2 = "", operatorSym ="";

/////////////////num1 and num2 event listeners////////////////////////////////////////
numBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if ((!operatorActive) && equalsNotZero){
            result.classList.remove("active");
            problem.classList.remove("inactive");
            num1active = true;
            equalsActive = false;
            num1Container.innerHTML ="";
            num2Container.innerHTML ="";
            operatorContainer.innerHTML ="";
            num1 += btn.innerHTML
            console.log("num1: " + num1)
            num1Container.innerHTML = num1
            result.innerHTML = `=${num1}`
        }
        else if (operatorActive && equalsNotZero){
            num2active = true;
            num2 += btn.innerHTML
            console.log("num2: " +num2)
            num2Container.innerHTML = num2
            result.innerHTML = `=${run(num1,operatorSym,num2)}`
            if (result.innerHTML == "=Can't divide by zero"){
                equalsNotZero = false;
            }
        }
    });
}); 


//////////////////////////////////////Operator listener/////////////////////////////////
operator.forEach(op => {
    op.addEventListener("click", ()=>{
        if(num1active && equalsNotZero){
            num1active = false;
            operatorActive = true;
            operatorContainer.innerHTML = op.innerHTML;
            operatorSym = op.innerHTML;
            console.log(operatorSym)
        }
        else if (!num1active && !num2active && equalsNotZero){
            equalsActive = false;
            result.classList.remove("active");
            problem.classList.remove("inactive");
            num2active = false;
            num1active = false;
            operatorActive = true;
            num1Container.innerHTML ="";
            num2Container.innerHTML ="";
            operatorContainer.innerHTML ="";
            num1 = result.innerHTML.replace("=", "");
            num1Container.innerHTML = num1
            result.innerHTML = `=${num1}`
            operatorContainer.innerHTML = op.innerHTML;
            operatorSym = op.innerHTML;
        }
    });
});

////////////////////////////////////Equal listener/////////////////////////////////////////////
equals.addEventListener("click", ()=>{
    if (num2active){
        num1active = false;
        num2active = false;
        equalsActive= true;
        operatorActive = false;    
        result.classList.add("active");
        problem.classList.add("inactive");

        num1 = "", num2="", operatorSym="";
    }
});


/////////////////////////Floating point listener////////////////////////////
dot.addEventListener("click", ()=>{
    if (!num1DotClicked && !operatorActive){    
        num1DotClicked = true;
        num1 += ".";
        num1Container.innerHTML = num1
        result.innerHTML = `=${num1}`
    }
    else if (operatorActive && !num2DotClicked){    
        num2DotClicked = true;
        num2 += ".";
        num2Container.innerHTML = num2
    }
});


/////////////////////////Clear listener////////////////////////////
clear.addEventListener("click", ()=>{
    num1active = false;
    num2active = false;
    operatorActive = false; 
    num1Container.innerHTML ="";
    num2Container.innerHTML ="";
    operatorContainer.innerHTML ="";
    result.innerHTML = "=0";
    num1active = false, num2active = false, operatorActive = false, equalsActive= false, equalsNotZero = true, num1DotClicked = false, num2DotClicked = false;
    num1 = "",tempNum1="", num2 = "", operatorSym ="";

});

/////////////////////////Off listener////////////////////////////
off.addEventListener("click", ()=>{
    num1active = false;
    num2active = false;
    operatorActive = false; 
    num1Container.innerHTML ="";
    num2Container.innerHTML ="";
    operatorContainer.innerHTML ="";
    result.innerHTML = "";
    num1active = true, num2active = false, operatorActive = false, equalsActive= false, equalsNotZero = true, num1DotClicked = false, num2DotClicked = false;
    num1 = "",tempNum1="", num2 = "", operatorSym ="";

});

////////////////////////Plus-minus listener//////////////////////////////
plusMinus.addEventListener("click",() => {
    if (result.innerHTML[1] == "-"){
        console.log("yes")
        result.innerHTML = result.innerHTML.replace("=-", "=");
    }
    else{
        result.innerHTML = result.innerHTML.replace("=", "=-");
    }
});

////////////////////////Backspace listener//////////////////////////////////
backspace.addEventListener("click", () =>{
    if (num2Container.innerHTML != "" && !equalsActive){
        if (num2.charAt(num2.length-1)== "."){
            num2DotClicked = false;
        }
        num2Container.innerHTML = num2Container.innerHTML.slice(0,-1);
        num2 = num2Container.innerHTML;
        result.innerHTML = `=${run(num1,operatorSym,num2)}`
        if (num2Container.innerHTML == ""){
            result.innerHTML = `=${num1}`
        }
    }
    else if (num2Container.innerHTML == "" && operatorContainer.innerHTML.length > 0 && !equalsActive){
        operatorActive = false;
        operatorContainer.innerHTML ="";
        operatorSym = "";
    }
    else if (num2Container.innerHTML == "" && operatorContainer.innerHTML == "" && !equalsActive){
        if (num1.charAt(num1.length-1)== "."){
            num1DotClicked = false;
        }
        num1Container.innerHTML = num1Container.innerHTML.slice(0,-1);
        num1 = num1Container.innerHTML;
        if (num1Container.innerHTML == ""){
            result.innerHTML = "0";
        }
    }

});
// const selected = operator.some(op => op.classList.contains("selected"));
// console.log(selected);  

