function createRandomMove(playersMove){
	const randomNumber = Math.floor(Math.random() * 4 + 1);
	if(randomNumber > 3){
		if(playersMove === 'papier') return 'kamień';
		else if(playersMove === 'kamień') return 'nożyce';
		else return 'papier';
	}
	else {
		if(playersMove === 'papier') return 'nożyce';
		else if(playersMove === 'kamień') return 'papier';
		else return 'kamień';
	}
}

function displayMoves(playersMove, computersMove){
	const playersMoveDiv = document.querySelector("#players-move");
	const computersMoveDiv = document.querySelector("#computers-move");
	playersMoveDiv.innerHTML = playersMove;
	computersMoveDiv.innerHTML = computersMove;
}

function displayResult(playersMove, computersMove){
	const resultDiv = document.querySelector("#result")
	if(playersMove === computersMove) resultDiv.innerHTML = 'Remis';
	else if(playersMove === "papier" && computersMove === "nożyce") resultDiv.innerHTML = 'Przegrałeś';
	else if(playersMove === "kamień" && computersMove === "papier") resultDiv.innerHTML = 'Przegrałeś';
	else if(playersMove === "nożyce" && computersMove === "kamień") resultDiv.innerHTML = 'Przegrałeś';
	else resultDiv.innerHTML = 'Wygrałeś';
}


kamień.addEventListener("click", function(){
	console.log(this.id)
	kamień = document.querySelector("#kamień");
	const randomMove = createRandomMove('kamień');
	displayMoves(this.id, randomMove)
	displayResult(this.id, randomMove)

})

papier.addEventListener("click", function(){
	console.log(this.id)
	papier = document.querySelector("#papier");
	const randomMove = createRandomMove('papier');
	displayMoves(this.id, randomMove)
	displayResult(this.id, randomMove)
})

nożyce.addEventListener("click", function(){
	console.log(this.id)
	nożyce = document.querySelector("#nożyce");
	const randomMove = createRandomMove('nożyce');
	displayMoves(this.id, randomMove)
	displayResult(this.id, randomMove)
})









console.log(kamień);
console.log(papier);
console.log(nożyce);