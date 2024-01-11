const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/*
basic javascript variable defining - string is Bob
*/
// let myVariable = "Bob";
// myVariable;
// this is a comment



// document.querySelector("html").addEventListener("click", function () 
  // alert("Ouch! Stop poking me!");
// });
// add function when event happens

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/f5d5d9a6f2dd6a44365a770d95e35381.jpg") {
    myImage.setAttribute("src", "images/9eb7a3152c18b9ec987ca250d28eb92e.jpg");
  } else {
    myImage.setAttribute("src", "images/f5d5d9a6f2dd6a44365a770d95e35381.jpg");
  }
};

let myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome, ${storedName} !`;
}

myButton.onclick = () => {
  setUserName();
};

