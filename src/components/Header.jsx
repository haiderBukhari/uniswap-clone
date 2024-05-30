import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkMode(true)
        }
    }, [])
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode])
    return (
        <div className="h-[100px] dark:bg-[#131313] px-3 md:px-6 py-4 w-full bg-white">
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='h-[50px]' src={logo} alt="" />
                    <p className='font-semibold cursor-pointer ml-4 md:ml-6 text-[#3C3D3D] dark:text-white'>Swap</p>
                </div>
                <div className='flex items-center'>
                    <Switch onClick={() => setDarkMode(!darkMode)} {...label} defaultChecked={darkMode} className='filter-[#ccc]' />
                    <div>
                        <button className='rounded-full bg-[#FFE7FF] font-semibold text-[#FC80FF] dark:bg-[#2C192C] px-3 py-2'>Connect</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header