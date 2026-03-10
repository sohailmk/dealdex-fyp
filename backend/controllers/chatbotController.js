import { GoogleGenerativeAI } from '@google/generative-ai';

const handleChat = async (req, res) => {
    try {
        // Initialize Gemini API inside the handler to ensure env vars are loaded
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "dummy_key_for_now");
        const { message } = req.body;

        if (!message) {
            return res.json({ success: false, message: "Message is required" });
        }

        // Use gemini-2.5-flash which is supported by the user's API key
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
        You are a helpful, friendly customer support chatbot for an e-commerce store called "Dealdex".
        Dealdex sells clothing for Men, Women, and Kids.
        Keep your responses concise, friendly, and helpful. 
        If a user asks about something unrelated to clothes, shopping, or your store, politely bring the conversation back to Dealdex.
        
        User's message: ${message}
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        res.json({ success: true, reply: responseText });

    } catch (error) {
        console.log("Chatbot Error:", error);
        res.json({ success: false, message: error.message });
    }
}

export { handleChat }
