let op= {
    first:"",
    operator:"",
    second: "",
};

let display=document.getElementById("display");
let text= display.innerText;
let digits= document.querySelectorAll(".digit");
let operators=document.querySelectorAll(".operator");

function add(a,b) {
    let c= a + b;
    console.log(c);
};

function subtract(a,b) {
    let c=a - b;
    console.log(c);
};

function multiply(a,b) {
    let c= a * b;
    console.log(c);
}

function divide(a,b) {
    let c= a / b;
    console.log(c);
};


function operate(op) {
    for (let operator in op) {
        if (op[operator]=="+") {
            add(op.first,op.second);
        } else if (op[operator]=="-") {
            subtract(op.first,op.second);
        } else if (op[operator]=="*") {
            multiply(op.first,op.second);
        } else if (op[operator]=="/") {
            divide(op.first,op.second);
        };
    };

};


for (i=0; i< digits.length; i++) {
    digits[i].addEventListener("click", (e) => {
    showNumber(e);
    console.log(op.first);
console.log(op.second);
console.log(op.operator);
    });
};
for (i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
        showOperator(e);
        console.log(op.first);
console.log(op.second);
console.log(op.operator);
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
         } else {
            console.log(op.first);
    };
};

function showOperator(e) {
    display.innerText=`${e.target.innerText}`;
    op.operator= display.innerText;
    console.log(op.operator);
};
