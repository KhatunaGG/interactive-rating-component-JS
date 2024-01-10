const rateButtons = document.querySelectorAll(".rate");
const submit = document.querySelector(".submit");
const output = document.querySelector(".output");
const result = document.querySelector(".result");

let rate;
rateButtons.forEach((el) => {
  el.addEventListener("click", () => {
    rateButtons.forEach((btn) => {
      if (btn !== el) {
        btn.style.backgroundColor = "";
      }
    });

    if (el.style.backgroundColor !== "#fb7413") {
      rate = el.innerHTML;
      submit.removeAttribute("disabled");
      el.style.backgroundColor = "#fb7413";
    } else {
      el.style.backgroundColor = "";
    }
  });
});

submit.addEventListener("click", () => {
  output.classList.remove("none");
  result.innerHTML = rate;
  setTimeout(reset, 3000);
});

function reset() {
  rateButtons.forEach((btn) => {
    btn.style.backgroundColor = "";
  });
  output.classList.add("none");
  submit.setAttribute("disabled", true);
}
