import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export async function translateEmail(emailData: any) {
  const content = extractTextFromEmail(emailData);

  const prompt = `將以下郵件內容翻譯成繁體中文，並生成 100 字以內的重點摘要。
輸出格式：
摘要：
翻譯內容：
${content}`;

  const completion = await openai.createChatCompletion({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }]
  });

  const result = completion.data.choices[0].message?.content || '';
  console.log(result);
  // TODO: 存入 Firestore 並透過 sendMail 回寄結果
}

function extractTextFromEmail(emailData: any): string {
  return emailData.snippet || '';
}
