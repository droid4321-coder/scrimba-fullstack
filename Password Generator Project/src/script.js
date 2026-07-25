//password arrays
const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const symbolsArr = [  ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

// elements
const btnEl = document.getElementById("btn-el");
const passwordEl1 = document.getElementById("password-el1");
const passwordEl2 = document.getElementById("password-el2");
const passwordLengthEl = document.getElementById("length-el");
const copyBtnEl1 = document.getElementById("copybtn-el1");
const copyBtnEl2 = document.getElementById("copybtn-el2");
const copied = document.getElementById("copied");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

//functions
function generatePassword() {
    let passwordArray = [];
    if (lowercase.checked) {
        passwordArray = passwordArray.concat(lowercaseLetters);
    }
    if (uppercase.checked) {
        passwordArray = passwordArray.concat(uppercaseLetters);
    }
    if (numbers.checked) {
        passwordArray = passwordArray.concat(numbersArr);
    }
    if (symbols.checked) {
        passwordArray = passwordArray.concat(symbolsArr);
    }
    copied.textContent = "";
    let password = [];
    let passwordLength = Number(passwordLengthEl.value);
    if (passwordLength < 1) {
        copied.textContent = "You need to have at least 1 or more characters in the length!";
        return "";
    }
    if (passwordArray.length === 0) {
        copied.textContent = "You need to have at least 1 element checked to make the password!";
        return "";
    }
    for (let i = 0; i < passwordLength; i++) {
        const randomAsciiChar = Math.floor(Math.random() * passwordArray.length);
        let randomChar = passwordArray[randomAsciiChar];
        password.push(randomChar);
    }
    return password.join("")
}

async function writeClipboardText(text) {
    try {
        await navigator.clipboard.writeText(text);
        copied.textContent = "Password copied to clipboard!"
  } catch (error) {
    console.error(error.message);
  }
}

//eventListeners
btnEl.addEventListener("click", () => {
    passwordEl1.textContent = generatePassword();
    passwordEl2.textContent = generatePassword();
})

copyBtnEl1.addEventListener("click", () => {
    writeClipboardText(passwordEl1.textContent);
});

copyBtnEl2.addEventListener("click", () => {
    writeClipboardText(passwordEl2.textContent);
});