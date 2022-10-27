/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const convertBtn = document.getElementById("convert-btn")
const nbrInput = document.getElementById("nbr-input")

let number = 0

convertBtn.addEventListener("click", function() {
    number = nbrInput.value
    length.innerHTML = `${number} meters = ${(number*3.281).toFixed(3)} feet | 
    ${number} feet = ${(number*(1/3.281)).toFixed(3)} meters`
    volume.innerHTML = `${number} liters = ${(number * .264).toFixed(3)} gallons | 
    ${number} gallons = ${(number*(1/.264)).toFixed(3)} liters`
    mass.innerHTML = `${number} kilos = ${(number * 2.204).toFixed(3)} pounds | 
    ${number} pounds = ${(number*(1/2.204)).toFixed(3)} kilos`
})