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

let op= {
    first: 2,
    operator: "*",
    second: 4,
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
