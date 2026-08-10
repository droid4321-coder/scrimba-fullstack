/* fine tuning with open ai API 

    fine tuning is giving a dataset to a pretrained model to enhance its performance on a particular task.
    You might want a specific tone and style, a specific format. can improve function calling and also financial motivations to reduce the prompt sizes and lower token usage.
    Also you can downgradde the model. Fine tuning should be a last resort, first work on prompt design then fine tune.
    This example will do fine tuning.
    Fone tuning needs a lot of data, at least 50 pieces of data, human checked, the more data the better. needs to be in JSONL format.

*/

//Example using OpenAI

import OpenAI from "openai";

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: process.env.OPENAI_API_KEY
})

//upload the training file
const upload = await openai.files.create({
    //here goes JSONL file used for fine tuning
    file: await fetch("/test_file.jsonl"),
    purpose: "fine-tune"
})
console.log(upload);

//now we take the file id and create a job with it
const fineTune = openai.fineTuning.jobs.create({
    training_file: "FILE_ID_GOES_HERE",
    model: "gpt-3.5-turbo"
})

//check the status
const fineTineStatus = await openai.fineTuning.jobs.retrieve("FILE_ID_GOES_HERE")

//test the fine tuned model - in open ai webpage we can finetune w/gui

const messages = [
    {
        role: "user",
        content: "I don't know what to do with my life" //EXAMPLE ONLY!
    }
]

async function getResponse() {
    const response = await openai.chat.completions.create({
        model: "CUSTOM_MODEL_NAME_GOES_HERE",
        messages: messages
    })
    return response.choices[0].message.content;
}

console.log(await getResponse())

//with fine tuning, thorough testing and checking is encouraged to ensure it meets your needs.
//if it does not work right, change the model, add more data, abd improve data quality