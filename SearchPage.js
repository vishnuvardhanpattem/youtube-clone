import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <ChannelRow
                image="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg"
                channel="Clever Programmer"
                verified
                subs="660k"
                noOfVideos={382}
                description="You can find awesome programming lessons here!Also expect programming tips and tricks that will take your coding skills to the..."
            />
            <hr />

            <VideoRow
                title="Amazon Clone using ReactJS - The Ultimate Guide"
                views="1.9M views"
                subs="660k"
                timestamp="2 months ago"
                description="You can find awesome programming lessons here!Also expect programming tips and tricks that will take your coding skills to the..."
                image="https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg"
                channel="Clever Programmer" />
            <VideoRow
                image="https://i.ytimg.com/vi/tLqtnGLfm4Q/maxresdefault.jpg"
                title="Tum Hi Aana Full Video | Marjaavaan | Riteish D, Sidharth M, Tara S | Jubin N | Payal Dev Kunaal V
        "
                subs="660k"
                views="179M"
                timestamp="1 year ag0"
                channel="Clever Programmer"
                description="Presenting the full video song Tum Hi Aana from the Bollywood movie #Marjaavaan. This romantic track is sung by Jubin Nautiyal"
            />

            <VideoRow
                image="https://i.ytimg.com/vi/eN6AYHAT8UM/maxresdefault.jpg"
                title="Yaad Piya Ki Aane Lagi | Divya Khosla Kumar |Neha K,Tanishk B,Jaani, Faisu, Radhika&Vinay |Bhushan K
        "
                subs="660k"
                views="344M"
                timestamp="1 year ag0"
                channel="Clever Programmer"
                description="Presenting official music video of  YAAD PIYA KI AANE LAGI  featuring Divya Khosla Kumar and Faisu. Produced by T-Series & Bhushan Kumar. This romantic song... "
            />

            <VideoRow
                image="https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg"
                title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
                views="2.9M"
                subs="660k"
                timestamp="3 year ag0"
                channel="Clever Programmer"
                description="Here is the best free React JS programming course on the planet. Made with lots of ❤️. Take your web development skills to the next level by building the Top Technology Websites on the planet 🔥🌍."
            />
            <VideoRow
                image="https://i.ytimg.com/vi/eN6AYHAT8UM/maxresdefault.jpg"
                title="Yaad Piya Ki Aane Lagi | Divya Khosla Kumar |Neha K,Tanishk B,Jaani, Faisu, Radhika&Vinay |Bhushan K
        "
                subs="660k"
                views="344M"
                timestamp="1 year ag0"
                channel="Clever Programmer"
                description="Presenting official music video of  YAAD PIYA KI AANE LAGI  featuring Divya Khosla Kumar and Faisu. Produced by T-Series & Bhushan Kumar. This romantic song... "
            />
            <VideoRow
                title="Amazon Clone using ReactJS - The Ultimate Guide"
                views="1.9M views"
                subs="660k"
                timestamp="2 months ago"
                description="You can find awesome programming lessons here!Also expect programming tips and tricks that will take your coding skills to the..."
                image="https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg"
                channel="Clever Programmer" />



        </div>
        //  image="https://i.ytimg.com/vi/iCe_el15SIw/maxresdefault.jpg"
    )
}

export default SearchPage;