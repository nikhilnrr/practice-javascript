
let count = 0
let countEL = document.getElementById("count-el")

function increase() {

    count = count + 1
    countEL.innerText = count
    console.log(count)
}



let saveEL = document.getElementById("save-el")

function save() {
    let countStr = count + "-"
    saveEL.innerText += countStr
    console.log(saveEL)
}

function reset(){
    countEL.textContent = 0
    count = 0
}