import { motion } from 'framer-motion';
import { useState } from "react";
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from 'react-tooltip';
import { IoMdWater } from 'react-icons/io';

const Navbar = () => {
    const { user, handleLogOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'Request Blood', path: '/request' },
        { title: 'Donors', path: '/donors' },
        { title: 'Blogs', path: '/blogs' },
        { title: 'About', path: '/about' },
    ]
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <motion.div
                        className="text-red-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        <IoMdWater className="text-3xl" />
                    </motion.div>
                    <span className="font-bold text-xl md:text-2xl text-red-600">BloodLink</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `font-medium hover:text-red-600 transition-colors duration-300 ${isActive ? 'text-red-600' : 'text-neutral-700'
                                }`
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>

                {/* Auth Buttons - Desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className='h-10 w-10 rounded-full p-1 border border-red-500 flex flex-col justify-center items-cente id="my-tooltip"'>
                                    <img className='h-10 w-10 rounded-full object-fill my-anchor-element' src={user?.photoURL} alt="" />
                                    <Tooltip anchorSelect=".my-anchor-element" place="bottom">
                                        {user?.displayName}
                                    </Tooltip>
                                </div>
                            </div>
                            <button
                                onClick={handleLogOut}
                                className="text-sm font-medium px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all hover:animate-pulse">Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm font-medium px-4 py-2 rounded-full bg-gray-200 text-black hover:bg-primary-600 transition-all hover:animate-pulse">
                                Login
                            </Link>
                            <Link to="/register" className="text-sm font-medium px-4 py-2 rounded-full bg-red-500 text-white hover:bg-primary-600 transition-all hover:animate-pulse">
                                Register
                            </Link>
                        </>
                    )}
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes className='text-red-500' /> : <FaBars className='text-red-500'/>}
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navItems.map(item => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `font-medium px-4 py-2 rounded-md ${isActive ? 'bg-red-50 text-red-600' : 'text-neutral-700 hover:bg-neutral-100'
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                {item.title}
                            </NavLink>
                        ))}

                        {/* Auth Buttons - Mobile */}
                        <div className="border-t border-gray-200 pt-4 mt-2">
                            {user ? (
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 px-4">
                                        <FaUser className="text-black" />
                                        <span className="font-medium text-black">{user?.displayName}</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            handleLogOut();
                                            closeMenu();
                                        }}
                                        className="w-full font-medium px-4 py-2 rounded-sm bg-red-500 text-white hover:bg-red-600 transition-all hover:animate-pulse"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col space-y-2">
                                    <Link
                                        to="/login"
                                        className="px-4 py-2 bg-red-500 text-white font-medium rounded-md"
                                        onClick={closeMenu}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="px-4 py-2 bg-red-500 text-white font-medium rounded-md"
                                        onClick={closeMenu}
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;