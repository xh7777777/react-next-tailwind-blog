import React from 'react'
import Image from 'next/image'
import cover from '../../public/images/cover-sunrise.jpg'

//Todo 添加动态图片和语句
function OtherCoverPic() {
  return (
    <div className=" h-96 w-full flex overflow-hidden">
        {/* cover*/}
        <Image src={cover} alt='封面' style={{objectFit:cover}} width={'100%'} height={'100%'} className='h-96'/>
        <div className='text-center absolute leading-8 z-50 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-100 dark:text-slate-800 transition-colors duration-300'>
            <span className='text-3xl'>123</span>
            <p className='text-xl'>content</p>
        </div>
        {/* Shade */}
        <div className='absolute w-full h-96 dark:bg-shade transition-colors duration-300'></div>
    </div>
  )
}

export default OtherCoverPic