import { ActionFunctionArgs, data } from "@remix-run/node";
import OpenAI from "openai";
import { keyInsightsPrompt } from "~/util/prompts";

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
      response_format: { type: "json_object" },
    });

    return completion.choices[0].message.content;
  } catch (e) {
    console.error(e);
  }
}

export async function loader() {}

export async function action(args: ActionFunctionArgs) {
  const { request: req, params } = args;
  switch (req.method) {
    case "POST":
      if (params.endpoint === "get-ai-insights") {
        try {
          const { transactions } = await req.json();
          const res = await callAi(keyInsightsPrompt(transactions));
          return { insights: res };
        } catch (error) {
          return data({ error }, { status: 500 });
        }
      }
      break;
  }
}
