// image generation 

import {Configuration,OpenAIApi} from 'openai-edge';
import 'dotenv/config';


const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY

})

const openai = new OpenAIApi(config);

export async function generateImagePrompt(name:string){
    // genearate the promt for the dalle to generate image based on the prompt
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "system",
                content: `I am creating a website where users can create notes with the help of AI. Users need to create a notebook by entering its name. Based on this notebook name, I want to generate a description that can be used to create an image using DALL-E. The image should be simple, monotonic, dark, and futuristic, containing simple patterns without filling the entire image. Please generate a DALL-E prompt based on the following notebook name: ${name} `
            },
            {
                role:'user',
                content: `PLease generate a thumbnail description for the DallE  of my notebook titled ${name}.`
        }]
    });
        
    const data = await response.json();
    const image_description = data.choices[0].message.content;
    return image_description as string;

    } catch (error) {
        // cath the errors
        console.log(error);
        throw error;
    }

}

export async function generateImage(prompt:string){

}