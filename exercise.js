console.log("exercise.js running...");

const body = document.querySelector("body");

const h1Element = document.createElement("h1");
h1Element.innerText = "Hello from JS";

body.appendChild(h1Element);

const sectionElement = document.createElement("section");
const ulElement = document.createElement("ul");

body.appendChild(sectionElement);
sectionElement.appendChild(ulElement);

for (let i = 0; i < 10; i++) {
    const liElement = document.createElement("li");
    liElement.innerText = `This is the number ${i}`;
    ulElement.appendChild(liElement);
};

const listOfUsers = ["Gavin", "Kumar", "Malú", "Barbi"];

const olElement = document.createElement("ol");
body.appendChild(olElement);

listOfUsers.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.innerText = user;
    olElement.appendChild(liElement);
});

const listOfFruit = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" },
    { name: "Grapes", color: "Purple" },
    { name: "Strawberry", color: "Red" },
    { name: "Watermelon", color: "Green" },
    { name: "Pineapple", color: "Yellow" },
    { name: "Mango", color: "Orange" },
    { name: "Blueberry", color: "Blue" },
    { name: "Kiwi", color: "Green" }
];

const newOlElement = document.createElement("ol");

body.appendChild(newOlElement);

listOfFruit.forEach((eachFruit) => {
    const liElement = document.createElement("li");
    liElement.innerText = `${eachFruit.name} ${eachFruit.color}`;
    newOlElement.appendChild(liElement);
});

const buttonElement = document.createElement("button");
buttonElement.innerText = "Press here, to have fun";

body.appendChild(buttonElement);

buttonElement.onclick = () => {
    console.log("You are clicking the button");
    newOlElement.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
};

// BARBI BONUS. Do it with random RGB "rgb"
// We have rgb(256,256,256)
// I need a string starting with rgb(randomnumber,randomnumber,randomnumber) 