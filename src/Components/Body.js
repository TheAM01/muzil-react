import CommerceItem from "./CommerceItem";
import products from "../Data/products.js";

function Body() {

    const listItems = products.map(p =>
        <CommerceItem
          url={p.url}
          thumbnail={p.thumbnail}
          title={p.name}
          price={p.price}
        />
    );

    return (
        <div className="content">

            <h1 className="content_heading">Popular products today</h1>

            <div className="products_showcase">
                {
                    listItems
                }
            </div>

        </div>
    )
};



export default Body