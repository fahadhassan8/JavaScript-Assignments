// Qustion 01

let mainContent = document.getElementById('main-content');
//Display all child elements
console.log(mainContent.children);
let render = document.getElementsByClassName('render');
for(let elements of render){
    console.log(elements.innerHTML)
}
let firstName = document.getElementById('first-name');

firstName.value = "Alex";

let lastName = document.getElementById('last-name');

lastName.value = "Bank";

let email = document.getElementById('email');

email.value = "alexbank@example.com";