//html option-tags 
let inputType = document.getElementById("input-type");
let resultType = document.getElementById("result-type");

//html input-tags
let inputField = document.getElementById("input-field");
let resultField = document.getElementById("result-field");

//html button
let convertButton = document.getElementById("convert-button");

//save the option value
var iTypeValue, rTypeValue;

//1 meter = 3.28 feet <=> 1 foot = 0.30 meter
// 1 meter = 1.09 yard <=> 1 yard = 0.91 meter
// 1 meter = 0.0006 miles <=> 1 mile = 1609.3 meters
// 1 yard = 3 feet <=> 1 foot = 0.33 yard
// 1 yard = 0.0005 miles <=> 1 mile = 1760 yards
// 1 foot = 0.0002 miles <=> 1 mile = 5280 feet

//main function for converting lengths, long list of conditions -> search for the right condition and execute it
convertButton.addEventListener("click", () => {
    iTypeValue = inputType.value;
    rTypeValue = resultType.value;
    
    if (iTypeValue ==="meters" && rTypeValue == "feet") {
        resultField.value = parseFloat(inputField.value * 3.28).toFixed(2);
    }

    else if (iTypeValue ==="meters" && rTypeValue == "meters") {
        resultField.value = parseFloat(inputField.value * 1).toFixed(2);
    }

    else if (iTypeValue ==="meters" && rTypeValue == "yards") {
        resultField.value = parseFloat(inputField.value * 1.09).toFixed(2);
    }

    else if (iTypeValue ==="meters" && rTypeValue == "miles") {
        resultField.value = parseFloat(inputField.value * 0.0006).toFixed(4);
    }

    else if (iTypeValue ==="yards" && rTypeValue == "meters") {
        resultField.value = parseFloat(inputField.value * 0.91).toFixed(2);
    }

    else if (iTypeValue ==="yards" && rTypeValue == "feet") {
        resultField.value = parseFloat(inputField.value * 3).toFixed(2);
    }

    else if (iTypeValue ==="yards" && rTypeValue == "miles") {
        resultField.value = parseFloat(inputField.value * 0.0005).toFixed(4);
    }

    else if (iTypeValue ==="yards" && rTypeValue == "yards") {
        resultField.value = parseFloat(inputField.value * 1).toFixed(2);
    }

    else if (iTypeValue ==="feet" && rTypeValue == "feet") {
        resultField.value = parseFloat(inputField.value * 1).toFixed(2);
    }

    else if (iTypeValue ==="feet" && rTypeValue == "meters") {
        resultField.value = parseFloat(inputField.value * 0.3).toFixed(2);
    }

    else if (iTypeValue ==="feet" && rTypeValue == "yards") {
        resultField.value = parseFloat(inputField.value * 0.33).toFixed(2);
    }

    else if (iTypeValue ==="feet" && rTypeValue == "miles") {
        resultField.value = parseFloat(inputField.value * 0.0002).toFixed(4);
    }

    else if (iTypeValue ==="miles" && rTypeValue == "miles") {
        resultField.value = parseFloat(inputField.value * 1).toFixed(2);
    }

    else if (iTypeValue ==="miles" && rTypeValue == "meters") {
        resultField.value = parseFloat(inputField.value * 1609.3).toFixed(2);
    }

    else if (iTypeValue ==="miles" && rTypeValue == "yards") {
        resultField.value = parseFloat(inputField.value * 1760).toFixed(2);
    }

    else if (iTypeValue ==="miles" && rTypeValue == "feet") {
        resultField.value = parseFloat(inputField.value * 5280).toFixed(2);
    }
})
    


