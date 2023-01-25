//3200 JAVASCRIPT NOTES
console.log("Hello world!");
var x = 5;
var Responses = [
  "Certainly, yes. sign: Sun",
  "Unsure, ask again. sign: Moon",
  "Ask again later. sign: stars",
  "It's possible. sign: Mercury",
  "No way. sign: Earth",
];

var h1element = document.querySelector("#my-heading");
console.log("my h1 element", h1element);

var askButton = document.querySelector("#ask-button");
console.log("my button element", askButton);

askButton.onclick = function () {
  console.log("my button was clicked");
  //h1element.innerHTML = "I'm different now.";
  //h1element.style.color = "#FF0000";
  //h1element.style.backgroundColor = "#0000FF";
  var myInput = document.querySelector("#enter-text");
  console.log("Input element", myInput);
  console.log("input element text:", myInput.value);

  var myList = document.querySelector("#my-list");
  console.log("my list element:", myList);

  var newItem = document.createElement("li");
  newItem.innerHTML = myInput.value; //makes value appear in list
  myList.appendChild(newItem);
  myInput.value = ""; //value in textbox

  var randomIndex = Responses[Math.floor(Math.random() * Responses.length)];
  // index my array of friends
  //var randomResponse = Responses[randomIndex];
  // query the span
  var randomSpan = document.querySelector("#random-response");
  // assign inner html of span to the friend name string
  randomSpan.innerHTML = randomIndex;
};
