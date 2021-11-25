import { BookStore } from "./book-store"
import { CartStore } from "./cartStore"

class RootStore {
    bookStore=null
    cartStore=null
    constructor(){
        this.bookStore=new BookStore()
        this.cartStore=new CartStore()
    }
} 

const store=new RootStore()
export default store



