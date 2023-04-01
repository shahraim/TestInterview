import React from 'react'
import Box from './Box1/Box'
import Box2 from './Box2/Box2'
import Mess from './Mess'
import Req from './Req'

export default function Main() {
    return (
        <>
            <Req request={"You currently have 3 requests"} />
            <Box />
            <Box2 />
            <Mess />
        </>
    )
}
