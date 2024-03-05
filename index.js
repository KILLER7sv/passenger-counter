// document.getElementById("count").innerText = 5

// let count = 0
// console.log(count)

// let myAge = 22
// let humandog = 7

// let dogAge = myAge * humandog
// console.log(dogAge) 

// INITIALIZE THE COUNT TO 0
// listen to clicks on the increment button
// increment the count variable when the button is clicked
// change the count element in HTML to reflect the new count


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


