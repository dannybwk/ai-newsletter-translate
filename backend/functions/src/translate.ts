import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export async function translateEmail(emailData: any) {
  const content = extractTextFromEmail(emailData);

  const prompt = `將以下郵件內容翻譯成繁體中文，並生成 100 字以內的重點摘要。\n輸出格式：\n摘要：\n翻譯內容：\n${content}`;

  const completion = await openai.createChatCompletion({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }]
  });

  const result = completion.data.choices[0].message?.content || '';
  console.log(result);
  // TODO: 存入 Firestore 並寄回結果
}

function extractTextFromEmail(emailData: any): string {
  return emailData.snippet || '';
}
