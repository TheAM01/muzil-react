export default function CommerceItem(props) {
    return (
        <a href={props.url} className="commerce_item_parent">
            <img src={props.thumbnail} className="cmit_thumbnail" />
            <div className="cmit_title">{props.title}</div>
            <div className="cmit_price">{props.price}</div>
        </a>
    )
}