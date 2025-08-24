import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p className="mb-6">
        Welcome! Use the links below to explore the routing demo.
      </p>

      <nav className="flex gap-3">
        <Link to="/about" className="underline">
          About
        </Link>
        <Link to="/profile/details" className="underline">
          Profile → Details
        </Link>
        <Link to="/profile/settings" className="underline">
          Profile → Settings
        </Link>
        <Link to="/posts/123" className="underline">
          Blog Post 123
        </Link>
      </nav>
    </main>
  );
}
