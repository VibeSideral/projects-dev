const InputPrompt = require("../models/input-prompt");
const { openai } = require("../config/openai"); 

module.exports = {
  async sendText(req, res) {
    const { message } = req.body; 

    if (!message) {
      return res.status(400).json({ error: "Mensagem não informada" });
    }

    const inputModel = new InputPrompt(message);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", 
        messages: [
          { role: "user", content: inputModel.prompt }
        ]
      });

      res.json(response.choices[0].message.content);
    } catch (error) {
      console.error("Erro ao chamar OpenAI:", error);
      res.status(500).json({ error: "Falha ao gerar resposta" });
    }
  }
}