import React from 'react'
import Card from './Card.jsx'

export default function Box2(props) {
  return (
    <div className='box2'>
      <div className='LineOneName'>St Judes Hospital</div>
      <div className='LineOneTitle'>Sarasota,FL. 33178</div>
      <div className='bdr'>
      </div>
      <div className='day'>10 - 17</div>
      <div className='month'>October December</div>

      <div className='roomno'>20 Rooms </div>
      <div className='etc'>10 Singles, 10 doubles</div>
      <div className='complete'>COMPLETED</div>
      <div className='posi1'><Card /><div className='tag'>Rare Find</div></div>
      <div className='posi2'><Card /></div>
      <div className='posi3'><Card /></div>
    </div>
  )
}