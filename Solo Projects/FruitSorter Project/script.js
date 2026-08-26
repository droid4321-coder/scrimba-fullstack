//const fruits = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍎", "🍊", "🍊", "🍎", "🍊"];
const fruits = Array.from({ length: Math.floor(Math.random() * 100) + 3 }, () => 
  Math.random() > 0.5 ? "🍎" : "🍊"
);

console.log(fruits);
const apples = document.getElementById("apples");
const oranges = document.getElementById("oranges")

function sortFruits(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "🍎") {
            apples.textContent += arr[i];
        } else {
            oranges.textContent += arr[i];
        }
    }
}

sortFruits(fruits);