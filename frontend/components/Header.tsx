export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AI Newsletter Translator</h1>
      <nav>
        <a href="/dashboard" className="hover:underline">Dashboard</a>
      </nav>
    </header>
  );
}
