import products from "../Data/products";
import CommerceItem from "../Components/CommerceItem";
import Navigation from "./Navigation";

function RecentlySold() {

    const recents = [products[0], products[2], products[3], products[6]];

    let elements = recents.map(p =>
        <CommerceItem
            id={p.id}
            category={p.category}
            key={p.id}
            url={p.url}
            thumbnail={p.thumbnail}
            title={p.name}
            price={p.price}
        />
    );

    console.log(recents);

    return (
        <div className="App">
            <Navigation />
            <div className="content">

                <h1 className="content_heading">Recently sold products</h1>

                <div className="products_showcase">
                    {
                        elements
                    }
                </div>

            </div>
        </div>
    )
}

export default RecentlySold;