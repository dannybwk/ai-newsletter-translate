import { useState } from 'react';

export default function Dashboard() {
  const [emails] = useState([
    { id: 1, subject: 'Weekly Tech Update', summary: '本週科技重點...', translation: '完整翻譯內容...' },
    { id: 2, subject: 'Finance Insights', summary: '財經摘要...', translation: '完整翻譯內容...' },
  ]);
  const [selected, setSelected] = useState(emails[0]);

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">電子報列表</h2>
        {emails.map(email => (
          <div key={email.id} onClick={() => setSelected(email)} className="cursor-pointer mb-2 hover:underline">
            {email.subject}
          </div>
        ))}
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">{selected.subject}</h1>
        <h2 className="text-lg font-semibold mt-4 mb-1">重點摘要</h2>
        <p>{selected.summary}</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">完整翻譯</h2>
        <p>{selected.translation}</p>
      </main>
    </div>
  );
}
