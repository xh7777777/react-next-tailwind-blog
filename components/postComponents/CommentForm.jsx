import React, { useRef, useState } from 'react'
import { createCommentAPI , createReplyAPI} from '@/API'
import { message } from 'antd'
function CommentForm({art_id,fresh, setFresh, reply=null,comment_id,setOpen,reply_name}) {
  const [nickname,setNickName] = useState('')
  const [email,setEmail] = useState('')
  const [content,setContent] = useState('')
  const [messageApi, contextProvider] =  message.useMessage()
  async function handleSubmit(e) {
    e.preventDefault();
    if(reply) {
      const {data:res} = await createReplyAPI({nickname,email,content,comment_id,reply_name})
      console.log(res)
      if(res.errorCode === 1) {
        messageApi.info('回复成功')
        setFresh(!fresh)
        setEmail('')
        setContent('')
        setNickName('')
        setOpen(false)
      } else {
        messageApi.info(res.msg)
      }
    } else {
      const {data:res} = await createCommentAPI({nickname,email,content,art_id})
      if(res.errorCode === 1) {
        messageApi.info('评论成功')
        setFresh(!fresh)
        setEmail('')
        setContent('')
        setNickName('')
      } else {
        messageApi.info(res.msg)
      }
    }
  }
  return (
    <form className=' px-3 py-5' onSubmit={handleSubmit}>
      {contextProvider}
      <div className='flex gap-2 py-2 justify-between'>
        <label htmlFor="nickname" className='textc cursor-pointer'>用户名：<input className = 'h-8' type='text' id='nickname' required maxLength={10} value={nickname} onChange={(e) => setNickName(e.target.value)}/></label>
        <label htmlFor="email" className='textc cursor-pointer'>邮件地址：<input className = 'h-8' type='email' id='email'value={email} maxLength={20} onChange={(e) => setEmail(e.target.value)}/></label>
      </div>
      <div className='py-2'>
       <label htmlFor="content" className='textc cursor-pointer'>评论:<textarea className=' w-full' maxLength={300} placeholder='输入评论' id='content' required value={content} onChange={(e) => setContent(e.target.value)}/></label> 
      </div>
      <div className='py-4 flex flex-row-reverse gap-4'>
        <button className='btn-orange' onClick={() => setContent('')}>清空</button>
        <button type='submit' className='btn-orange'>提交</button>
      </div>
    </form>
  )
}

export default CommentForm