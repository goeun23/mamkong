import { NextResponse } from 'next/server'
import {GoogleGenAI} from '@google/genai'
export async function POST(request: Request) {
  const { content } = await request.json()
    const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});
    
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: content,
    });

    //const message = response?.candidates[0]?.content?.parts[0].text;
    const message = response.candidates[0].content.parts[0].text

    console.log(message)


  return NextResponse.json({ message })
}
