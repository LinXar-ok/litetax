import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    // In a real app, ensure process.env.API_KEY is available.
    // For this generation, we assume the environment is set up correctly.
    client = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return client;
};

export const chatWithBookAssistant = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const ai = getClient();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm having trouble connecting to the tax database right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I cannot answer that right now. Please check the FAQ section below.";
  }
};