const dateElement = document.getElementById("date");
const saveElements = document.getElementsByClassName("save");
const contentElements = document.getElementsByClassName("content");

// save reference to important DOM elements
var timeDisplayEl = S("#time-display");
var projectDisplayEl = $("#project-display");
var projectModalEl = $("#project-modal");
var projectFormEl = $("#project-form");
var projectNameInputEl = $("#project-name-input");
var projectTypeInputEl = $("#project-type-input");
var hourlyRateInputEl = $("#hourly-rate-input");
var dueDateInputEl = $("#due-date-input");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ssa");
  timeDisplayEl.text(rightNow);
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  var projectRowEl = $("<tr>");

  var projectNameTdEl = $("<td>").addClass("p-2").text(name);
  var projectTypeTdEl = $("<td>").addClass("p-2").text(type);
  var rateTdEl = $("<td>").addClass("p-2").text(hourlyRate);
  var dueDateTdEl = $("<td>").addClass("p-2").text(dueDate);
  var daysToDate = moment(dueDate, "MM/DD/YYYY").diff(moment(), "days");
  var daysLeftTdEl = $("<td>").addClass("p-2").text(daysToDate);

  var totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);
}
