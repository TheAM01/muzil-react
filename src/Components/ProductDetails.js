import { addToCart } from "../Scripts/cart";
import {Button} from "react";
import Reviews from "./Reviews";

function ProductDetails(props) {
    
    const reviews = props.reviews.map((r, i) => 
        <Reviews
            r={r}
            key={i}
        />
    )

    
    
    console.log(reviews)
    return (

        <div className="prdt_parent">

            <div className="prdt_thumbnail_parent">
                <img src={props.thumbnail} className="prdt_thumbnail" />
            </div>

            <div className="prdt_title">
                {props.title}
                <div className="cart_options">
                    <div className="cart_quantity_parent">
                        <input type="number" id="cart_quantity" className="cart_quantity" placeholder="amount"/>
                    </div>
                    <button className="add_to_cart" onClick={() => {addToCart(props)}}>Add to cart</button>
                </div>
            </div>

            <div className="prdt_price">
                {props.price}
            </div>

            <div className="prdt_gallery">
                <a href={`/gallery/${props.id}`} className="prdt_gallery_link" >
                    Open {props.title.toLowerCase()} gallery ↗
                </a> 
            </div>

            <div className="prdt_content">
                Box content: {props.content.join(', ')}
            </div>

            <div className="prdt_reviews_parent">
                {reviews}
            </div>

        </div>

    )
}

export default ProductDetails;