function randRange (min, max) {
	const output = Math.floor(Math.random() * (max-min) + min)
	return output;
}
console.log(randRange(10,100))