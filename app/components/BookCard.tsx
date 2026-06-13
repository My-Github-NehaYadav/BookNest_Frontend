"use client";
import Link from "next/link";


export default function BookCard({ book }) {


  const deleteBook = async () => {
    await fetch(`http://localhost:5001/api/books/${book._id}`, {
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