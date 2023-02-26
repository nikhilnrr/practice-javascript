let myLeads = []


let inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")

const ulEl = document.getElementById("ul-El")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderLeads(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = "" //input box khali garcha
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems  
}
