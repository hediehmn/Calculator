let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let vals = document.querySelectorAll(".val");
let nums = document.querySelectorAll(".num");
let clearBtn = document.querySelector(".AC");
let delBtn = document.querySelector(".DEL");
let equalBtn = document.querySelector(".equal");
let operator = document.querySelectorAll(".operator");

vals.forEach((val) => {
  val.addEventListener("click", () => {
    num2.value += val.value;
  });
});

clearBtn.addEventListener("click", () => {
  num1.value = "";
  num2.value = "";
});

delBtn.addEventListener("click", () => {
  num2.value = num2.value.slice(0, -1);
});

operator.forEach((op) => {
  op.addEventListener("click", () => {
      num1.value += num2.value;
      num2.value = "";
  });
});

equalBtn.addEventListener("click", () => {
  num1.value += num2.value;
  num2.value = eval(num1.value);
  num1.value = ""
});



