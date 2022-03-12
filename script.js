let op= {
    first: 2,
    operator: "*",
    second: 4,
};
const zero=document.getElementById("zero");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
let display=document.getElementById("display");
let text= display.innerText;
let digits= document.querySelectorAll(".digit");

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


operate(op);

for (i=0; i< digits.length; i++) {
    digits[i].addEventListener("click", (e) => {
    showNumber(e);
    });
};

function showNumber(e) {
    display.innerText += `${e.target.innerText}`;
};
