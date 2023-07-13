import { useParams } from "react-router-dom";
import products from "../Data/products";
import Navigation from "./Navigation";

function Category() {

    const params = useParams();

    const category = params.category;

    // let matched = [];

    // products.map((p) => {        
    //     if (!matched.includes(p.category)) return matched.push(p.category);
    // });

    if (!category) {

        let c = [];

        products.map(p => {
            let ct = p.category
            if (c.includes(ct)) return
            c.push(ct);
        });

        return (
            <div className="App">
                <Navigation />
                <div className="content">
                    {
                        c.map(i => 
                            <a 
                                href={"/category/"+i.toLowerCase().replaceAll(" ", "-")}
                                className="category_link"
                                key={c.id}
                            >
                                <span className="capitalize" style={{"margin": 0}}>{i}</span>
                            </a>
                        )
                    }
                </div>
            </div>
        )
    };

    let k = products.map(p => {

        let l = {};
        l[p.category.toLowerCase().replaceAll(" ", "-")] = category.toLowerCase();
        l["case"] = p.category.toLowerCase().replaceAll(" ", "-") !== category.toLowerCase()
        console.log(l)

        if (p.category.toLowerCase().replaceAll(" ", "-") !== category.toLowerCase()) return;

        return (
            <a
                href={p.url}
                key={p.id}
                id={p.id}
                className="category_item_link"
            >{p.name}</a>
        )
    })

    return (
        <div className="App">
            <Navigation />
            <div className="content">
                {k}
            </div>
        </div>
    )

}

export default Category;