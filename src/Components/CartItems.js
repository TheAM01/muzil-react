export default function CartItems(props) {
    return (
        <div className="crti_parent">
            <div className="crti_thumbnail_parent">
                <img src={props.thumbnail} className="crti_thumbnail" />
            </div>
            <div className="crti_right">
                <div className="crti_title">{props.title}</div>
                <div className="crti_price">Item price: {props.price}</div>
                <div className="crti_quantity">Quantity: {props.quantity}</div>
                <div className="crti_sum">Total: Rs {props.sum}</div>
            </div>
        </div>
    )
}