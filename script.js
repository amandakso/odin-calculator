let op= {
    first:"",
    operator:"",
    second: "",
    result:"",
};

let dp= true;
let num=true;

let display=document.getElementById("display");
let text= display.innerText;
let digits= document.querySelectorAll(".digit");
let operators=document.querySelectorAll(".operator");
let equal=document.getElementById("equal");
let clear=document.getElementById("clear");
let dec=document.getElementById("dec");
let backspace=document.getElementById("backspace");

function add(a,b) {
    let c= parseFloat(a) + parseFloat(b);
    if (Number.isInteger(c)==true) {
    console.log(c);
    op.result=c;
    console.log(op.result);
    } else if (Number.isInteger(c * 100000)==true) {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c*100000)!= true) {
        let d=c.toFixed(5);
        console.log(d);
        op.result=d;
        console.log(op.result);
    };
};

function subtract(a,b) {
    let c=a - b;
    if (Number.isInteger(c)==true) {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c * 100000)==true) {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c*100000)!= true) {
        let d=c.toFixed(5);
        console.log(d);
        op.result=d;
        console.log(op.result);
    };
};

function multiply(a,b) {
    c= a * b;
    if (Number.isInteger(c)==true) {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c * 100000)==true) {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c*100000)!= true) {
        let d=c.toFixed(5);
        console.log(d);
        op.result=d;
        console.log(op.result);
    };
}

function divide(a,b) {
    let c= a / b;
    if (Number.isInteger(c)==true) {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c * 100000)==true) {
        console.log(c);
        op.result=c;
        console.log(op.result);
    } else if (Number.isInteger(c*100000)!= true) {
        let d=c.toFixed(5);
        console.log(d);
        op.result=d;
        console.log(op.result);
    };
};

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

dec.addEventListener("click", (e) => {
    addDecimal(e);
});

backspace.addEventListener("click", (e) => {
    deleteNum(e);
});

window.addEventListener("keydown", (e) => {
    let press=e.key;
    console.log(press);
    if (Number.isInteger(parseFloat(press))==true) {
        showNumber(press);
    } else if (press== "+" || press== "-" ||press== "*" || press== "/") {
        showOperator(press);
    } else if (press=="Backspace") {
        deleteNum(press);
    } else if (press=="Enter" || press=="=") {
        showResult(press);
    } else if (press==".") {
        addDecimal(press);
    };
});


function showNumber(e) {
        if (num==false) {
        } else if (op.first==""){
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
            dp=true;
            num=true;
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
        dp=true;
        num=false;
    }
}

//can't use includes for objects
function addDecimal(e) {
    if (dp==false || num==false) {

    } else if (op.first !="" && op.operator=="" && dp==true) {
        op.first +=`${e.target.innerText}`;
        display.innerText=op.first;
        dp=false;
    } else if (op.first !="" && op.operator !="" && dp==true){
        op.second += `${e.target.innerText}`;
        display.innerText=op.second;
        dp=false;
    };
    removeListener2();
};

function deleteNum(e) {
    if(num==false) {
    } else if (op.first !="" && op.operator=="") {
        let a=op.first;
        let b=a.slice(0,a.length-1);
        op.first=b;
        display.innerText=op.first;
        console.log(b);
    } else if (op.first !="" && op.operator !="" && op.second !="") {
        let a=op.second;
        let b=a.slice(0,a.length-1);
        op.second=b;
        display.innerText=op.second;
        console.log(b);
    };
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
    dec.removeEventListener("click", (e) => {
        addDecimal(e);
    });
};

function resetOp() {
    op.first="";
    op.second="";
    op.operator="";
    dp=true;
    console.log(op.operator);
};


