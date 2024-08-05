document.getElementById("rollButton").addEventListener("click", function() {
    // Generate random number for the left die (Player 1)
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imageName1 = "./images/dice" + randomNumber1 + ".png";
    document.getElementById("diceImage1").setAttribute("src", imageName1);
  
    // Generate random number for the right die (Player 2)
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imageName2 = "./images/dice" + randomNumber2 + ".png";
    document.getElementById("diceImage2").setAttribute("src", imageName2);
  
    // Determine and display the winner
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "🟰 Draw! 🟰";
    }
  });




// console.log(randomNumber1); //test: node index.js on Terminal


// alert("Working!");  
//ABOVE LINE: To check that index.js was linked to the dicee.html well.