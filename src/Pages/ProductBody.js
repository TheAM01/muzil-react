import { useParams } from "react-router-dom";
import products from "../Data/products";

import ProductDetails from "../Components/ProductDetails";

function ProductBody() {

    const params = useParams();

    const product = products.find(p => p.id.toLowerCase() === params.id.toLowerCase());

    const listItems = products.map(p =>
        <ProductDetails
            key={p.id}
            url={p.url}
            thumbnail={p.thumbnail}
            title={p.name}
            price={p.price}
        />
    );


    return (
        <div className="content">
            <ProductDetails
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                thumbnail={product.thumbnail}
                content={product.content}
                reviews={product.reviews}
            />
        </div>
    )
}

export default ProductBody