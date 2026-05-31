import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/chat', async (req,res)=>{
  try{
    const { messages } = req.body;

    const response = await openai.responses.create({
      model: 'gpt-5',
      input: messages.map(m=>({
        role:m.role,
        content:m.content
      }))
    });

    res.json({ response: response.output_text });
  }catch(err){
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 3000);