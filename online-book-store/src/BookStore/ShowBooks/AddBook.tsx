import React from "react";
import { useRef, useState } from "react";
import "./AddBook.css";

type Props = {
  addABook: Function;
  setAddBookDialog: Function;
};

const AddBook = ({ setAddBookDialog, addABook }: Props) => {
  const [bookName, setBookName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const status = useRef<HTMLParagraphElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (status && status.current) {
      status.current.innerHTML = "Added Successfully!!!";
    }
    addABook({ bookName, year, price });
    setTimeout(() => setAddBookDialog(false), 800);
  };

  return (
    <div style={{ textAlign: "center" }} className="abcd">
      <p style={{ color: "green", fontSize: "16px" }} ref={status}></p>
      <form onSubmit={handleSubmit} className="abcd">
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          style={{
            margin: "10px",
            width: "300px",
            height: "40px",
            borderRadius: "20px",
            borderColor: "black",
            textAlign: "center",
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Published Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{
            margin: "10px",
            width: "300px",
            height: "40px",
            borderRadius: "20px",
            borderColor: "black",
            textAlign: "center",
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Book Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            margin: "10px",
            width: "300px",
            height: "40px",
            borderRadius: "20px",
            borderColor: "black",
            textAlign: "center",
          }}
        />
        <br />
        <input
          type="submit"
          value="Add"
          style={{
            height: "30px",
            width: "300px",
            backgroundColor: "skyblue",
            color: "black",
            borderColor: "transparent",
            borderRadius: "20px",
          }}
        />
      </form>
    </div>
  );
};

export default AddBook;
