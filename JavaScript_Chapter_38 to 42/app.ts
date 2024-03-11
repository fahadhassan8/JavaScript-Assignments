// Question 01

// function power(a,b){
//     return Math.pow(a,b); // a is a base num called sub and b is power called sup
// }
// let result = power(2,3);
// console.log(result);

// let num = 25;
// let sqR = Math.sqrt(num) // squareRoot will be 5
// console.log(sqR)

// Question 02

// function calculateS(a,b,c){
//     return (a + b + c)/2
// }
// function calculateTraingleArea(a,b,c){
//     let S = calculateS(a,b,c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }
// let a = 5;
// let b = 5;
// let c = 6;
// let area = calculateTraingleArea(a,b,c);
// console.log(area);

// Question 03

// function calculateAverage(subject1, subject2, subject3){
//     return (subject1 + subject2 + subject3)/3
// }
// function calculatePercentage(totalMarks, obtainedMarks){
//     return (obtainedMarks / totalMarks) * 100;
// }
// function mainFunction(subject1, subject2, subject3){
//     let average = calculateAverage(subject1, subject2, subject3);
//     let obtainedMarks = subject1 + subject2 + subject3;
//     let totalMarks = 300;
//     let percentage = calculatePercentage(totalMarks, obtainedMarks);
//     console.log("Average: " + average);
//     console.log("Percentage: " + percentage);
// }
// mainFunction(70,50,60)

// Question 04

// let array = ['a','b','c','d','e'];

// function customFunction(array, target){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === target){
//             return i; // if value hogi to return krega
//             break;
//         }
//     }return -1; // agar value nhi milegi to -1 return krega
// }
// console.log(customFunction(array,'c'));
// console.log(customFunction(array,'f'));

// Question 05

// let sentence = 'Hello there my name is fahad hassan currently i am studying web development in SMIT my mentor is sir ghous';

// function deletVowel(sentence){ // parameter diye bgr b kam hojyga
//     let vowels = 'aeiouAEIOU';
//     let result = "";
//     for(let i = 0; i < sentence.length; i++){
//         if(!vowels.includes(sentence[i])){
//             result += sentence[i];
//         }
//     }
//     return result
// }
// console.log(deletVowel(sentence));

// Question 06

// function countSuccessiveVowels(text) {
//     let count = 0;
//     text = text.toLowerCase(); // Convert the text to lowercase to handle case-insensitive matching
//     for (let i = 0; i < text.length - 1; i++) {
//         switch (text[i] + text[i+1]) {
//             case 'aa':
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
//             case 'ea':
//             case 'ee':
//             case 'ei':
//             case 'eo':
//             case 'eu':
//             case 'ia':
//             case 'ie':
//             case 'ii':
//             case 'io':
//             case 'iu':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'oo':
//             case 'ou':
//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//             case 'uu':
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return count;
// }

// // Example usage:
// const text = "Pleases read this application and give me gratuity";
// console.log("Number of occurrences of any two vowels in succession:", countSuccessiveVowels(text));

// Question 07

// let distanceInKm = 150;

// function distanceInMeter(km){
//     return km * 150000
// }
// function distanceInFeet(km){
//     return km * 492126
// }
// function distanceInInches(km){
//     return km * 5,905,515
// }
// function distanceInCentimeters(km){
//     return km * 15000000
// }
// console.log("Distance In Meter:",distanceInMeter(distanceInKm));
// console.log("Distance In Feet:",distanceInFeet(distanceInKm));
// console.log("Distance In Inches:",distanceInInches(distanceInKm));
// console.log("Distance In Centimeters:",distanceInCentimeters(distanceInKm));

// Question 08

// let hoursWorked = 220;
// let standardHours = 208;
// let hourlyRate = 216.346;
// let overtimeRate = 1.5;

// function calculateOvertimePay(hoursWorked){
//     if(hoursWorked <= standardHours){
//         return 0;
//     }
//     else{
//         let overtimeHours = hoursWorked - standardHours;
//         let overtimePay = overtimeHours * (hourlyRate * overtimeRate);
//         return Math.round(overtimePay);
//     }
// }
// let overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Overtime pay: Rs, ${overtimePay}/=`);

// Question 09

let amountInHundreds = 4;

function calculateCurrencyNote(amountInHundreds){
    //converting input amount to actual amount
    let amount = amountInHundreds * 100;

    //Initializee Variable to store the count of each denomination
    
    let note100 = 0;
    let note50 = 0;
    let note10 = 0;

    //Calculate the count of each denominaation
    note100 = Math.floor(amount / 100);// Number of 100 rupee notes
    
    amount %= 100; // Update the amount after giving out 100 rupee notes
    
    note50 = Math.floor(amount / 50);// Number of 50 rupee notes

    amount %= 50; // Update the amount after giving out 50 rupee notes
    
    note10 = Math.floor(amount / 10);// Number of 10 rupee notes
    
    console.log(`Number of 100 rupees note: ${note100}`);
    console.log(`Number of 50 rupees note: ${note50}`);
    console.log(`Number of 10 rupees note: ${note10}`);
}
calculateCurrencyNote(amountInHundreds)


