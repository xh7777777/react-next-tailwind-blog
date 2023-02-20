import React, { useMemo } from 'react'
import Image from 'next/image'
import cover from '../../public/images/cover-sunrise.jpg'
import { useRouter } from 'next/router'

function OtherCoverPic() {
  const router = useRouter()
  const description = useMemo(() => {
    if(router.asPath === '/timeline') return '时间轴'
    else if(router.asPath === '/post') return '全部文章'
    else if(router.asPath === '/about') return '自我介绍'
    else if(router.query.art_id) return '文章详情'
    else if(router.query.slug) return (router.query.slug)[1]
   })
  return (
    <div className=" h-96 w-full flex overflow-hidden">
        {/* cover*/}
        <Image src={cover} alt='封面' style={{objectFit:cover}} fill className='h-96'/>
        <div className='text-center absolute leading-8 z-40 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-100 dark:text-slate-800 transition-colors duration-300'>
            <span className='text-7xl textc'>{description}</span>
        </div>
        {/* Shade */}
        <div className='absolute w-full h-96 dark:bg-shade transition-colors duration-300'></div>
    </div>
  )
}

export default OtherCoverPic