import React from 'react'
import { useRouter } from 'next/router'
import { BsArrow90DegDown, BsArrowLeftShort } from 'react-icons/bs'

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
  }

const ProfileHeader = () => {

    const router = useRouter()

    const isProfileImageNft = false
    const currentAccount ='kjdcndnckdnsckndscjnsdcjknsdkcndskjcnsdkjcnsdjk'

  return (
      <div className={style.wrapper}>
          <div className={style.header}>
              <div onClick={()=> Router.push('/')} className={style.backButton} >
              <BsArrowLeftShort />
          </div>
          <div className={style.details}>
              <div className={style.primary}>justRhymer</div>
              <div className={style.secondary}> 23 Tweets</div>
          </div>
        </div>
        <div>
            <img
                src ="https://www.teahub.io/photos/full/187-1879151_letting-go-spiritual-art.jpg"
                alt="banner"
                className={style.coverPhoto}
                />
            </div>
            <div className={style.profileImageContainer}>
                <div 
                    className={isProfileImageNft ? 'hex' : style.profileImageContainer}
                    >
                    <img src="https://styles.redditmedia.com/t5_p1dzz/styles/profileIcon_snoo638d3952-d77f-4d45-a177-9385529392ae-headshot.png?width=256&height=256&frame=1&crop=256:256,smart&s=f30361572ad5c50dfd6514958e0e4507ee50688d"
                    alt="KingRhymer"
                    className={isProfileImageNft ? style.profileImageNft : style.profileImage}
                    />
                </div>
            </div>
            <div className={style.details}>
                <div>
                    <div className={style.primary}>No Ls</div>
                </div>
                    <div className={style.secondary}>
                        {currentAccount && (
                                <>
                                @{currentAccount.slice(0,8)}...{currentAccount.slice(37)}
                                </>
                            )}
                  </div>
            </div>
                    <div className={style.nav}>
                        <div className={style.activeNav}>Tweets</div>
                        <div>Tweets & Replies</div>
                        <div>Media</div>
                        <div>Likes</div>
            </div>
      </div>
  )
}

export default ProfileHeader