const disp = document.querySelector(".display p");
let num = "";
let oper = -1;
let a;
let reset = false;
let symb = false;

function refresh() {
    oper = -1;
    a = 0;
    num = "";
    disp.textContent = a;
}

function sum(a, b) {
    return a + b;
}
function res(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b != 0) {
        return a / b;
    } else if (b === 0) {
        refresh();
        disp.textContent = "CANT DIVIDE BY THAT";
    }
}
function operator(a, b, op) {
    switch (op) {
        case 0:
            return sum(a, b);
        case 1:
            return res(a, b);
        case 2:
            return mul(a, b);
        case 3:
            return div(a, b);
    }
}

for (let i = 0; i < 10; i++) {
    document.querySelector(`.i${i}`).onclick = function () {
        numClicked(`${i}`);
    };
}

document.querySelector(".dot").onclick = function () {
    if (reset === true) {
        reset = false;
    }
    if (!num.includes(".")) {
        num += ".";
        disp.textContent = num;
    }
};

for (let i = 0; i < 4; i++) {
    document.querySelector(`.op${i}`).onclick = function () {
        solve();
        oper = i;
    };
}

document.querySelector(".pm").onclick = function () {
    num = (0 - +num).toString();
    disp.textContent = num;
};
document.querySelector(".equals").onclick = function () {
    solve();
    num = a;
    oper = -1;
    reset = true;
    symb = false;
};

document.querySelector(".del").onclick = function () {
    num = "";
    disp.textContent = 0;
};

document.querySelector(".perc").onclick = function () {
    num = +num / 100;
    disp.textContent = num;
};

function solve() {
    if (symb === true) {
        return;
    }
    //if this is not the first calculation.
    if (oper >= 0) {
        a = operator(+a, +num, oper);
        if (a) {
            a = parseFloat(a.toFixed(3));
            disp.textContent = a;
        }
    }
    else {
        a = +num;
    }
    num = "";
    symb = true;
}

function numClicked(n) {
    if (reset === true) {
        num = "";
        reset = false;
    }
    symb = false;
    num += n;
    disp.textContent = parseFloat(num);
}
