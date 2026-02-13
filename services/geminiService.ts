
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a helpful and professional digital assistant for the Ministry of Religious Affairs (Kemenag) Hajj and Umrah division of Kutai Barat Regency (Kabupaten Kutai Barat), Indonesia.
Your name is "Sahabat Haji Kutai Barat".
Respond in a friendly, formal Indonesian language.
Use Islamic greetings like "Assalamu'alaikum".
You provide information about:
1. Hajj registration procedures in Kutai Barat.
2. Checking Hajj portions and estimation.
3. Official Umrah travel agencies (PPIU).
4. Address of Kemenag Kutai Barat: Jl. Sendawar No. 1, Simpang Raya, Sendawar.
5. General Hajj and Umrah advice.

When asked about current prices, exchange rates (SAR to IDR), or latest regulations for 2024/2025, use Google Search to provide the most accurate information.
Always mention that for official data, users should check the "Haji Pintar" app or visit the office in Sendawar.
`;

export const getGeminiResponse = async (prompt: string) => {
  // Fix: Use process.env.API_KEY directly as per @google/genai guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        tools: [{ googleSearch: {} }],
      },
    });
    
    // Fix: Access text property directly (not a method)
    const text = response.text;
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return { text, sources };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { 
      text: "Maaf, terjadi gangguan saat menghubungi asisten AI. Silakan coba lagi nanti.",
      sources: []
    };
  }
};
