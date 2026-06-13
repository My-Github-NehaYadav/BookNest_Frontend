"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddBook() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
        price,
      }),
    });
    router.push("/");
  };

  return (
    <div className="form-container">
      <h1>Add Book</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}