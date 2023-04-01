import React from 'react'

export default function Box(props) {
    return (
        <div className='box1'>
            <div className='LineOneName'>St Judes Hospital</div>
            <div className='LineOneTitle'>Sarasota,FL. 33178</div>
            <div className='bdr'>
            </div>
            <div className='day'>10 - 17</div>
            <div className='month'>October December</div>

            <div className='roomno'>20 Rooms </div>
            <div className='etc'>10 Singles, 10 doubles</div>

            <div className='linetwo'>
                <div className='barone'>RECEIVED</div>
                <div className='bartwo'>NEGOTIATING</div>
                <span className='line'></span>
                <div className='barthree'>COMPLETED</div>
            </div>

            {/* <Firstline/>
            <Secline/> */}
        </div>
    )
}
