// CHAPTER 21 to 25

// Question 01

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName + " " + lastName;

// alert("Welcome Sir/Ma'am\n" + fullName);

// Question 02

// var userInput = prompt("Name your favourite Mobile Phone Model");

// console.log("My Favourite Phone is: " + userInput);
// console.log("Length of String: " + userInput.length);

// Question 03

// var str = "Pakistani";

// console.log("String:",str);
// console.log("index of 'n':",str.indexOf("n"));

// Question 04

// var str = "Hello World";

// console.log("String:"str);
// console.log("Last index of 'l':",str.lastIndexOf("l"));

// Question 05

// var str = "Pakistani";

// console.log("String:",str);
// console.log("Character at index 3:",str[3]);
// console.log("Character at index 3:",str.charAt(3));

// Question 06

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName + " " + lastName;

// alert("Welcome Sir/Ma'am\n" + firstName.concat(" ",lastName));

// Question 07

// var city = "Hyderabad";
// var find = "Hyder";
// var replace = "Islam";

// console.log("City:" , city);
// console.log("After replacement:" , city.replace(find , replace));

// Question 08

// var message = "\"Ali and Sami are best friends. They play Cricket and Football together.\"";
// var find = "and";
// var replace = "&";

// console.log("Message:",message);
// console.log("After replacement:", message.replaceAll(find,replace));

// Question 09

/* A- Number to String */

// var value1 = 472;
// console.log("\"Value:\"",num);
// console.log("\"Data Type:\"", typeof num.toString());

// B- String to Number

// var value2 = "472";
// console.log("Value",value2);
// console.log("\"Data Type:\"",  typeof Number(value2));

// Question 10

// var userInput = prompt("Please Enter a dry fruits name","peanuts");
// console.log(userInput.toLocaleUpperCase());

// Question 11

// var userInput = prompt("Enter a word");

// var userOutput = userInput.slice(0,1).toLocaleUpperCase() + userInput.slice(1);

// userInput = userOutput;

// console.log(userInput);
// OR
// var userInput = prompt("Enter a word");

// console.log("User Input: " + userInput);
// console.log("Title Case: " + userInput.charAt(0).toLocaleUpperCase() + userInput.slice(1));

// Question 12

// var num = 35.36

// console.log("Number: " + num);
// console.log("Result: " + num.toString().replace("." , ''));

// Question 13

// var userName = prompt("Enter your name");
// var specialSymbol = ["@",",",".","!"];
// var flag = false;

// for(i = 0; i < specialSymbol.length; i++){
//    if(userName.indexOf(specialSymbol[i])!== -1 ){
//     flag = true
//    }
// }
// if(flag){
//     alert("Enter a valid username");
// }
// else{
//     console.log("Welcome Sir/Ma'am\n",userName)
// }

// Question 14

// var arr = ["cake","apple pie","cookie","chips","patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am").toLowerCase();
// var flag = false;
// var index;

// if(userInput !== ""){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] === userInput ){
//             flag = true;
//             break
//             index = i;
//         }
//     }

// if(flag){
//     console.log(userInput,"is available at index",index,"in our bakery")
// }else{
//     console.log(userInput, "is not available in our bakery");
// }

// }else{
//     alert("Input should not be empty")
// }

// Question 15

var userInput = prompt("Enter your Password");
var arrNum = [0,1,2,3,4,5,6,7,8,9];
console.log(arrNum.indexOf(userInput));


// Question 16

// var university = "University of Karachi";
// var university = university.split("")
// for(var i=0; i<university.length; i++){
//     console.log(university[i])
// }

// Question 17

// userInput = "Pakistan";
// console.log("User Input: ", "Pakistan");
// console.log(userInput[userInput.length -1]);

// var email = "fahad hassan";
// var splitedEmail = email.split(" ");
// console.log(splitedEmail);
// var fullName = `${splitedEmail[0].slice(0,1).toUpperCase() + splitedEmail[0].slice(1)} ${splitedEmail[1].slice(0,1).toUpperCase() + splitedEmail[1].slice(1)}`
// console.log(fullName)

// var splittedEmail = email.split(" ");
// var firstName = splittedEmail[0].toUpperCase();
// var lastName = splittedEmail[1].toUpperCase();
// console.log("This is First name: " + firstName + " This is Last Name: " + lastName);
// console.log(splittedEmail);

                                            // CHAPTER 25 to 30

// Question 01

// var userInput = 3.45214;

//  console.log("Number: " + Number(userInput));
//  console.log("Round Off: " + Math.round(userInput));
//  console.log("Floor: " + Math.floor(userInput));
//  console.log("Ceil :" + Math.ceil(userInput));

// Question 02

// var userInput = -2.673;

//  console.log("Number: " + Number(userInput));
//  console.log("Round Off: " + Math.round(userInput));
//  console.log("Floor: " + Math.floor(userInput));
//  console.log("Ceil :" + Math.ceil(userInput));

// Question 03

// var num = -4;

// console.log("The absolute value of -4 is: " + Math.abs(num));
// document.write("The absolute Value of -4 is " + Math.abs(num) + "</br>");

// Question 04

// var random = (Math.ceil(Math.random() * 6));

// document.write("Random Dice Value:" + " " + random + "</br>");

// Question 05

// var random = Math.ceil(Math.random() * 2);

// if(random === 2){
//     document.write(random + " Random Coin Value: Heads" + "</br>");
// }else{
//     document.write(random + " Random Coin Value: Tails" + "</br>");
// }

// Question 06

// var random = Math.ceil(Math.random() * 100);

// document.write("Random number between 1 and 100: " + random);

// Question 07

// var userWeight = +prompt("Enter your weight in kilograms");

// console.log("Your weight is " + userWeight + "kg");

// Question 08

// var secretNum = Math.ceil(Math.random() * 10);
// var userNum = +prompt("Enter a number between 1 to 10");

// if(userNum !== +""){
//     if(userNum === secretNum){
//         alert("Congratulations your number matches with secret number");
//     }else{
//         alert("try again");
//     }
// }else{
//     alert("Input should not be empty")
// }