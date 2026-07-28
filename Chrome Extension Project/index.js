let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage);
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

//localStorage.setItem("myLeads", "www.examplelead.com")
//console.log(localStorage.getItem("myLeads"));
//localStorage.clear()

function saveLead() {
    //console.log("Button Clicked!");
    myLeads.push(inputEl.value);
    inputEl.value = "";
    //console.log(myLeads);
}

function saveToLocalStorage() {
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"));
}

/* function renderLead() {
    let listItem = `<li>${inputEl.value}</li>`
    ulEl.innerHTML += listItem;
} */

function renderLeads() {
    let listItems = "";
    for (const item of myLeads) {
    /* This is an alternate way of outputting elements with a for loop.
    const li = document.createElement("li");
    li.textContent = item;
    ulEl.append(li)
    */   
        listItems += `<li><a href="${item}" target=_blank>${item}</a></li>`
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
    saveLead();
    renderLeads();
    saveToLocalStorage();
})
