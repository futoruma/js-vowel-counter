const textAreaInput = document.querySelector("#textinput");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", () => {
  let newText = textAreaInput.value.toLowerCase();

  let vowels_count = 0;
  for (let i = 0; i < newText.length; i++) {
    if (
      newText[i] == "a" ||
      newText[i] == "i" ||
      newText[i] == "u" ||
      newText[i] == "e" ||
      newText[i] == "o"
    ) {
      vowels_count++;
    }
  }

  alert(`Vowels: ${vowels_count}`);
});
