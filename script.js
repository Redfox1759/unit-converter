/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")

btnEl.addEventListener("click", function(){
    conversionLength()
    conversionVolume()
    conversionMass()
})

function conversionLength() {
    let inputValue = inputEl.value
    let feet = inputValue * 3.281
    feet = feet.toFixed(3) 
    let meter = inputValue / 3.281 
    meter = meter.toFixed(3)
    lengthEl.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meters`
    
}

function conversionVolume() {
    let inputValue = inputEl.value
    let gallons = inputValue * 0.264 
    gallons = gallons.toFixed(3) 
    let liters = inputValue / 0.264  
    liters = liters.toFixed(3)
    volumeEl.textContent = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`
    
}

function conversionMass() {
    let inputValue = inputEl.value
    let pounds   = inputValue * 2.204
    pounds = pounds.toFixed(3) 
    let kilos = inputValue / 2.204 
    kilos = kilos.toFixed(3)
    massEl.textContent = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`
    
}