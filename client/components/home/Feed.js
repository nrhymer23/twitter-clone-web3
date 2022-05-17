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
                            userName={tweet.avatar}
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