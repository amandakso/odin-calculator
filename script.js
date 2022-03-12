let op= {
    first:"",
    operator:"",
    second: "",
    result:"",
};

let display=document.getElementById("display");
let text= display.innerText;
let digits= document.querySelectorAll(".digit");
let operators=document.querySelectorAll(".operator");

function add(a,b) {
    let c= parseFloat(a) + parseFloat(b);
    console.log(c);
};

function subtract(a,b) {
    let c=a - b;
    console.log(c);
};

function multiply(a,b) {
    c= a * b;
    console.log(c);
}

function divide(a,b) {
    let c= a / b;
    console.log(c);
};
//operate function isn't working anymore???
console.log(op.first);
console.log(op.operator);
console.log(op.second);

function operate(op) {
    switch(op.operator) {
        case "+":
            add(op.first,op.second);
            break;
        case "-":
            subtract(op.first,op.second);
            break;
        case "*":
            multiply(op.first, op.second);
            break;
        case "/":
            divide(op.first, op.second);
            break;
        default:
            console.log("error");
        };
    };


for (i=0; i< digits.length; i++) {
    digits[i].addEventListener("click", (e) => {
    showNumber(e);
    console.log(op.first);
    console.log(op.operator);
    console.log(op.second);
    });
};
for (i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
        showOperator(e);
        console.log(op.first);
        console.log(op.operator);
        console.log(op.second);
    });
};

function showNumber(e) {
        if (op.first==""){
            display.innerText= `${e.target.innerText}`;
            op.first=display.innerText;
            console.log(op.first);
        } else if (op.first !="" && op.operator=="") {
            display.innerText +=`${e.target.innerText}`;
            op.first=display.innerText;
            console.log(op.first);
        }else if (op.first !="" && op.operator !="" && op.second=="") {
            display.innerText= `${e.target.innerText}`;
            op.second=display.innerText;
            console.log(op.second);  
        } else if (op.first !="" && op.operator  !="" && op.second !="") {
            display.innerText += `${e.target.innerText}`;
            op.second=display.innerText;
            console.log(op.second);
    };
    removeListener1();
};

function showOperator(e) {
        if (op.first !="" && op.operator=="") {
        display.innerText=`${e.target.innerText}`
        op.operator= display.innerText;
        } else if (op.first !="" && op.operator !="" && op.second !="") {
            operate(op);
        /*
        display.innerText=`${e.target.innerText}`;
        op.first=c;
        console.log(c);
        op.operator=display.innerText;
        op.second=""; */
        } else if (op.first !="" && op.operator=="/" && op.second=="0") {
        display.innerText="ERROR";
    };
  // removeListener2();
};

function removeListener1() {
    digits[i].removeEventListener("click", (e) => {
        showNumber(e);
        console.log(op.first);
        console.log(op.operator);
        console.log(op.second);
        })
}
function removeListener2() {
    operators[i].removeEventListener("click", (e) => {
        showOperator(e);
        console.log(op.first);
        console.log(op.operator);
        console.log(op.second);
    });
};
