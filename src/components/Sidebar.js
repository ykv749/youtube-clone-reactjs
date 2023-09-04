import React from 'react';

const Sidebar = () => {
    return (
        <div className='col-span-2 shadow-lg p-3'>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Tech</li>
                <li>News</li>
            </ul>

            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Tech</li>
                <li>News</li>
            </ul>
        </div>
    )
}

export default Sidebar
