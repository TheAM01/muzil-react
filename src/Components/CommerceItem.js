export default function CommerceItem(props) {

    const expensivePrice = parseInt(props.price.toLowerCase().replaceAll("rs ", "")) + (parseInt(props.price.toLowerCase().replaceAll("rs ", "")) * 0.2)
    return (
        <a href={props.url} className="commerce_item_parent">
            <div class="cmit_thumbnail_parent">
                <img src={props.thumbnail} className="cmit_thumbnail" />
            </div>
            <div className="cmit_title">{props.title}</div>
            <div className="cmit_price">
                <span className="strikethrough">
                
                    Rs {round(expensivePrice, 500)}
                
                </span> {props.price} 
            </div>
        </a>
    )
}

function round(num,pre) {
    return Math.ceil(num/pre)*pre
}