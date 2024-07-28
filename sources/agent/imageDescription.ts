import { KnownModel, ollamaInference } from "../modules/ollama";
import { groqRequest } from "../modules/groq-llama3";
import { gptRequest } from "../modules/openai";


export async function imageDescription(src: Uint8Array, model?: KnownModel): Promise<string> {
    return ollamaInference({
        // model: 'qwen',
        model: 'moondream:1.8b-v2-fp16',
        // model: model || 'moondream:1.8b-v2-moondream2-text-model-f16',
        messages: [{
            role: 'system',
            content: 'You are a very advanced model and your task is to describe the image as precisely as possible. Transcribe any text you see.'
        }, {
            role: 'user',
            content: 'Describe the scene',
            images: [src],
        }]
    }); 
}

export async function llamaFind(question: string, images: string, prompt: string): Promise<string> {
    // rreturn groqRequest(
    //          `
    //             You are a smart AI that need to read through description of a images and answer user's questions. 
                
    //             This are the provided images:
    //             ${images}

    //             DO NOT mention the images, scenes or descriptions in your answer, just answer the question.
    //             DO NOT try to generalize or provide possible scenarios.
    //             ONLY use the information in the description of the images to answer the question.
    //             BE concise and specific.
    //         `
    //     , 
    //         question
    // );
    if(images==''){
        return groqRequest(prompt, question);
    }

    return groqRequest(
        `
           你是一个需要通读图像描述并回答用户问题的智能人工智能。
           
           这是提供的图像:
           ${images}

           不要在回答中提及图片、场景或描述，只回答问题即可。
           不要试图概括或提供可能的场景。
           仅使用图像描述中的信息来回答问题。
           简明扼要。
       `
        , 
            question
    );
}

export async function openAIFind(question: string, images: string): Promise<string> {
    return gptRequest(
             `
                You are a smart AI that need to read through description of a images and answer user's questions. 
                
                This are the provided images:
                ${images}

                DO NOT mention the images, scenes or descriptions in your answer, just answer the question.
                DO NOT try to generalize or provide possible scenarios.
                ONLY use the information in the description of the images to answer the question.
                BE concise and specific.
            `
        , 
            question
    );
}