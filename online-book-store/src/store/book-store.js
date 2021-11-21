import { makeAutoObservable, runInAction, toJS } from "mobx";
import bookDetails from "./books.json";

export class BookStore {
  books = null;
  isbooksFetching = false;
  constructor() {
    makeAutoObservable(this);
    this.fetchBooks = this.fetchBooks.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  fetchBooks() {
    this.isbooksFetching = true;
    setTimeout(() => {
      runInAction(() => {
        this.books = bookDetails;
        this.isbooksFetching = false;
      });
    }, 2000);
  }
  get allBooks() {
    return this.books;
  }

  addBook() {
    this.books.push({
      bookName: "Maya",
      price: "3000",
      year: 2000,
    });
    console.log(toJS(this.books));
  }
}

const bookStore = new BookStore();
export default bookStore;
