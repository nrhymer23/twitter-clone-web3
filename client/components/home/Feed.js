import { BsStar, BsStars } from "react-icons/bs"
import { FaSlideshare } from "react-icons/fa"
import TweetBox from "./TweetBox"
import Post from "../Post"



const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'No Ls',
        userName: 'kjdcndnckdnsckndscjnsdcjknsdkcndskjcnsdkjcnsdjk',
        avatar:"https://styles.redditmedia.com/t5_p1dzz/styles/profileIcon_snoo638d3952-d77f-4d45-a177-9385529392ae-headshot.png?width=256&height=256&frame=1&crop=256:256,smart&s=f30361572ad5c50dfd6514958e0e4507ee50688d",
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-05-17T12:00:00.00Z', // this is how sanity stores timestamps

    },
    {
        displayName: 'No Ls',
        userName: '',
        avatar:'',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-05-17T12:00:00.00Z', // this is how sanity stores timestamps

    },
    {
        displayName: 'No Ls',
        userName: '',
        avatar:'',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-05-17T12:00:00.00Z', // this is how sanity stores timestamps

    },
    {
        displayName: 'No Ls',
        userName: '',
        avatar:'',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-05-17T12:00:00.00Z', // this is how sanity stores timestamps

    },

]

function Feed (){
    return (
        <div className= {style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
                <TweetBox />
                {
                    tweets.map((tweet, index) => (
                        <Post 
                            key={index}
                            displayName={tweet.displayName}
                            userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(
                                -4
                            )}`}
                            avatar={tweet.avatar}
                            text={tweet.text}
                            isProfileImageNft={tweet.isProfileImageNft}
                            timestamp={tweet.timestamp}
                            />
                    ))
                }
        </div>
    )
}

export default Feed