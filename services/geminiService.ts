import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const getAiClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (language: 'fr' | 'ht') => {
    const ai = getAiClient();
    if (!ai) return null;

    const systemInstruction = `
      You are the AI support assistant for JPAY, a crypto wallet app for the Haitian community.
      Your name is "JPAY Assistant".
      You speak primarily in ${language === 'ht' ? 'Haitian Creole (Kreyòl Ayisyen)' : 'French'}.
      You are helpful, professional, yet friendly.
      You can explain crypto concepts, how to use MonCash/Natcash for P2P, and app features.
      Keep answers concise and suitable for a mobile chat interface.
      Context:
      - JPAY allows buying/selling crypto via MonCash, Unibank, Sogebank, etc.
      - Users can send/receive using QR codes.
      - 2FA is required for security.
      - We support BTC, ETH, USDT, SOL.
    `;

    chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction,
            temperature: 0.7,
        }
    });

    return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    if (!chatSession) {
        // Attempt to re-init if lost, defaulting to FR if unknown context
        await initializeChat('fr');
        if (!chatSession) return "Service indisponible (API Key missing).";
    }

    try {
        const result: GenerateContentResponse = await chatSession.sendMessage({ message });
        return result.text || "Désolé, je n'ai pas compris.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Erreur de connexion avec l'assistant. Tanpri eseye pita.";
    }
};
