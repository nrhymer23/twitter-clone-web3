import React from 'react'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
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

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
        {tweets?.map((tweet, index) => (
            <Post 
             key={index}
             displayName="KingRhymer"
             userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(
                 -4
                )}`}
                text={tweet.text}
                avatar={tweet.avatar}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp}
            />
        ))}
    </div>
  )
}

export default ProfileTweets