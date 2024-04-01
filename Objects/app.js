// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> OBJECTS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// QUESTION 01

var itemsArray = [
    {
        name:"Juice",
        price:50,
        quantity:3
    },
    {
        name:"Cookie",
        price:30,
        quantity:9
    },
    {
        name:"Shirt",
        price:880,
        quantity:1
    },
    {
        name:"Pen",
        price:100,
        quantity:2
    }
]
let totalPriceOfAllItems = 0;
for(let i = 0; i < itemsArray.length; i++){
    let totalPriceOfItem = itemsArray[i].price * itemsArray[i].quantity;
    totalPriceOfAllItems += totalPriceOfItem
    console.log(`Total Price of Items ${totalPriceOfItem}`);
}
console.log(`Total Price of All Items ${totalPriceOfAllItems}`);

// QUESTION 02

let userInfo = {
    name: "Fahad Hassan",
    email: "example@example.com",
    password: 123,
    age: 25,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}
                            // FIRST METHOD

if(userInfo.age === 25 && userInfo.country === "Pakistan"){
    console.log("User Country is: Pakistan & User age is 25");
}else{
    console.log("Not Exist")
}
if (userInfo.firstName === "Fahad" && userInfo.lastName === "Hassan"){
    console.log("User First Name is Fahad and Last Name is Hassan");
}else{
    console.log("First Name and Last Name Property does not exist");
}
                            // SECOND METHOD

let agePropertyExist = 'age' in userInfo;
let countryPropertyExist = 'country' in userInfo;
let firstNamePropertyExist = 'firstName' in userInfo;
let lastNamePropertyExist = 'lastName' in userInfo;


console.log('Does "Age" Property Exist in User Information?', agePropertyExist);
console.log("Does 'Country' Property Exist in User Information?", countryPropertyExist);
console.log("Does 'First Name' Property Exist in User Information?", firstNamePropertyExist);
console.log("Does 'Last Name' Property Exist in User Information?", lastNamePropertyExist);

// QUESTION 03

function Person (name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}
let person1 = new Person("Fahad","25","Karachi");
let person2 = new Person("Adeel","21","Karachi");
let person3 = new Person("Zohaib","22","Karachi");

console.log(person1);
console.log(person2);
console.log(person3);

// QUESTION 04  

function Candidate(name, gender, address, education, profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
