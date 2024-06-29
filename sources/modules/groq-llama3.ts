import axios from "axios";
import { keys } from "../keys";

const headers = {
    'Authorization': `Bearer ${keys.groq}`
};

export async function groqRequest(systemPrompt: string, userPrompt: string) {
    try {
        console.info("Calling Groq llama3-70b-8192")
        // const response = await axios.post("https://api.groq.com/openai/v1/chat/completions", {
        //     model: "llama3-70b-8192",
        //     messages: [
        //         { role: "system", content: systemPrompt },
        //         { role: "user", content: userPrompt },
        //     ],
        // }, { headers });

        const response = await axios.post("http://localhost:11434/v1/chat/completions", {
            model: "qwen",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error in groqRequest:", error);
        return null; // or handle error differently
    }
}


