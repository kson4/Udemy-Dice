function displayDice() {
    diceRoll1 = Math.floor(Math.random() * 6) + 1
    img = "images/dice" + diceRoll1 + ".png";
    document.querySelector(".img1").src = img;

    diceRoll2 = Math.floor(Math.random() * 6) + 1
    img = "images/dice" + diceRoll2 + ".png";
    document.querySelector(".img2").src = img;

    if (diceRoll1 > diceRoll2) {
        return 1;
    }
        
    else {
        return 2;
    }
        
}

function displayWinner(winner) {
    if (winner == 1)
        document.querySelector("h1").innerHTML = "<i class=\"fa-solid fa-flag\"></i> Player 1 Wins!";
    else
        document.querySelector("h1").innerHTML = "Player 2 Wins! <i class=\"fa-solid fa-flag\"></i>";
}

winner = displayDice();
console.log(winner);
displayWinner(winner);