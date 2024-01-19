// CHAPTER 31 TO 34

// Question 01

// let date = new Date();
// console.log(date);

// Question 02

// let monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let month = new Date();
// let currentMonth = monthNames[month.getMonth()];
// var abc = "Current month: ";
// var sum = abc + currentMonth;
// alert(sum);

// Question 03

// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = new Date();
// let today = dayNames[day.getDay()];
// var abc = "Today is ";
// var sum = abc + today;
// alert(sum);

// Question 04

// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// let day = new Date();

// if (dayNames == "Sun" || dayNames == "Sat") {
//   document.write("Its Fun Day" + "</br>");
// } else {
//   document.write("This is: " + day);
// }

// Question 05

// 01
// let day = new Date();
// let fifteen = day.getDay();
// if (fifteen <= 15) {
//   console.log("First fifteen days of month");
// } else {
//   console.log("Last days of month");
// }

// 02 WAY
// let day = new Date();
// let fifteen = day.getDay();
// let userInput = +prompt("enter day in num");

// if (fifteen <= 15 && userInput <= 15) {
//   console.log("First Fifteen days of month");
// } else if (userInput > 15 && userInput <= 31) {
//   console.log("Last days of month");
// } else {
//   console.log("Input Correct Number");
// }

// Question 06

// let date = new Date();

// document.write("Current Date: " + date + "</br>");
// document.write(
//   "Elapsed in milliseconds since January 1, 1970: " + date.getTime() + "</br>"
// );
// document.write(
//   "Elapsed in milliseconds since January 1, 1970: " +
//     date.getTime() / (1000 * 60) +
//     "</br>"
// );

// Question 07

// var getTime = new Date().getHours();

// if (getTime > 12) {
//   document.write("Its PM");
// } else document.write("Its AM");

// Question 08

// let laterDate = new Date("December, 31 2020");
// document.write("Later date: " + laterDate);

// Question 09

// let ramadanDate = new Date("June, 18 2015");
// let today = new Date();
// let diff = today - ramadanDate;

// let passedDays = Math.round(diff / (1000 * 60 * 60 * 24));

// document.write(passedDays + " days have been passed since 1st Ramadan, 2015");

// Question 10

// let refDate = new Date("Dec, 05 2015");
// let beginningOf2015 = new Date("01/01/2015");
// let diff = refDate - beginningOf2015;
// let passedSec = diff / 1000;

// document.write(
//   "</br>" + passedSec + " seconds had passed since beginning of 2023"
// );

// Question 11

// var currentDate = new Date();
// var beforeDate = currentDate.getHours();
// currentDate.setHours(beforeDate - 1);

// document.write("</br>" + "Current Date: " + new Date());
// document.write("</br>" + "1 hour ago, it was : " + currentDate);

// Question 12

// var currentDate = new Date();
// var before100Years = new Date();

// before100Years.setFullYear(before100Years.getFullYear() - 100);

// document.write("</br>" + "Current Date: " + currentDate);
// document.write("</br>" + "100 years back its: " + before100Years);

// Question 13

// let dob = new Date(prompt("Enter your Birth Year", "1998")).getFullYear();
// let currentDate = new Date().getFullYear();
// let diff = currentDate - dob;

// document.write("</br>" + "Your age is " + diff);
// document.write("</br>" + "Your birth year is " + dob);

// Question 14

// let monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let customerName = "Fahad Hassan";
// let currentMonth = monthNames[new Date().getMonth()];
// let numOfUnits = 410;
// let chargesPerUnit = 16;
// let netAmount = numOfUnits * chargesPerUnit;
// let lateCharge = 350;
// let grossAmount = netAmount + lateCharge;
// console.log(grossAmount);

// document.write("</br>" + "Customer Name: " + customerName);
// document.write("</br>" + "Month: " + currentMonth);
// document.write("</br>" + "Number of units: " + numOfUnits);
// document.write("</br>" + "Charges per unit: " + chargesPerUnit);
// document.write("</br>");
// document.write("</br>" + "Net Amount Payable (within Due Date): " + netAmount);
// document.write("</br>" + "Late payment surcharge: " + lateCharge);
// document.write(
//   "</br>" + "Gross Amount Payable (after Due Date): " + grossAmount
// );
