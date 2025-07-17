import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Newsletter Translator</title>
      </Head>
      <Header />
      <main className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">看懂外文電子報，只要 1 秒</h1>
        <p className="mb-8">自動翻譯、保留版面、AI 摘要，一次搞定。</p>
        <a href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded">立即開始</a>
      </main>
      <Footer />
    </div>
  );
}
