import React from 'react'
import img from '../../img/Vector 1.png'

export default function Card() {
  return (
    <div className='cards'>
        <div className='logoH'>
            <img className='logocard' src={img} alt="image" />
        </div>
            <p className='logoText'>Holiday inn</p>
        <div className='down'>
            <p className='calculate'>1.5 miles away from joblocation.</p>
            <span className='money'> Singles: $120<br/>Doubles: $145</span>
            <p className='btn'>Book now</p>
        </div>
    </div>
  )
}
