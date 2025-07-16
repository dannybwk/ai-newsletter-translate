backend/
├── functions/
│   ├── index.ts          # 入口主檔
│   ├── gmailWebhook.ts  # Gmail webhook 處理邏輯
│   ├── translate.ts     # 呼叫 OpenAI 並產生摘要 + 翻譯
│   └── sendMail.ts      # 回寄郵件邏輯
├── package.json
└── tsconfig.json
