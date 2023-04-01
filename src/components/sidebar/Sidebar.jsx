import React from 'react'
import Logout from './Logout'
import Namelogo from './Namelogo'
import Sideoption from './Sideoption'

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
        <Namelogo Name={"LODGN"}/>
        <Sideoption Point1={"Current requests"} Point2={"Ongoing stays"} Point3={"Previous stays"} Point4={"Reports"} />
        <Logout logout={"Log-Out"} tag1={"Help-Desk:"} tag2={"786-874 9988 "}/>
    </div>
  )
}
