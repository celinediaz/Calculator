const disp = document.querySelector(".display p");
let num = "";
let oper = -1;
let a;
let reset = false;

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
  } else {
    return false;
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

document.querySelector(".i1").onclick = function () {
  numClicked("1");
};
document.querySelector(".i2").onclick = function () {
  numClicked("2");
};
document.querySelector(".i3").onclick = function () {
  numClicked("3");
};
document.querySelector(".i4").onclick = function () {
  numClicked("4");
};
document.querySelector(".i5").onclick = function () {
  numClicked("5");
};
document.querySelector(".i6").onclick = function () {
  numClicked("6");
};
document.querySelector(".i7").onclick = function () {
  numClicked("7");
};
document.querySelector(".i8").onclick = function () {
  numClicked("8");
};
document.querySelector(".i9").onclick = function () {
  numClicked("9");
};
document.querySelector(".i0").onclick = function () {
  if (num != 0) {
    numClicked("0");
  }
};
document.querySelector(".dot").onclick = function () {
  if (reset === true) {
    reset = false;
  }
  if (!num.includes(".")) {
    num += ".";
    disp.textContent = num;
  }
};
document.querySelector(".sum").onclick = function () {
  solve();
  oper = 0;
};
document.querySelector(".res").onclick = function () {
  solve();
  oper = 1;
};
document.querySelector(".mul").onclick = function () {
  solve();
  oper = 2;
};
document.querySelector(".divi").onclick = function () {
  solve();
  oper = 3;
};
document.querySelector(".pm").onclick = function () {
  num = (0 - +num).toString();
  disp.textContent = num;
};
document.querySelector(".equals").onclick = function () {
  solve();
  num = a;
  oper = -1;
  reset = true;
};
document.querySelector(".c").onclick = function () {
  oper = -1;
  a = 0;
  num = "";
  disp.textContent = a;
};

document.querySelector(".del").onclick = function () {
  num = '';
  disp.textContent = 0;
};

document.querySelector(".perc").onclick = function () {
  num = +num / 100;
  disp.textContent = num;
};

function solve() {
  if (oper >= 0) {
    a = operator(+a, +num, oper);
    if (a) {
      a = parseFloat(a.toFixed(3));
      disp.textContent = a;
    } else disp.textContent = "YOU CAN'T DIVIDE BY 0";
  } else {
    a = +num;
  }
  num = "";
}

function numClicked(n) {
  if (reset === true) {
    num = "";
    reset = false;
  }
  num += n;
  disp.textContent = num;
}
