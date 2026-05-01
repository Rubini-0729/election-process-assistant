import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

// Initialize the Gemini Client
// Ensure GOOGLE_GENAI_API_KEY is set in your .env.local file
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY || 'dummy_key_for_build' });

const SYSTEM_INSTRUCTION = `
You are a helpful, neutral, and educational assistant focused ONLY on explaining the election process, voting timelines, and civic duties.
- Provide clear, step-by-step explanations.
- Use simple, easy-to-understand language.
- DO NOT answer questions about specific candidates, political parties, or current events.
- If a user asks a question unrelated to the mechanics of elections or voting, politely decline and steer the conversation back to educational election topics.
- Keep responses concise (under 3 paragraphs).
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    // Extract the latest user message
    const latestMessage = messages[messages.length - 1].content;

    // Call the Gemini API (using gemini-2.5-flash as the standard fast model)
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: latestMessage,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.2, // Low temperature for factual, consistent answers
        }
    });

    return NextResponse.json({ text: response.text });

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
