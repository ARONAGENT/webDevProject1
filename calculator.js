const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const op = e.target.innerHTML.trim();
    if (op === "=") {
      try {
        inputValue.innerText = eval(inputValue.innerText);
      } catch (error) {
        inputValue.innerText = "Error";
      }
    } else if (op === "AC") {
      inputValue.innerText = "0";
    } else if (op === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1);
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0";
      }
    } else {
      const lastChar = inputValue.innerText.slice(-1);
      if (isNaN(lastChar)) {
        inputValue.innerText = inputValue.innerText.slice(0, -1) + op;
      } else {
        inputValue.innerText += op;
      }
    }
  });
});
