function createRandomMove(){
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log(randomNumber);
}




const kamień = document.querySelector("#kamień");
const papier = document.querySelector("#papier");
const nożyce = document.querySelector("#nożyce");



kamień.addEventListener("click", function(){
	console.log(this.id)
	createRandomMove();

})

papier.addEventListener("click", function(){
	console.log(this.id)
	createRandomMove();
})

nożyce.addEventListener("click", function(){
	console.log(this.id)
	createRandomMove();
})









console.log(kamień);
console.log(papier);
console.log(nożyce);