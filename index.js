var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageName = "./images/dice" + randomNumber1 + ".png"

document.getElementById("diceImage1").setAttribute("src", "imageName");

// console.log(randomNumber1); //test: node index.js on Terminal


// alert("Working!");  
//ABOVE LINE: To check that index.js was linked to the dicee.html well.