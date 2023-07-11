function Navigation() {

    return (
        <div className="navigation">

            <div className="left">
                <img className="logo_img" src="https://www.svgrepo.com/show/128943/3-flowers.svg"/>
                saste nashe
            </div>

            <div className="right">
                <a className="nav_link" href="/products">Products</a>
                <a className="nav_link" href="/category">Category</a>
                <a className="nav_link" href="/gallery">Picture gallery</a>
                <a className="nav_link" href="/recently-sold">Recently sold products</a>
                <a className="nav_link" href="/popular">Popular products</a>
            </div>

        </div>
    );

}

export default Navigation;