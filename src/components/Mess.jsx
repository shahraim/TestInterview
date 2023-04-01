import React from 'react'
import img1 from '../img/Vector.png'
import img2 from '../img/txt.png'

export default function Mess() {
  return (
    <div className='txtbox'>
        <span className='two'><img className='adjustTwo' src={img2} alt="messagebox" /></span>
        <span className='one'><img className='adjust' src={img1} alt="messagebox" /></span>
    </div>
  )
}
