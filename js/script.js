function createRandomMove(){
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	if(randomNumber === 1) return 'kamień';
	else if(randomNumber === 2) return 'nożyce';
	else if(randomNumber === 3) return 'papier';
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




const kamień = document.querySelector("#kamień");
const papier = document.querySelector("#papier");
const nożyce = document.querySelector("#nożyce");



kamień.addEventListener("click", function(){
	console.log(this.id)
	const randomMove = createRandomMove();
	displayMoves(this.id, randomMove)
	displayResult(this.id, randomMove)

})

papier.addEventListener("click", function(){
	console.log(this.id)
	const randomMove = createRandomMove();
	displayMoves(this.id, randomMove)
	displayResult(this.id, randomMove)
})

nożyce.addEventListener("click", function(){
	console.log(this.id)
	const randomMove = createRandomMove();
	displayMoves(this.id, randomMove)
	displayResult(this.id, randomMove)
})









console.log(kamień);
console.log(papier);
console.log(nożyce);