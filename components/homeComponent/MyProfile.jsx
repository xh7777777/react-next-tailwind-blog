import React from 'react'
import Image from 'next/image'
import avatar from '../../public/images/avatar.jpg'
import {BsGithub} from 'react-icons/bs'
import {SiBilibili} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'
function MyProfile() {
  return (
    <div className='card max-w-xs w-72 text-center py-8 px-6'>
        <div>
            <Image src={avatar} alt="我的头像" className="rounded-full mx-auto" width={160} height={160}/>
        </div>
        <h1 className='textc py-3'>
            xh777
        </h1>
        <p className='textc'>I hope to be friends with you!</p> 
        <div className='flex justify-around text-2xl mt-4 cursor-pointer dark:text-slate-200'>
            <a href="https://github.com/xh7777777" target='_blank' rel='noreferrer'>
                <BsGithub className='hover:text-orange-600'/>
            </a>
            <a title='联系我：490327763@qq.com'>
            <MdEmail className='hover:text-orange-600'/>
            </a>
            <a href="https://space.bilibili.com/15385937?spm_id_from=333.1007.0.0" target='_blank' rel='noreferrer'>
                <SiBilibili className='hover:text-orange-600'/>
            </a>
        </div>
    </div>
  )
}

export default MyProfile
