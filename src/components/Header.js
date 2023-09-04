import React from 'react';
import { useDispatch } from 'react-redux';
import toggleMenu from '../utils/appSlice';

const Header = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={toggleMenuHandler} alt="hamburger_menu" className='h-8' src={'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png'} />
                <img alt="youtube logo" className='h-8 mx-10' src={'https://cdn-icons-png.flaticon.com/512/1384/1384060.png'} />
            </div>
            <div className='col-span-10 px-10'>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" />
                <button className='border border-gray-400 p-2 rounded-r-full'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img alt='user' className='h-8' src={'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'} />
            </div>
        </div>
    )
}

export default Header;
