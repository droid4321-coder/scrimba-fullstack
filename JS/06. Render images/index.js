// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container");

function renderImages(arr) {
    //optimized to minimize innerHTML usage
    let imgsDOM = "";

    for (let i = 0; i < arr.length; i++) {
        //optimized code
        imgsDOM += `<img alt="company employee" class="team-img" src="${arr[i]}" />`;
    }
    console.log(imgsDOM);
    container.innerHTML += imgsDOM;
}

renderImages(imgs)