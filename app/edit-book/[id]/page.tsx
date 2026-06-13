"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";


export default function EditBookPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const params = useParams();
  const id = params.id;
  const router = useRouter();

  useEffect(() => {
    const getBook = async () => {
      const res = await fetch(
        `http://localhost:5001/api/books/${id}`
      );

      const data = await res.json();

      setTitle(data.title);
      setAuthor(data.author);
      setPrice(data.price.toString());
    };

    if (id) {
      getBook();
    }
  }, [id]);

  const updateBook = async () => {
    await fetch(`http://localhost:5001/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
        price,
      }),
    });

    alert("Book Updated");
    router.push("/");
  };

  return (
    <div className="form-container">
      <h1>Edit Book</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <button onClick={updateBook}>
        Update Book
      </button>
    </div>
  );
}