let myLeads = ["google.com", "facebook.com", "youtube.com"];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

function saveLead() {
    console.log("Button Clicked!");
    myLeads.push(inputEl.value);
    console.log(myLeads);
}

inputBtn.addEventListener("click", saveLead)

let listItems = "";

for (const item of myLeads) {
    /* This is an alternate way of outputting elements with a for loop.
    const li = document.createElement("li");
    li.textContent = item;
    ulEl.append(li)
    */
    
    listItems += `<li>${item}</li>`

}

ulEl.innerHTML = listItems;