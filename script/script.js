const priceList = ["10k", "50k", "100k", "500k", "1m"]
const priceList2 = [8, 12, 16, 24, 36]

const pageviews = document.getElementById("pageviews")
const monthPrice = document.getElementById("price")
const discountText = document.getElementById("discoutn-text")
const toggle = document.getElementById("toggle")
const toggleBall = document.querySelector(".toggle__btn_circle")

const changePrice = (value) => {
	if (toggle.classList.contains("active")) {
		monthPrice.innerHTML = (priceList2[value] * 0.75).toFixed(2)
	} else {
		monthPrice.innerHTML = priceList2[value].toFixed(2)
	}
	pageviews.innerHTML = priceList[value]
}

toggle.addEventListener("click", () => {
	if (toggle.classList.contains("active")) {
		toggle.classList.remove("active")
		toggleBall.classList.remove("active")
		monthPrice.innerHTML = (monthPrice.innerHTML / 0.75).toFixed(2)
	} else {
		toggle.classList.add("active")
		toggleBall.classList.add("active")
		monthPrice.innerHTML = (monthPrice.innerHTML * 0.75).toFixed(2)
	}
})

const discountCangeText = () => {
	if (window.innerWidth < 600) {
		discountText.innerHTML = "-25"
	} else {
		discountText.innerHTML = "25% discount"
	}
}

discountCangeText()

window.addEventListener("resize", discountCangeText)

// input range style + price
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
	console.log(target.value)
	if (target.value == 0) {
		changePrice(target.value)
	} else if (target.value == 1) {
		changePrice(target.value)
	} else if (target.value == 2) {
		changePrice(target.value)
	} else if (target.value == 3) {
		changePrice(target.value)
	} else if (target.value == 4) {
		changePrice(target.value)
	}
}

rangeInputs.forEach((input) => {
	input.addEventListener("input", handleInputChange)
})
