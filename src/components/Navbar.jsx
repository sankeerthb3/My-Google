import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b dark:border-gray-700 border-gray-300">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl bg-blue-500 dark:bg-gray-500 dark:text-gray-900 font-bold text-white py-1 rounded px-2">MY-GOOGle</p>
                </Link>
                <button className="text-xl darkbg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg" onClick={() => setDarkTheme(!darkTheme)}>
                    Dark
                </button>
            </div>
            <Search />
        </div>
    )
}

export default Navbar