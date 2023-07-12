import { useParams } from "react-router-dom"
import gallery from "../Data/gallery";
import Navigation from "./Navigation";

function GalleryPage() {

    const params = useParams();

    const id = params.id || "null";

    const match = gallery.find(p => p.id.toLowerCase() === id.toLowerCase());
    console.log(match);

    if (!match || !params.id) {
        let links = gallery.map((i, k) => 
            <a className="gallery_link_parent" href={"/gallery/" + i.id} key={k} >{i.id}</a>
        )
        return (
            <div className="App">
                <Navigation />
                <div className="content">
                    <h1 className="content_heading">Gallery images</h1>
                    {links}
                </div>
            </div>
        )
    }

    let element = match.images.map((i, k) => 
        
        <img src={i} className="gallery_image" key={k} />
        
    );

    return (
        <div className="App">
            <Navigation />
            <div className="content">
                <h1 className="content_heading">Gallery images for {match.id.toUpperCase()}</h1>
                {element}
            </div>
        </div>
    )

}

export default GalleryPage