let myLeads = [];
let oldLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadsFromLocalStorage);
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

//localStorage.setItem("myLeads", "www.examplelead.com")
//console.log(localStorage.getItem("myLeads"));
//localStorage.clear()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

/* const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
] */

function render(leads) {
    let listItems = "";
    for (const item of leads) {
    /* This is an alternate way of outputting elements with a for loop.
    const li = document.createElement("li");
    li.textContent = item;
    ulEl.append(li)
    */   
        listItems += `<li><a href="${item}" target=_blank>${item}</a></li>`
    }
    ulEl.innerHTML = listItems;
}

function saveLead() {
    //console.log("Button Clicked!");
    myLeads.push(inputEl.value);
    inputEl.value = "";
    //console.log(myLeads);
}

function saveToLocalStorage() {
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    //console.log(localStorage.getItem("myLeads"));
}

/* function renderLead() {
    let listItem = `<li>${inputEl.value}</li>`
    ulEl.innerHTML += listItem;
} */

inputBtn.addEventListener("click", function () {
    saveLead();
    render(myLeads);
    saveToLocalStorage();
})

tabBtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tab = tabs[0].url
    //console.log(tabs[0].url);
    myLeads.push(tab);
    saveToLocalStorage();
    render(myLeads);
    })
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.removeItem("myLeads");
    myLeads = [];
    render(myLeads);
})
