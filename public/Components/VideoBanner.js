import React from 'react'
import "../css/videobanner.scss";
import Link from 'next/link';

const VideoBanner = () => {
  return (
    <div className='video-banner'>
        <video className='w-100' disablePictureInPicture muted playsInline autoPlay={true} loop>
            <source src='/img/web-banner-desktop.mp4' />
        </video>

        <div className='video-banner-text'>
            <h1 className='mb-3'>SEE THE WORLD DIFFERENTLY</h1>
            <Link href={"/"}>Make an impact with us</Link>
        </div>
        <div className='video-banner-backdrope'></div>

    </div>
  )
}

export default VideoBanner