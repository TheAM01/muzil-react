function Reviews(props) {
    return (
        <div className="review_parent">
            <div className="review_top">
                <div className="review_author">{props.r.author}</div>
                <div className="review_stars">{"⭐".repeat(parseInt(props.r.stars))}</div>
            </div>
            <div className="review_content">
                {props.r.content}
            </div>
        </div>
    )
}

export default Reviews