let x = NaN;
let y = NaN;
let round = 1;
let scoreJ = 0;
let scoreBot = 0;
let scoreRoundJ = 0;
let scoreRoundBot = 0;
let message = document.querySelector(".annonce");
let resultJ = document.querySelector(".scoreJoueur > div");
let resultBot = document.querySelector(".scoreIA > div");
let roundJ = document.querySelector(".roundCountJ");
let roundBot = document.querySelector(".roundCountIA");
let roundNumber = document.querySelector(".scoreboardTitle")


function myFunction(Cartes) {
	x = Cartes.id;
	y = Math.floor(Math.random()*3);

	
    if(x === "Ciseau") {    // Si le joueur a choisi "ciseau"
    	if(y === 0) {	// Si l'IA a choisi "ciseau"
    		message.innerHTML = "Match nul!";
    	}
    	else if(y === 1) {	//Si l'IA a choisi "feuille"
    		message.innerHTML = "Le joueur gagne!";
    		scoreJ += 1;
    	}
    	else {				//Si l'IA a choisi "pierre"
    		message.innerHTML = "L'IA gagne!";
    		scoreBot += 1;
    	}
    }
    else if(x === "Pierre") {    // Si le joueur a choisi "pierre"
    	if(y === 0) {	
    		message.innerHTML = "Le joueur gagne!";
    		scoreJ += 1;
    	}
    	else if(y === 1) {
    		message.innerHTML = "L'IA gagne!";
    		scoreBot += 1;
    	}
    	else {
    		message.innerHTML = "Match nul!";
    	}
    }
    else {    // Si le joueur a choisi "feuille"
    	if(y === 0) {	
    		message.innerHTML = "L'IA gagne!";
    		scoreBot += 1;
    	}
    	else if(y === 1) {
    		message.innerHTML = "Match nul!";
    	}
    	else {
    		message.innerHTML = "Le joueur gagne";
    		scoreJ += 1;
    	}
    }
    resultJ.innerHTML = scoreJ;
    resultBot.innerHTML = scoreBot;
	
	if (scoreJ === 3 || scoreBot === 3) {
		if(scoreJ === 3) {
			message.innerHTML = "Le joueur remporte la partie!!";
			scoreRoundJ += 1;
			roundJ.innerHTML = "Round gagné: " + scoreRoundJ;
		}
		else {
			message.innerHTML = "L'IA remporte la partie!!";
			scoreRoundBot += 1;
			roundBot.innerHTML = "Round gagné: " + scoreRoundBot;
		}
		scoreJ = 0;
		scoreBot = 0;
        round += 1;
        roundNumber.innerHTML = "ROUND " + round;
	}

}

function functionReset() {
	scoreJ = 0;
	scoreBot = 0;
	scoreRoundJ = 0;
	scoreRoundBot = 0;
	message.innerHTML = "Faîtes votre choix!";
	resultJ.innerHTML = scoreJ;
    resultBot.innerHTML = scoreBot;
	roundJ.innerHTML = "Round gagné: " + scoreRoundJ;
	roundBot.innerHTML = "Round gagné: " + scoreRoundBot;
}

// Le chrono

let timer = document.querySelector("#demo");
        let t = 5;

function countdown() {
    if (t >= 0) {
        timer.innerHTML = "0" + t;
        t -= 1;
    }

    else {
        t = 5;
    }
}