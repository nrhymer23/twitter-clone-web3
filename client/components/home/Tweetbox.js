import { React} from 'react'
import { useState } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocation, MdOutlineLocationOn } from 'react-icons/md'


const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft:`mr-4`,
    tweetBoxRight:`flex-1`,
    profileImage:`height-12 w-12 rounder-full`,
    inputField:`w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer:`flex`,
    iconsContainer:`text-[#1d9bf0] flex flex-1 items-center`,
    icon:`mr-2`,
    submitGeneral:`px-6 py-2 rounded-3x1 font-bold`,
    inactiveSubmit:`bg-[#196195] text-[#95999e]`,
    activeSubmit:`bg-[#1d9bf0] text-white`,
}

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('')

    const postTweet = (event) => {
        event.preventDefault()
        console.log(tweetMessage)
       }  

  return (
   <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img 
          src="https://styles.redditmedia.com/t5_p1dzz/styles/profileIcon_snoo638d3952-d77f-4d45-a177-9385529392ae-headshot.png?width=256&height=256&frame=1&crop=256:256,smart&s=f30361572ad5c50dfd6514958e0e4507ee50688d"
          alt="profile image"
          className={style.profileImage}
          />
        </div>
        <div className={style.tweetBoxRight}>
          <form>
            <textarea
              className={style.inputField}
              placeholder="Whats New?"
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
            />
            <div className={style.formLowerContainer}>
              <div className={style.iconsContainer}>
                <BsCardImage className={style.icon} />
                <RiFileGifLine className={style.icon} />
                <RiBarChartHorizontalFill className={style.icon} />
                <BsEmojiSmile className={style.icon} />
                <IoMdCalendar className={style.icon} />
                <MdOutlineLocationOn className={style.icon} />
              </div>
              <button 
                type ="submit" 
                disabled={!tweetMessage}
                onClick={(event) => postTweet(event)}
                className={`${style.submitGeneral} ${
                  tweetMessage ? style.activeSubmit : style.inactiveSubmit
                }`}
              >
                Tweet
               </button>
            </div>       
        </form>
     </div>
  </div>
  )
}

export default TweetBox
