"use client";
import Link from "next/link";

type book = {
  _id: string;
  title: string;
  author: string;
  price: number;
};
export default function BookCard({ book }: { book: Book }) {


  const deleteBook = async () => {
    await fetch(`https://booknest-backend-280o.onrender.com/api/books/${book._id}`, {
      method: "DELETE",
    });

    window.location.reload();
  };


  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>₹{book.price}</p>


      <div className="button-group">
        <Link href={`/edit-book/${book._id}`}>
          <button className="edit-btn">Edit</button>
        </Link>

        <button className="delete-btn" onClick={deleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}