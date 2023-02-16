let myLeads = ["lado", "puti", "muji"]


let inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")

const ulEl = document.getElementById("ul-El")
console.log(ulEl)


inputBtn.addEventListener("click", function(){
    myLeads.push(inputBtn.value)
    console.log("gsfseffes")
})

for(let i = 0 ; i<myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" 
}