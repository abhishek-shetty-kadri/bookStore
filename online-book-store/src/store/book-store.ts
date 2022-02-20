import { makeAutoObservable, runInAction, toJS } from "mobx";
import bookDetails from "./books.json";
type returnType = BookType[] | null;
export class BookStore {
  books: returnType = null;

  isbooksFetching: boolean = false;
  constructor() {
    makeAutoObservable(this);
    this.fetchBooks = this.fetchBooks.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  fetchBooks(): void {
    this.isbooksFetching = true;
    setTimeout(() => {
      runInAction(() => {
        this.books = bookDetails;
        this.isbooksFetching = false;
      });
    }, 3000);
  }
  get allBooks(): returnType {
    return this.books;
  }

  addBook() {
    this.books &&
      this.books.push({
        bookName: "Maya",
        price: 3000,
        year: 2000,
      });
    console.log(toJS(this.books));
  }
}

export type BookType = {
  bookName: string;
  price: number;
  year: number;
};

export default BookStore;
