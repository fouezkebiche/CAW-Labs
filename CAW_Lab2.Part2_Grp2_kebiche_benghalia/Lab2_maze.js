document.addEventListener("DOMContentLoaded", function() {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var boundaries = document.querySelectorAll(".boundary");
    var maze = document.getElementById("maze");
    var status = document.getElementById("status");
    
    var gameStarted = false;
    var gameWon = false;

    start.addEventListener("mouseover", function() {
        if (!gameStarted) {
            gameStarted = true;
            gameWon = false;
            status.innerText = "Game in progress.";
        }
    });

    end.addEventListener("mouseover", function() {
        if (gameStarted && !gameWon) {
            status.innerText = "You win!!!";
            gameWon = true;
        }
        gameStarted = false;
    });

    maze.addEventListener("mouseleave", function() {
        if (gameStarted && !gameWon) {
            status.innerText = "You lose!!!";
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].classList.add("youlose");
            }
        }
        gameStarted = false;
    });

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function() {
            if (gameStarted && !gameWon) {
                status.innerText = "You lose!!!";
                for (var j = 0; j < boundaries.length; j++) {
                    boundaries[j].classList.add("youlose");
                }
                
            }
            gameStarted = false;
        });
    }

    var restartButton = document.getElementById("restartButton");

    restartButton.addEventListener("click", function() {
        resetGame();
    });

    function resetGame() {
        status.innerText = "Move your mouse over the 'S' to begin.";
        gameStarted = false;
        gameWon = false;

        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.remove("youlose");
        }
    }
});
