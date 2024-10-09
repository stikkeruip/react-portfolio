import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo } from '../assets';
import MenuItem from './MenuItem';
import FallingMenuItem from './FallingMenuItem';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [fallingItems, setFallingItems] = useState([]);

    const handleStartFalling = (itemData) => {
        setFallingItems((prev) => [...prev, itemData]);
    };

    const handleItemClickAtBottom = (id) => {
        setFallingItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        Uipko Stikker{' '}
                        <span className="sm:block hidden">
              | A programmer who really needs a job...please
            </span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <MenuItem
                            key={link.id}
                            link={link}
                            active={active}
                            setActive={setActive}
                            onStartFalling={handleStartFalling}
                        />
                    ))}
                </ul>
            </div>
            {fallingItems.map((item) => (
                <FallingMenuItem
                    key={item.id}
                    item={item}
                    setActive={setActive}
                    onItemClickAtBottom={handleItemClickAtBottom}
                />
            ))}
        </nav>
    );
};

export default Navbar;
