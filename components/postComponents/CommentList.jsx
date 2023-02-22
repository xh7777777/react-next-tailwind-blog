import React, { useState } from 'react'
import {BiCommentDots} from 'react-icons/bi'
import { Modal } from 'antd'
import CommentForm from './CommentForm'
function CommentList({list,fresh,setFresh}) {
  const [open, setOpen] = useState(false)
  const [currentId, setCurrentId] = useState('')
  const [currentName, setCurrentName] = useState('')
  function handleReply(id,name) {
    setOpen(true)
    setCurrentId(id)
    setCurrentName(name)
  }
  return (
    <div>
      <Modal open={open} onCancel={()=> setOpen(false)} footer=''>
        <CommentForm comment_id={currentId} reply_name={currentName} fresh={fresh} setFresh={setFresh} reply={true} setOpen={setOpen}/>
      </Modal>
        {list.map(item => {
          return <div key={item.comment_id}>
            <div className='flex flex-col py-4 border-b-2 border-slate-300'>
              <h4 className='textc flex justify-between'>{item.guestName+'说：'}
              <BiCommentDots className='cursor-pointer' onClick={()=>handleReply(item.comment_id,item.guestName)}/></h4>
              <div className='textc py-4'>{item.comment_content}</div>
              <div className='textc text-sm flex flex-row-reverse'>{item.time}</div>
              {item.reply.map(rep => {
                return <div key={rep.reply_id} className='flex flex-col pl-4 py-4 '>
                     <h4 className='textc text-sm flex justify-between'>{item.guestName+'回复：'}
                       <BiCommentDots className='cursor-pointer' onClick={()=>handleReply(item.comment_id,item.guestName)}/>
                       </h4>
                       <div className='textc py-4'>{rep.reply_content}</div>
                  <div className='textc text-sm flex flex-row-reverse'>{rep.time}</div>
                </div>
              })}
            </div>
          </div>
        })}
    </div>
  )
}

export default CommentList