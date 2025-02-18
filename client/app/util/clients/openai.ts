import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

async function callAi(prompt: { developer: string; user: string }) {
  try {
    const completion = await client.chat.completions.create({
      messages: [
        { role: "developer", content: prompt.developer },
        { role: "user", content: prompt.user },
      ],
      model: "gpt-4o-mini",
      response_format: { type: "json_object" }
    });

    return completion.choices[0].message.content;
  } catch (e) {
    console.error(e);
  }
}

export default { callAi };
