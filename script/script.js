const priceList = ["10k", "50k", "100k", "500k", "1m"]
const priceList2 = [8, 12, 16, 24, 36]

const pageviews = document.getElementById("pageviews")
const monthPrice = document.getElementById("price")
const discountText = document.getElementById("discoutn-text")
const toggleBtn = document.getElementById("toggle")
const toggleBall = document.querySelector(".toggle__btn_circle")

const addAnimation = () => {
	document.querySelector(".pagevews").classList.add("active")
	document.querySelector(".price").classList.add("active")
	setTimeout(() => {
		document.querySelector(".pagevews").classList.remove("active")
		document.querySelector(".price").classList.remove("active")
	}, "300")
}

const changePrice = (value) => {
	if (toggle.classList.contains("active")) {
		monthPrice.innerHTML = (priceList2[value] * 0.75).toFixed(2)
		addAnimation()
	} else {
		monthPrice.innerHTML = priceList2[value].toFixed(2)
		addAnimation()
	}
	pageviews.innerHTML = priceList[value]
	addAnimation()
}

toggleBtn.addEventListener("click", () => {
	if (toggleBtn.classList.contains("active")) {
		toggleBtn.classList.remove("active")
		toggleBall.classList.remove("active")
		monthPrice.innerHTML = (monthPrice.innerHTML / 0.75).toFixed(2)
		addAnimation()
	} else {
		toggleBtn.classList.add("active")
		toggleBall.classList.add("active")
		monthPrice.innerHTML = (monthPrice.innerHTML * 0.75).toFixed(2)
		addAnimation()
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

	changePrice(target.value)
}

rangeInputs.forEach((input) => {
	input.addEventListener("input", handleInputChange)
})
