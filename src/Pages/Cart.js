import Navigation from "./Navigation";
import CartItems from "../Components/CartItems";
import { getCookie, checkout } from "../Scripts/cart";
import products from "../Data/products"

function Cart() {

    let cart = getCookie("cart");
    let items, total;

    // return console.log(JSON.parse(cart))

    if (!cart) {
        items = <div className="msg_snap"><img src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png" className="std_image" /> Your cart is empty :(</div>;
        total = 0;
    } else {

        cart = JSON.parse(cart)

        items = cart.map(mapper);
        total = 0;
        cart.forEach(i => {
            total += i.sum;
        })
    }
    return (
        <div className="App">
            <Navigation />

            <div className="content">
                <div className="cart_parent">
                    {items}
                    <div className="cart_sum">
                        Your total is: Rs {total} /-
                    </div> 
                    <div className="cart_checkout">
                        <button className="check_out_button" onClick={ () => {checkout()} }>Check out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapper(item) {
    
    let m = products.find(p => p.id.toLowerCase() === item.id.toLowerCase());
        return (
            <CartItems
                id={m.id}
                key={m.id}
                thumbnail={m.thumbnail}
                title={m.name}
                price={m.price}
                sum={item.sum}
                quantity={item.quantity}
            />
        )
}

export default Cart