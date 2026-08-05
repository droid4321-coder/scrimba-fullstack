import contactsArr from "./contactsData.js";

const patternSearchInput = document.getElementById("pattern-search-input");
const patternSearchSubmit = document.getElementById("pattern-search-submit");
const contactDisplay = document.getElementById("contact-display");

function renderContact(contactObj) {
    const contactCard = document.createElement("aside");
    contactCard.classList.add("contact-card");

    contactCard.innerHTML += `
    <h3>${contactObj.name}</h3>
    <p>${contactObj.email || "No Email Provided"}</p>
    <p>${contactObj.phone || "No Phone Provided"}</p>
    `;

    return contactCard;
}

function displayAllContacts(contactsArray) {
    // Clear out old content to prevent duplicates
    contactDisplay.innerHTML = "";

    // Loop through the array using forEach
    contactsArray.forEach((item) => {
        // 1. Generate the individual card element
        const newCard = renderContact(item);
        
        // 2. Append the physical element to your container
        contactDisplay.appendChild(newCard);
    });
}


patternSearchSubmit.addEventListener("click", () => {
    const userInput = patternSearchInput.value.trim();
    if (!userInput) {
        contactDisplay.textContent = "Please provide a valid string!"
        return;
    }
    const regex = new RegExp(userInput, "i");
    const filteredContacts = contactsArr.filter((item) =>
        regex.test(item.name));
    //console.log(filteredContacts);
    if (filteredContacts.length === 0) {
        contactDisplay.textContent = "No contacts matching critera found."
        return;
    }
    displayAllContacts(filteredContacts);
})

/* 

    Scrimba Solution:

    patternSearchSubmit.addEventListener("click", function() {
        findMatchingContacts(contactsArr, patternSearchInput.value)
    })
    
    function findMatchingContacts(contactsArr, pattern) {
        contactDisplay.innerHTML = ""
        const regex = new Regexp(pattern, "i");
        contactsArr.filter(function(contact) {
            return regex.test(contact.name)
        })
        .forEach(function(contact) {
            renderContact(contact)
        })
    }
    
    function renderContact(contactObj) {
        const {name, email. phone} = contactObj
        const contactCard = document.createElement("aside")
        contactCard.classlist.add("contact-card")
        const nameElem = document.createElement("p")
        const emailElem = document.createElement("p")
        const phoneElem = document.createElement("p")
        nameElem.innerText = name
        emailElem.innerText = email
        phoneElem.innerText = phone
        contactCard.appendChild(nameElem)
        contactCard.appendChild(emailElem)
        contactCard.appendChild(phoneElem)
        contactDisplay.appendChild(contactCard)
    }

*/