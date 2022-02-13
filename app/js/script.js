console.log("keypress")

const lettersPattern = /^[a-z]/;
let currentGuessCount = 1;
let currentGuess =  document.querySelector("#guess" + currentGuessCount);
let currentLetters = currentGuess.dataset

// detect keypress (letter, backspace, other)
document.addEventListener("keydown", (e) => {
	console.log("keypress: " + e.key)

	// keypress is string of length 1, and is a letter
	// /[a-z]/.test('a'
	let keypress = e.key;
	if (keypress.length == 1 && lettersPattern.test(e.key)) {
		console.log("is letter")
		updateLetters(keypress)
	}
	
	// If backspace
})
// Update "letters"
const updateLetters= (letter) => {
	console.log(
	"updateLetters = " + letter,
	"currentGuess = " + currentGuessCount, 
	"currentLetters = " + currentLetters 
	);
	currentLetters = currentLetters + letter
	console.log("updated currentLetters = " + currentLetters)

};

// Update tile markup

// Delete last letter


// - if keypress is a letter
// -update "letters" attribute
// 	- update tile markup based on "letters" value
// - if keypress is backspace
// - delete last letter in "letters"
// 	- update tile markup based on "letters"