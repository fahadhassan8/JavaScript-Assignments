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

let sentence = 'Hello there my name is fahad hassan currently i am studying web development in SMIT my mentor is sir ghous';

function deletVowel(sentence){ // parameter diye bgr b kam hojyga
    let vowels = 'aeiouAEIOU';
    let result = "";
    for(let i = 0; i < sentence.length; i++){
        if(!vowels.includes(sentence[i])){
            result += sentence[i];
        }
    }
    return result
}
console.log(deletVowel(sentence))