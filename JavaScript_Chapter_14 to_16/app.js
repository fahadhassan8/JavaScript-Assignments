// Chapter 14-16

// Question 01;

// var students = [];

// Question 02;
// var moreStudents = ("Fahad")
// var students = moreStudents("Fahad");
// console.log(students);

// Question 03;

// var students = ["Adeel", "Fahad", "Ghous", "Saad"];

// Question 04;

// var number = [1, 2, 3, 4, 5];

// Question 05;

// var Boolean = [true, false];

// Question 06;

// var mixedArr = [22, true, "Sir Ghous"];

// Question 07;

// var pakEdu = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];

// Question 08;

// var student = ["Michael", "John", "Tony"];
// var marksObtained = [320, 230, 480];
// var totalMarks = 500;

// Student 0

// document.write(
    // " marksObtained 320 " +
    //   student[0] + " is " +
    //   totalMarks[0] +
    // " Percentage:" +
    //   (marksObtained[0] / 500) * 100
    // " % "
// )

// Student 1

// document.write(
    // " marksObtained 230 "
    //   student[1] + " is " +
    //   totalMarks[1] +
    // " Percentage: " +
    //   (marksObtained[1] / 500) * 100
    // " % "
// )

// Student 3

// document.write(
    // " marksObtained 480 " +
    //   stuent[2] + " is " +
    //   totalMarks[2] +
    // " Percentage: " +
    //   (marksObtained[2] / 500) * 100
    // " % "
// )

// Question 09

// A.
// var color = ["Black", "Blue"];
// var returnValue = color.unshift();
// alert(color);

// color.unshift(prompt("Write a color you want to add in the beginning", "Indigo"));
// alert(color);
// console.log(returnValue);

// B.
// var color = ["Red"];
// var returnValue = color.push();
// alert(color);

// color.push(prompt("Enter a color name you want to add \nin the end", "Purple"));
// alert(color);
// console.log(returnValue)

// C
// var color = ["Yellow","Magenta"];
// var returnValue = color.unshift();
// alert(color);

// color.unshift(prompt("Enter two color name you want to add \nin the beginning", "Red",));
// color.unshift();
// alert(color);
// console.log(returnValue);

// D
// var color = ["Yellow","Magenta"];
// alert(color);

// color.shift();
// alert(color.shift());

// E

// var color = ["Orange","Pink"];
// alert(color);

// color.pop();
// alert(color.pop());

// F

// var color = ["Red", "Black", "White"];
// var userInput = prompt("At which index do you want to add a color name")

// color.splice(0,0, "Green");
// alert(color);

// G

// var color = ["Red", "Green", "Black"];

// var userInput = prompt("At which index do you want to delete a color?", 1);

// color.splice(1,1);

// alert(color);

// Question 10

// var studentMarks = [320, 230, 480, 120];

// studentMarks.sort();

// alert(studentMarks);    

// Question 11

// var cityList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// alert(cityList);

// cityList.slice(2, 4);

// var selectedCities = cityList.slice(2, 4);

// alert(selectedCities);

// Question 12

// var arr = ["This", "is", "my", "cat"];

// alert(arr);

// Convert Array to String join method:

// var newArr = arr.join(" ");

// alert(newArr);

// Question 13

// FIFO SYSTEM

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor", "Earpods"];

// console.log(devices);

// var returnValue = devices.shift();

// console.log(devices);

// console.log(returnValue);

// var returnValue = devices.shift();

// console.log(devices);

// console.log(returnValue);

// var returnValue = devices.shift();

// console.log(devices);

// console.log(returnValue);

// var returnValue = devices.shift();

// console.log(devices);

// console.log(returnValue);

// var returnValue = devices.shift();

// console.log(devices);

// console.log(returnValue);

// Question 14

// LIFO SYSTEM

// var devices = ["monitor", "printer", "mouse", "keyboard"];

// console.log(devices);

// var returnValue = devices.pop()

// console.log(devices);

// console.log(returnValue);

// var returnValue = devices.pop()

// console.log(devices);

// console.log(returnValue);

// var returnValue = devices.pop()

// console.log(devices);

// console.log(returnValue);

// var returnValue = devices.pop()

// console.log(devices);

// console.log(returnValue);

// Question 15

// var phoneManufacturer = [
//     "Apple",
//     "Samsung",
//     "Motorola",
//     "Nokia",
//     "Sony",
//     "Haier"
// ];

// document.write("Select a Phone Manufacturer:");
// document.write(
//   "<select>" + "<option>" + phoneManufacturers[0] + "</option>" + "</select>"
// );