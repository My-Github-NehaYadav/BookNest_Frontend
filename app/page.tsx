import BookCard from "./components/BookCard";
import Link from "next/link";




async function getBooks() {
  const res = await fetch("http://localhost:5001/api/books", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const books = await getBooks();

  return (
    <div>
      <h1>📚 BookNest</h1>

      <Link href="/add-book">
        <button className="add-book-btn">
          Add New Book
        </button>
      </Link>

      {books.map((book: any) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}