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


// Question 02

let formContentNode = document.getElementById('form-content');

console.log('Node Type of element having id form-content', formContentNode.nodeType);

let lastNameNode = document.getElementById('lastName');

console.log('Node Type of element having id lastName', lastNameNode.nodeType);
console.log('Child Node of element having id lastName', lastNameNode.childNodes);

lastNameNode.innerHTML = "Khan";
console.log('Last Name: ',lastNameNode);

let mainContentNode = document.getElementById('main-content');
console.log('First Child of element having id main-content',mainContentNode.firstChild); 
console.log('Last Child of element having id main-content',mainContentNode.lastChild); 

let lastNameNextSibling = lastNameNode.nextSibling;

console.log('Next Siblings of element having id lastName', lastNameNextSibling);

let lastNamePreviousSibling = lastNameNode.previousSibling;

console.log('Previous Siblings of element having id lastName', lastNamePreviousSibling);

let emailNode = document.getElementById("email");
console.log('Node Type of element having id email', emailNode);

let emailParentNode = emailNode.parentNode;
console.log('Parent Node of element having id email',emailParentNode);