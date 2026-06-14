import BookCard from "./components/BookCard";
import Link from "next/link";




async function getBooks() {
  const res = await fetch("https://booknest-backend-280o.onrender.com/api/books", {
    cache: "no-store",
  });

  // return res.json();
  console.log("STATUS:", res.status);

  const text = await res.text();
  console.log(text);

  return JSON.parse(text);
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