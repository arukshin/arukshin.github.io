const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/*
basic javascript variable defining - string is Bob
*/
// let myVariable = "Bob";
// myVariable;
// this is a comment

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
// checks if ice cream is chocolate, if it is say you love chocolate ice cream


// define own function
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
// add function when event happens

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/Users/arukshin/Desktop/Data Science/2nd year/Information Presentation/web-projects/html-test/images/2ec1ebab8e569af274eaa835f91d0e72.jpg") {
    myImage.setAttribute("src", "/Users/arukshin/Desktop/Data Science/2nd year/Information Presentation/web-projects/html-test/images/9eb7a3152c18b9ec987ca250d28eb92e.jpg");
  } else {
    myImage.setAttribute("src", "/Users/arukshin/Desktop/Data Science/2nd year/Information Presentation/web-projects/html-test/images/2ec1ebab8e569af274eaa835f91d0e72.jpgg");
  }
};

let myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

