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
    op.result=c;
    } else if (Number.isInteger(c * 100000)==true) {
        op.result=c;
    } else if (Number.isInteger(c*100000)!= true) {
        let d=c.toFixed(5);
        op.result=d;
    };
};

function subtract(a,b) {
    let c=a - b;
    if (Number.isInteger(c)==true) {
        op.result=c;
    } else if (Number.isInteger(c * 100000)==true) {
        op.result=c;
    } else if (Number.isInteger(c*100000)!= true) {
        let d=c.toFixed(5);
        op.result=d;
    };
};

function multiply(a,b) {
    c= a * b;
    if (Number.isInteger(c)==true) {
        op.result=c;
    } else if (Number.isInteger(c * 100000)==true) {
        op.result=c;
    } else if (Number.isInteger(c*100000)!= true) {
        let d=c.toFixed(5);
        op.result=d;
    };
}

function divide(a,b) {
    let c= a / b;
    if (Number.isInteger(c)==true) {
        op.result=c;
    } else if (Number.isInteger(c * 100000)==true) {
        op.result=c;
    } else if (Number.isInteger(c*100000)!= true) {
        let d=c.toFixed(5);
        op.result=d;
    };
};

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
    });
};
for (i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
        showOperator(e);
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
    } else if (press=="a") {
        resetOp();
        display.innerText=op.first;
    };
});


function showNumber(e) {
        if (num==false) {
        } else if (op.first==""){
            if (e.type!="click") {
                display.innerText= e;
                op.first=display.innerText;
            }else {
            display.innerText= `${e.target.innerText}`;
            op.first=display.innerText;
            };
        } else if (op.first !="" && op.operator=="") {
            if (e.type !="click") {
                display.innerText+= e;
                op.first=display.innerText;
            }else {
            display.innerText +=`${e.target.innerText}`;
            op.first=display.innerText;
            };
        }else if (op.first !="" && op.operator !="" && op.second=="") {
            if (e.type!="click") {
                display.innerText= e;
                op.second=display.innerText;
            }else{
            display.innerText= `${e.target.innerText}`;
            op.second=display.innerText;
            };  
        } else if (op.first !="" && op.operator  !="" && op.second !="") {
            if (e.type!="click") {
                display.innerText+= e;
                op.second=display.innerText;
            }else {
            display.innerText += `${e.target.innerText}`;
            op.second=display.innerText;
        };
    };
    removeListener1();
};

function showOperator(e) {
        if (op.first !="" && op.operator=="") {
            if (e.type != "click") {
                display.innerText=e;
                op.operator=display.innerText;
                dp=true;
                num=true;
            } else {
            display.innerText=`${e.target.innerText}`
            op.operator= display.innerText;
            dp=true;
            num=true;
            };
        } else if (op.first !="" && op.operator=="/" && op.second=="0") {
             display.innerText="ERROR";
             resetOp();
        } else if (op.first !="" && op.operator !="" && op.second !="") {
            if (e.type != "click") {
                operate(op);
                op.first=op.result;
                display.innerText=e;
                op.operator=display.innerText;
                op.second="";
                dp=true;
                num=true;
            } else {
             operate(op);
            op.first=op.result;
            display.innerText=`${e.target.innerText}`;
            op.operator=display.innerText;
            op.second="";
            dp=true;
            num=true;
            };
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

    } else if (op.first=="" && dp==true){
        if(e.type !="click") {
            op.first+= e;
            display.innerText=op.first;
            dp=false;
        } else {
            op.first += `${e.target.innerText}`;
            display.innerText=op.first;
            dp=false;
        };
    } else if (op.first !="" && op.operator=="" && dp==true) {
        if (e.type !="click") {
            op.first += e;
            display.innerText=op.first;
            dp=false;
        } else {
        op.first +=`${e.target.innerText}`;
        display.innerText=op.first;
        dp=false;
        };
    } else if (op.first !="" && op.operator !="" && dp==true){
        if (e.type !="click") {
            op.second += e;
            display.innerText=op.second;
            dp=false;
        }else {
        op.second += `${e.target.innerText}`;
        display.innerText=op.second;
        dp=false;
        };
    };
    removeListener2();
};

function deleteNum(e) {
    let a=op.first;
    let b=op.second;
    if(num==false) {
    } else if (a.slice(-1)=="."){
        let c=a.slice(0,a.length-1);
        op.first=c;
        display.innerText=op.first;
        dp=true;
    }else if (b.slice(-1)==".") {
        let c=b.slice(0,b.length-1);
        op.second=c;
        display.innerText=op.second;
        dp=true;
    } else if (op.first !="" && op.operator=="") {
        let c=a.slice(0,a.length-1);
        op.first=c;
        display.innerText=op.first;
    } else if (op.first !="" && op.operator !="" && op.second !="") {
        let c=b.slice(0,b.length-1);
        op.second=c;
        display.innerText=op.second;
    };
};


function removeListener1() {
    digits[i].removeEventListener("click", (e) => {
    showNumber(e);
    });
};

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
    num=true;
};


