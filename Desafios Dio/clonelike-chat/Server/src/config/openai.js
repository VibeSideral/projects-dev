const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY || process.env.OPENAI_API_KEY,
});

async function textCompletion(messages) {
  return await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // ← "gpt-5.4-mini" não existe
    messages,
  });
}

module.exports = { openai, textCompletion };