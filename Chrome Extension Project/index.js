let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

function saveLead() {
    console.log("Button Clicked!");
    myLeads.push(inputEl.value);
    console.log(myLeads);
}

inputBtn.addEventListener("click", function () {
    saveLead();
    renderLeads();
    inputEl.value = "";
})


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
