import { useParams } from "react-router-dom";
import products from "../Data/products";

function ProductBody() {

    const params = useParams();
    console.log(params.id);

    const product = products.find(p => p.name.toLowerCase() === params.id.toLowerCase());
    console.log(product)


    return (
        <div className="product_body">
            
        </div>
    )
}

export default ProductBody