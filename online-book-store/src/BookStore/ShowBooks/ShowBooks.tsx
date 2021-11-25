import { observer } from "mobx-react-lite";
import {  useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import "./ShowBooks.scss";
import logo from "../../logo.svg";
import ModalWindow from "../../ModalWindow/Modal";
import AddBook from "./AddBook";
import React from "react";
import { BookType } from "../../store/book-store";
import  str from "../../store/rootStore";

const ShowBooks = () => {

  let store = str;


  const {
    bookStore: { allBooks, isbooksFetching, fetchBooks },
    cartStore: { addItemToCart },
  }:any=store

  useEffect(() => {
    if (!isbooksFetching && !allBooks) {
      fetchBooks();
    }
  }, [allBooks, isbooksFetching, fetchBooks]);

  const [search, setsearch] = useState("");
  const [addBookDialog,setAddBookDialog]=useState(false)

  const addABook=(data:BookType)=>{
    allBooks?.push({bookId:allBooks.length+1,...data})
  }
  return (
    <>
      {isbooksFetching && <Loader />}
      {
        addBookDialog&&(
          <ModalWindow setAddBookDialog={setAddBookDialog}>
            <AddBook setAddBookDialog={setAddBookDialog} addABook={addABook}/>
          </ModalWindow>
        )
      }
      <div className="search-header">
        <input
          type="text"
          placeholder="Search your Book"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button
          onClick={() => {
            setAddBookDialog(true)
          }}
        >
          Add
        </button>
      </div>
      <div className="books-container">
        {allBooks &&
          allBooks
            .filter((x:BookType) => x.bookName.includes(search))
            .map((book:BookType, index:number) => {
              return (
                <div className="books-wrapper" key={index}>
                  <img src={logo} alt={"img"} />
                  <p>
                    <span>{"Book Name:"}</span>
                    {book.bookName}
                  </p>
                  <p>
                    <span>{"Book Price:"}</span>
                    {book.price}
                  </p>
                  <p>
                    <span>{"Published:"}</span>
                    {book.year}
                  </p>
                  <button onClick={() => addItemToCart(1)}>Add to Cart</button>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default observer(ShowBooks);
