import React, { useState, useEffect, useRef } from 'react';

const MenuItem = ({ link, active, setActive, onStartFalling }) => {
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
        }, 100);
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
            className={`${
                active === link.title ? 'text-white' : 'text-secondary'
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href={`#${link.id}`} onClick={() => setActive(link.title)}>
                {link.title}
            </a>
        </li>
    );
};

export default MenuItem;
