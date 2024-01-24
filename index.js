console.log("My index.js is working");

let liElements = document.getElementsByClassName("li-element");

console.log(liElements);

// THIS IS NOT DRY, Those elements are an array
liElements[0].style.backgroundColor = "purple";
liElements[1].style.backgroundColor = "purple";
liElements[2].style.backgroundColor = "purple";

const newArray = []

for (let i = 0; i < liElements.length; i++) {
    const element = liElements[i];
    newArray.push(element) // we can create a new array if we want to use array methods
    element.style.backgroundColor = "red";
}

console.log(newArray);

// now we can use array methods
newArray.forEach((element) => {
    element.style.backgroundColor = "yellow";
})

// Spread operator
// To create a new array we can use a spread operator

const arraySpreadOperator = [...liElements];

console.log(`THIS ARE THE LI ELEMENTS IN THE SPREAD OPERATOR ARRAY: `, arraySpreadOperator);

const exampleArray = [2, 3, 43, 234];

// I want to create an exact copy of exampleArray and add some stuff
const copyOfExample = [...exampleArray, 432, 5325223, 66]
console.log("Copy of example: ", copyOfExample);

// can we use this to concatenate a bunch of arrays?
const array1 = [3, 4, 23, 3255]
const array2 = ["jsesad", "sdadsa", 3424, false]
const array3 = [true, false, "bla bla", { hello: "world" }]

// YES WE CAN, THIS IS AMAZING!!!
const newArrayOfCopies = [...array1, ...array2, ...array3]

console.log(newArrayOfCopies);

// ACCESSING BY TAG NAME
const h2Elements = document.getElementsByTagName("h2");

console.log(h2Elements);

const h2ElementsArray = [...h2Elements]

h2ElementsArray.forEach((element, index) => element.innerText = `New section ${index}`);

// QUERY SELECTORS
const sectionElement = document.querySelector("section") // is targeting the first element matching the selector
sectionElement.style.backgroundColor = "brown"
console.log(sectionElement);

const paragraphElements = document.querySelectorAll("p")

console.log(paragraphElements);

paragraphElements.forEach((element) => {
    element.innerText = "this is the new text"  // Node list works for things like innerText but not styles
    console.log(element.className)
    element.className = "hellooooo red" // we can change the class
})

// Working with classes
const h1Element = document.querySelector("h1")

console.log(h1Element.classList); // we get a list (array like) with all the classes
h1Element.classList.add("new-class")
h1Element.classList.remove("red")

console.log("Height of h1", h1Element.clientHeight);
console.log("Width of h1", h1Element.clientWidth);

console.log("Attribute: ", h1Element.attributes);

// SET ATTRIBUTE

// This is super usefull for images, for example

document.querySelector("#my-image")
// we can also do
const imgElement = document.getElementById("my-image");

imgElement.setAttribute("src", "https://play-lh.googleusercontent.com/phUhJzNvyZTpbUhQmN3oaj0bHL0pQ_tOeBLjlF_l9z8qK7zogZbYO0ttd3jTGTHdAQ")
imgElement.setAttribute("alt", "image of a cute cat made by an AI")

const firstSectionElement = document.querySelector("section");

// Barbi wants to add a new image, we are going to create the element with js
const newImageElement = document.createElement("img");
newImageElement.setAttribute("src", "https://worldanimalfoundation.org/wp-content/uploads/2023/09/Cute-dogs.jpg")
newImageElement.setAttribute("alt", "image of two puppies")

newImageElement.style.width = "300px"

firstSectionElement.appendChild(newImageElement) // the element is not gonna be there until we append it somewhere

// firstSectionElement.removeChild(newImageElement) this will delete the element

const newH3Element = document.createElement("h3")

newH3Element.innerText = "This is the new title";

document.querySelector("body").appendChild(newH3Element)

// when we want to add it in another place we can use the .insertBefore()
document.querySelector("body").insertBefore(newH3Element, h1Element)
