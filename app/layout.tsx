import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav className="navbar">
          <h2>📚 BookNest</h2>

          <div>
            <Link href="/">Home</Link>
            <Link href="/add-book">Add Book</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}