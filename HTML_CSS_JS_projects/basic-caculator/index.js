const buttons = document.querySelectorAll("button");
const windows = document.getElementById("inputwindows");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    if (buttonText === "AC") {
      windows.value = "";
    } else if (buttonText === "=") {
      windows.value = eval(windows.value);
    } else {
      windows.value += buttonText;
    }
  });
});
