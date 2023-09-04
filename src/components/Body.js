import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'

const Body = () => {
    return (
        <div className='grid grid-flow-col p-5 m-2'>
            <Sidebar />
            <Maincontainer />
        </div>
    )
}

export default Body
