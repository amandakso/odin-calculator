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
let equal=document.getElementById("equal");
let clear=document.getElementById("clear");

function add(a,b) {
    let c= parseFloat(a) + parseFloat(b);
    if (Number.isInteger(c)=="true") {
    console.log(c);
    op.result=c;
    console.log(op.result);
    } else if (Number.isInteger(c * 100000)=="true") {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c*100000)!= "true") {
        let d=c.toFixed(5);
        console.log(d);
        op.result=d;
        console.log(op.result);
    };
};

function subtract(a,b) {
    let c=a - b;
    if (Number.isInteger(c)=="true") {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c * 100000)=="true") {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c*100000)!= "true") {
        let d=c.toFixed(5);
        console.log(d);
        op.result=d;
        console.log(op.result);
    };
};

function multiply(a,b) {
    c= a * b;
    if (Number.isInteger(c)=="true") {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c * 100000)=="true") {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c*100000)!= "true") {
        let d=c.toFixed(5);
        console.log(d);
        op.result=d;
        console.log(op.result);
    };
}

function divide(a,b) {
    let c= a / b;
    if (Number.isInteger(c)=="true") {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c * 100000)=="true") {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c*100000)!= "true") {
        let d=c.toFixed(5);
        console.log(d);
        op.result=d;
        console.log(op.result);
    };
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

equal.addEventListener("click", (e) => {
    showResult(e);
});

clear.addEventListener("click", (e) => {
    resetOp(e);
    display.innerText=op.first;
});



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
        } else if (op.first !="" && op.operator=="/" && op.second=="0") {
             display.innerText="ERROR";
             resetOp();
        } else if (op.first !="" && op.operator !="" && op.second !="") {
             operate(op);
            op.first=op.result;
            display.innerText=`${e.target.innerText}`;
            op.operator=display.innerText;
            op.second="";
    };
};

function showResult(e) {
    if (op.first !="" && op.operator=="/" && op.second=="0") {
        display.innerText="ERROR";
        resetOp();
    } else if (op.first !="" && op.operator !="" && op.second !="") {
        operate(op);
        op.first=op.result;
        display.innerText=op.result
        op.operator="";
        op.second="";
    }
}


function removeListener1() {
    digits[i].removeEventListener("click", (e) => {
        showNumber(e);
        console.log(op.first);
        console.log(op.operator);
        console.log(op.second);
        })
}

function resetOp() {
    op.first="";
    op.second="";
    op.operator="";
    console.log(op.operator);
};


