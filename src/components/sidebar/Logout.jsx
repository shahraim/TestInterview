import React from 'react'

export default function Logout(props) {
  return (
    <>
    <div className='out'><span>{props.logout}</span></div>
    <span className='tag1'>{props.tag1}</span>
    <span className='tag2'>{props.tag2}</span>
    </>
  )
}
