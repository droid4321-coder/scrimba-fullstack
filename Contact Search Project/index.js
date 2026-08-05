import contactsArr from "./contactsData.js";

const patternSearchInput = document.getElementById("pattern-search-input");
const patternSearchSubmit = document.getElementById("pattern-search-submit");
const contactDisplay = document.getElementById("contact-display");

function renderContact(contactObj) {
    const contactCard = document.createElement("aside");
    contactCard.classList.add("contact-card");
}

patternSearchSubmit.addEventListener("click", () => {
    const userInput = patternSearchInput.value;
    const regex = new RegExp(userInput, "i");
    const filteredContacts = contactsArr.filter((item) =>
        regex.test(item.name));
    console.log(filteredContacts);
})