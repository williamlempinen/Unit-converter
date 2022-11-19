let inputValue, resultValue;

let inputType = document.getElementById("input-type");
let resultType = document.getElementById("result-type");

let inputField = document.getElementById("input-field");
let resultField = document.getElementById("result-field");

inputField.addEventListener("keyup", () => {
    inputField.value = resultField.value;
})