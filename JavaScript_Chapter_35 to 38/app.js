                        // Chapter 35 to 38

// Question 01

// function currentDate(){
//     var date = new Date();
//     document.write(date)
// }
// currentDate()

// Question 02

// function userName(){
//     var firstName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     var fullName = `Hello ${firstName} ${lastName}`;
//     alert(fullName)
// }
// userName()

// Question 03

let addNum = () =>{
    let num1 = +prompt("Write first Number");
    let num2 = +prompt("Write second Number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 + num2
}

document.write(addNum())

// Question 04 Calculator

let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");
let operator = prompt("Enter Operation","+,-,*,/");
let num_1 = Math.round(num1);
let num_2 = Math.round(num2);

if(operator == "+"){
    let add = (a,b) =>{
        return a + b;
    }
    document.write(`The Sum of Two number ${num1} + ${num2} = ${add(num_1,num_2)}`)
}