
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");


nameInput.addEventListener("input", () => {

  const inputText = nameInput.value;


  if (inputText.trim() !== "") {
    nameOutput.textContent = inputText;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});