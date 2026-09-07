// Getting content
const promptInput = document.getElementById("input-text");
const output = document.getElementById("output-text");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", async () => {
    const promptValue = promptInput.value;
    console.log(promptValue);
    
    // 1. Set the initial text and add the loading animation class
    output.textContent = "Loading";
    output.classList.add("is-loading");
    
    try {
        const response = await fetch("http://127.0.0.1:8000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userPrompt: promptValue })
        });
        
        const data = await response.json();
        
        // 2. Remove the loading animation class before displaying the text
        output.classList.remove("is-loading");
        output.textContent = data.mentorHint;

    } catch (error) {
        // Handle network errors gracefully
        output.classList.remove("is-loading");
        output.textContent = "Could not connect to the mentor server. Please try again.";
        console.error("Frontend Fetch Error:", error);
    }
});
