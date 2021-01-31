const firePixelsArray = []
const fireWidth = 10
const fireWeight = 10

function start(){
createFireDataStructure()
createFireSource()
renderFire()


setInterval(calculateFirePropagation, 1000)
}

function createFireDataStructure(){
	const numberOfPixels = fireWidth * fireWeight

	for(let i = 0; i < numberOfPixels; i++){
		firePixelsArray[i] = 0
	}

}

function calculateFirePropagation(){
	for (let column = 0; column < fireWidth; column++){
		for (let row = 0; row < fireWeight; row++){
			const pixelIndex = column + (fireWidth * row)
		}
	}
}

function renderFire(){
let html = '<table cellpading = 0 cellspacing = 0>'
for (let row = 0; row < fireWeight; row++){
	html += '<tr>'
	
for (let column = 0; column < fireWidth; column++){
	const pixelIndex = column + (fireWidth * row)
	const fireItensity = firePixelsArray[pixelIndex]

	html += '<td>' 
	html += `<div class = "pixel-index">${pixelIndex}</div>`
	html += fireItensity
	html += '</td>'

}
	html += '</tr>'
}

html += '</table>'

document.querySelector('#fireCanvas').innerHTML = html

}
function createFireSource(){
	for (let column = 0; column <= fireWidth; column++){
		const overflowPixelIndex = fireWidth * fireWeight
		const pixelIndex = (overflowPixelIndex - fireWidth) + column
		firePixelsArray[pixelIndex] = 36

	}
}

start()
