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

            {
               listItems
            }

        </div>
    )
};



export default Body