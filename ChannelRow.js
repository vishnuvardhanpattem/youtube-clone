import { Avatar } from "@material-ui/core";
import "./ChannelRow.css";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
function ChannelRow({ image, channel, subs, noOfVideos, description, verified }) {
    return (
        <div className="channelRow">
            {/* <img src={image} alt={channel} /> */}
            <Avatar className="channelRow__logo" src={image} alt={channel} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />} </h4>
                <p>{subs} subscribers ⋅ {noOfVideos} videos</p>
                <p>{description}</p>

            </div>
            
        </div>
    )
}

export default ChannelRow;