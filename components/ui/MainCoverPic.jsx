import React from 'react'
import Image from 'next/image'
import cover from '../../public/images/cover-sunrise.jpg'
import { Typewriter } from 'react-simple-typewriter'

//Todo 添加动态图片和语句
function MainCoverPic() {
  return (
      <div className="h-screen w-full flex fixed overflow-hidden z-10">
        {/* cover*/}
        <Image src={cover} alt='封面' fill style={{objectFit:cover}}/>
        <div className='absolute text-3xl leading-8 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 textc transition-colors duration-500'>
        <Typewriter
            words={['希望你可以记住我，记住我这样活过，这样在你身边呆过。——挪威的森林']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={300}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </div>
        {/* Shade */}
        <div className='absolute w-full h-screen dark:bg-shade transition-colors duration-300'></div>
    </div>
  )
}

export default MainCoverPic