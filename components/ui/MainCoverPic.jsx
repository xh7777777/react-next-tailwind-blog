import React from 'react'
import Image from 'next/image'
import cover from '../../public/images/cover-sunrise.jpg'
import cover1 from '../../public/images/cover1.jpg'
import cover2 from '../../public/images/cover2.jpg'
import cover3 from '../../public/images/cover3.jpg'
import cover4 from '../../public/images/cover4.jpg'
import cover5 from '../../public/images/cover5.jpg'
import cover6 from '../../public/images/cover6.jpg'
import cover7 from '../../public/images/cover7.jpg'
import cover8 from '../../public/images/cover8.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { randomArr } from '@/utils'
const words = [
  '每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。——挪威的森林',
  '希望你可以记住我，记住我这样活过，这样在你身边呆过。——挪威的森林',
  '不会忘记的永远不会忘记，会忘记的留着也没有用。——挪威的森林',
  '程序和诗差不多，你先得把它写出来。——E. W. Dijkstra',
  '程序优化第一法则：不要优化。程序优化第二法则：还是不要优化。—— Michael Jackson',
  'Plagiarism is the sincerest form of flattery. 抄袭是最真诚的恭维。——《编程珠玑2》第六章'
]
const coverArr = [cover,cover1,cover2,cover3,cover4,cover5,cover6,cover7,cover8]
//Todo 添加动态图片和语句
function MainCoverPic() {
  return (
      <div className="h-screen w-full flex fixed overflow-hidden z-10">
        {/* cover*/}
        <Image src={randomArr(coverArr)} alt='封面' fill style={{objectFit:cover}}/>
        <div className='absolute text-3xl leading-8 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 textc transition-colors duration-500'>
        <Typewriter
            words={[randomArr(words)]}
            loop={3}
            cursor
            cursorStyle='_'
            typeSpeed={100}
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