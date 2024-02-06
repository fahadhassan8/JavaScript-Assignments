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

// let addNum = () =>{
//     let num1 = +prompt("Write first Number");
//     let num2 = +prompt("Write second Number");
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);
//     return num1 + num2
// }

// document.write(addNum())

// Question 04 Calculator

// let num1 = +prompt("Enter First Number");
// let num2 = +prompt("Enter Second Number");
// let operator = prompt("Enter Operation","+,-,*,/");
// let num_1 = Math.round(num1);
// let num_2 = Math.round(num2);

// if(operator == "+"){
//     let add = (a,b) =>{
//         return a + b;
//     }
//     document.write(`The Sum of Two Number ${num1} + ${num2} = ${add(num_1,num_2)}`)
// }
// else if(operator == "-"){
//     let sub = (a,b) =>{
//         return a - b
//     }
//     document.write(`Subtraction of Two Number ${num1} - ${num2} = ${sub(num_1,num_2)}`);
// }
// else if(operator == "/"){
//     let div = (a,b) =>{
//         return a/b
//     }
//     document.write(`Division of Two Number ${num1} / ${num2} = ${div(num_1,num_2)}`);
// }
// else if(operator == "*"){
//     let mul = (a,b) =>{
//         return a * b
//     }
//     document.write(`Multiplication of Two Number ${num1} * ${num2} = ${mul(num_1,num_2)}`);
// }
// else{
//     alert(`Should select any of these operators +,-,/,*`)
// }

// Question 05

// let sqNum = (a) =>{
//     return a * a
// }
// document.write(sqNum(2));

// var dayOfWk = prompt("enter day")

// switch(dayOfWk) {
//      case "Sat" :
//      alert("Whoopee");
//      break;
//      case "Sun" :
//      alert("Whoopee");
//      break;
//      case "Fri" :
//      alert("TGIF!");
//      break;
//      default :
//      alert("Shoot me now!");
//      }

// Question 06

// let num1 = +prompt("Enter First Number");
// let num2 = +prompt("Enter Last Number");
// num1 = Number(num1);
// num2 = Number(num2);

// let displayCount = (start,end) =>{
//      document.write("The First Number ", start, "</br>");
//      document.write("The Last Number ", end, "</br>");
//      for(i = start; i <= end; i++){
//           document.write(i, " ");
//      }
// }
// displayCount(num1,num2);

// Question 07

// let width = +prompt("Calculate an area of a rectangle","Width = 20");
// let height = +prompt("Calculate an area of a rectangle","Height = 30");
// width = Number(width);
// height = Number(height);

// let areaOfRec = (w,h) => {
//      let area = width * height
//      document.write(`Width of a rectangle is = ${w} <br> `);
//      document.write(`Height of a rectangle is = ${h} <br> `);
//      document.write(`Area of a rectangle is = ${area} <br>`);
// }
// areaOfRec(width,height);
