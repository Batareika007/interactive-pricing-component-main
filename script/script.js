/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/

const priceList = {
	one: ["10k", 8],
	two: ["50k", 12],
	three: ["100k", 16],
	foure: ["500k", 24],
	five: ["1m", 36],
}
const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
	let target = e.target
	if (e.target.type !== "range") {
		target = document.getElementById("range")
	}
	const min = target.min
	const max = target.max
	const val = target.value

	target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%"
}

rangeInputs.forEach((input) => {
	input.addEventListener("input", handleInputChange)
})
