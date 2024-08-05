var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageName = "./images/dice" + randomNumber1 + ".png"
var imageName2 = "./images/dice" + randomNumber2 + ".png"

document.getElementById("diceImage1").setAttribute("src", imageName);

document.getElementById("diceImage2").setAttribute("src", imageName2);

// console.log(randomNumber1); //test: node index.js on Terminal


// alert("Working!");  
//ABOVE LINE: To check that index.js was linked to the dicee.html well.