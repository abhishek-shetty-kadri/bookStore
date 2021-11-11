import { makeAutoObservable } from "mobx"

export class CartStore{
    cart=[]
    constructor(){
        makeAutoObservable(this)
        this.addItemToCart=this.addItemToCart.bind(this)
    }
    addItemToCart(item){
        this.cart.push(item)
    }
    get cartItems(){
        return this.cart
    }
}