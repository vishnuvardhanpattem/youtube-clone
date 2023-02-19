
import "./VideoRow.css";

function VideoRow ({subs,description, title, channel, views, timestamp, image}) {

    return (
        <div className="videoRow">
            <img className="videoRow__thumbnail" src={image} alt={channel} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__info">{channel} ⋅ <span> <span className="subs__number">{subs}</span> subscribers</span> {views} views ⋅ {timestamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>



        </div>
    )

}

export default VideoRow;