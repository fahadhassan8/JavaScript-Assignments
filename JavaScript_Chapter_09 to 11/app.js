// Chapter 09 to 11

// Question 01

// var city = "Karachi";
// var user = prompt("Enter your City Name");

// if (city === user ){
//     alert("Welcome to City of Lights");
// }

// Question 02

// var gender = prompt("Enter your gender");

// if(gender === "Male"){
//     alert("Good Morning Sir");
// }
// if(gender === "Female"){
//     alert("Good Morning Ma'am");
// }

// Question 03

// var signalColor = prompt("What is traffic Signal color?", "Red");

// if(signalColor === "Red"){
//     alert("Must Stop");
// }
// if(signalColor === "Yellow"){
//     alert("Ready to Move");
// }
// if(signalColor === "Green"){
//     alert("Move Now");
// }

// Question 04

// var remainingFuel = prompt("How many litre of fuel reamining in your vehicle", "litres");

// if(remainingFuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }

// Question 05

// var a = 4;
// if(++a === 5){
    // alert("given condition for variable a is true");
// }

// var b = 82;
// if(b++ === 83){
    // alert("given condition for variable b is false")
// }

// var c = 12;
// if(c++ === 13){
    // alert("given condition 1 is false");
// }
// if(c === 13){
    // alert("condition 2 is true");
// }
// if(++c < 14){
    // alert("condition 3 is false");
// }
// if(c === 14){
    // alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// if (true) {
//   alert("True");
// }

// if (false) {
//   alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Question 06

// var english = prompt("Enter your English obatined marks");
// var maths = prompt("Enter your Maths obtained marks");
// var chemistry = prompt("Enter your Chemistry obtained marks");
// var totalMarks = 300;
// var totalObtainedMarks = (english + maths + chemistry);
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("</br> Marks Obtained : " + totalObtainedMarks);
// document.write("</br> Total Marks : " + total Marks);
// document.write("</br> Percentage : " + percentage);

// if(percentage >= 80){
//     document.write("</br> Grade: A-One");
//     document.write("</br> Remarks: Excellent");
// }else if(percentage >= 70){
//     document.write("</br> Grade: A");
//     document.write("</br> Remarks: Good");
// }else if(percentage >= 60){
    // doocument.write("</br> Grade: B");
    // document.write("</br> Remarks: You need to improve");
// }else if(percentage < 60){
    // document.write("</br> Grade: Fail");
    // document.write("</br> Remarks: Sorry");
// }

// Question 7

// var guessNum = prompt("Guess a lucky number");
// if (guessNum == 8){
//     document.write("Bingo! Correct Answer");
// }else if (guessNum == 9){
//     document.write("Close enough to the correct answer");
// }else if (guessNum == 7){
//     document.write("Close enough to the correct answer");
// }else{
//     document.write("Keep trying...");
// }

// Question 08

// var givenNum = prompt("Enter a number");
// if(givenNum % 3){
//     alert("Correct");
// }else{
//     alert("Can not divisible")
// }

// Question 09

// var num = prompt("Enter a number");

// if(num % 2 === 0){
//     console.log("Even Number");
// }else{
//     console.log("Odd Number");
// }

// Question 10

// var temp = prompt("Input Weather temperature");

// if(temp > 40){
//     console.log("Its too hot outside");
// }else if(temp > 30){
//     console.log("The Weather is normal Today");
// }else if(temp > 20){
//     console.log("Today's Weather is so Cool.");
// }else if(temp > 10){
//     console.log("OMG! Today's Weather is so Cool.");
// }else{
//     console.log("Input Correctly");
// }

// Question 11

// var firstNum = prompt("Please! Enter a first number");
// var secondNum = prompt("Please! Enter a second number");
// var operationSign = ("+,-,*,/,%");
// var result;

// if (operationSign === "+"){
//     result = firstNum + secondNum;
//     document.write("The calculated value is " + result);
// } else if ( operationSign === "-"){
//     result = firstNum - secondNum;
//     document.write("The calculated value is " + result);
// } else if ( operationSign === "*"){
//     result = firstNum * secondNum;
//     document.write("The calculated value is " + result);
// } else if ( operationSign === "/"){
//     result = firstNum / secondNum;
//     document.write("The calculated value is " + result);
// } else if ( operationSign === "%"){
//     result = firstNum % secondNum;
//     document.write("The calculated value is " + result);
// } else{
//     document.write("Please input the right value here");
// }