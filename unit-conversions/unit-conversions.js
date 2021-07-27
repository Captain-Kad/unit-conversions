function convertToMillimeter(centimeter) {
    var result;
    if (centimeter != "") {
        result = (centimeter * 10).toFixed(1);
        document.getElementById("result").innerHTML = [`Your answer is, ${result}mm`];
    }
}

function convertToCentimeter(millimeter) {
    var result;
    if (millimeter != "") {
        result = (millimeter / 10).toFixed(1);
        document.getElementById("result").innerHTML = [`Your answer is, ${result}cm`];
    }
}

function convertToCelsius(fahrenheit) {
    var result;
    if (fahrenheit != "") {
        result = ((fahrenheit - 32) * 5/9).toFixed(1);
        document.getElementById("result").innerHTML = [`Your answer is, ${result}°C`];
    }
}

function convertToFahrenheit(celsius) {
    var result;
    if (celsius != "") {
        result = ((celsius * 9/5) + 32).toFixed(1);
        document.getElementById("result").innerHTML = [`Your answer is, ${result}°F`];
    }
}

function convertToKilometer(meter) {
    var result;
    if (meter != "") {
        result = (meter / 1000).toFixed(1);
        document.getElementById("result").innerHTML = [`Your answer is, ${result}km`];
    }
}

function convertToMeter(kilometer) {
    var result;
    if (kilometer != "") {
        result = (kilometer * 1000).toFixed(1);
        document.getElementById("result").innerHTML = [`Your answer is, ${result}m`];
    }
}

function convertOnChoice() {
    var chosenValue = document.getElementById("unitSelect").value;
    var numericValue = document.getElementById("numInput").value;

    if (numericValue === "") {
        alert("The field cannot be left blank, you must enter a number");
    } else if (chosenValue === "centimeter") {
        convertToMillimeter(numericValue);
    } else if(chosenValue === "millimeter") {
        convertToCentimeter(numericValue);
    } else if(chosenValue === "fahrenheit") {
        convertToCelsius(numericValue);
    } else if(chosenValue === "celsius") {
        convertToFahrenheit(numericValue);
    } else if(chosenValue === "meter") {
        convertToKilometer(numericValue);
    } else {
        convertToMeter(numericValue);
    }
}