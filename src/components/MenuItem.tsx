import React, { useState, useEffect, useRef } from 'react';

const MenuItem = ({ link, active, setActive, onStartFalling, isMobile = false, }) => {
    const [isFalling, setIsFalling] = useState(false);
    const [hoverTimer, setHoverTimer] = useState(null);
    const menuItemRef = useRef(null);

    const handleMouseEnter = () => {
        const timer = setTimeout(() => {
            if (menuItemRef.current) {
                const rect = menuItemRef.current.getBoundingClientRect();
                onStartFalling({
                    id: link.id,
                    title: link.title,
                    top: rect.top,
                    left: rect.left,
                });
                setIsFalling(true);
            }
        }, 50);
        setHoverTimer(timer);
    };

    const handleMouseLeave = () => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
            setHoverTimer(null);
        }
    };

    useEffect(() => {
        return () => {
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
        };
    }, [hoverTimer]);

    if (isFalling) {
        return null;
    }

    return (
        <li
            ref={menuItemRef}
            className="hover:text-white font-medium cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`${
                    active === link.title ? 'text-white' : isMobile ? 'text-secondary' : 'text-secondary'
                } ${isMobile ? 'font-poppins' : 'text-[18px]'} ${isMobile ? 'text-[16px]' : 'text-[18px]'}`}
            >
                {link.title}
            </a>
        </li>
    );
};

export default MenuItem;
