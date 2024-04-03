// Qustion 01

let mainContent = document.getElementById("main-content");

//Display all childs of main content

console.log(mainContent.children);

let renderElements = document.getElementsByClassName("render");

for (elements of renderElements) {
  console.log(elements.innerHTML);
}

// Fill input value whose element id first-name using javascript

let firstName = document.getElementById("first-name");

firstName.value = "Alex";

// Repeat part iv for id ”last-name” and “email”

let lastName = document.getElementById("last-name");

lastName.value = "Bank";

let email = document.getElementById("email");

email.value = "alexbank@example.com";
