"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const displayResults = () => {
	var total = 0;
	var average = 0;

	for (var i = 0; i < scores.length; i++) total += scores[i];

	average = total / scores.length;
	var highscore = Math.max.apply(null,scores);

	$("#results").innerHTML = "Average score = " + average + '<br/>' + "High Score = " + highscore;

};
const displayScores = () => {
	
}

const addScore = () => {
	// get user entries
	const name = $("#name").value;
	const score = parseInt($("#score").value);
	let isValid = true;

	// check entries for validity
	if (name == "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}

	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}

	if (isValid) {
		names[names.length] = name;
		scores[scores.length] = score;
		$("#name").value = "";
		$("#score").value = "";
	}
	$("#name").focus();
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});