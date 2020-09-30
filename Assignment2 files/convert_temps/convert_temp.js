"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp - 32) * 5 / 9;
const calculateFahrenheit = temp => temp * 9 / 5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	$("#degree_label_1").textContent = label1Text;
	$("#degree_label_2").textContent = label2Text;
	$("#degrees_computed").value = "";
	$("#degrees_entered").value = "";
	$("#message").textContent = "";
}
const clearmessage = () => {
	$("#message").textContent = "";
	$("#degrees_entered").value = "";
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {

	const degrees_entered = parseFloat($("#degrees_entered").value);

	if (isNaN(degrees_entered)) {
		$("#message").textContent = "You must enter a valid number.";
		$("#degrees_entered").value = "";
		$("#degrees_computed").value = "";
	} else {

	if ($('input[id=to_fahrenheit]:checked'))
		{ $("#degrees_computed").value = calculateCelsius(degrees_entered).toFixed(0); }
	else
		{ $("#degrees_computed").value = calculateFahrenheit(degrees_entered).toFixed(0); }

	}
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
	$("#to_celsius").addEventListener("click", toCelsius);
	$("#to_fahrenheit").addEventListener("click", toFahrenheit);
	$("#degrees_entered").addEventListener("click", clearmessage);

	// move focus
	$("#degrees_entered").focus();
});