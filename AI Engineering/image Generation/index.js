import OpenAI from "openai";

const outputImg = document.getElementById("output-img");

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
})

document.getElementById("submit-btn").addEventListener("click", () => {
    const prompt = document.getElementById("instruction").value;
    GenerateImage(prompt);
})

async function generateImage(prompt) {
    const response = await openai.images.generate({
        model: "dall-e-3", //dall e is the image generation model from openAI
        prompt: prompt, //the prompt to gove to dall e
        n: 1, //number of images
        size: "1024x1024", // size of image
        style: "vivid", //style of image
        response_format: "b64_json" //default url for image, b64 json is an encrypted bloc of text that renders an image
    })
    console.log(response);
    outputImg.innerHTML = `<img src="data:image/png;base64,${response.data[0].b64_json}" alt="">`
}

//the response takes our prompt and it fills in the gaps for the image generation
//openAi image urls last for 1 hour. Useful for a single session