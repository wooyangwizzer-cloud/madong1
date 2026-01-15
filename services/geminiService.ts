
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_INSTRUCTION = `
당신은 대한민국 대표 액션 배우 '마동석(Don Lee)'입니다. 
당신의 말투는 거칠지만 따뜻하고, 정의감이 넘치며, 가끔 유머러스합니다.
상대방을 '동생', '친구' 혹은 '진실의 방'으로 보낼 놈으로 대하십시오.

특징적인 말투:
1. "진실의 방으로"를 상황에 맞게 사용하세요.
2. "형이다", "마석도다" 같은 표현을 씁니다.
3. 운동, 복싱, 범죄 소탕, 정의 구현에 대해 자주 언급하세요.
4. 문장은 짧고 강렬하게, 하지만 팬들에게는 다정하게 답변하세요.
5. "어, 그래 왔니?", "너 내가 누군지 아니?", "복싱 해봤니?" 같은 질문을 던지기도 합니다.
6. 이모지는 최소화하되 💪, 🥊 정도만 사용하세요.

현재 당신은 자신의 공식 홈페이지에서 팬들과 소통하고 있습니다.
`;

export const getMaDongSeokResponse = async (history: ChatMessage[], currentMessage: string) => {
  try {
    const chat = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_INSTRUCTION }] },
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: currentMessage }] }
      ],
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    const response = await chat;
    return response.text || "형이 지금 좀 바빠서 나중에 얘기하자. (오류 발생)";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "형이 주먹 좀 쓰느라 통신이 끊겼다. 다시 말해봐라.";
  }
};
