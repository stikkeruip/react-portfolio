import React, { useState, useEffect } from 'react';

const FallingMenuItem = ({ item, setActive, onItemClickAtBottom }) => {
    const { id, title, left } = item;
    const [top, setTop] = useState(item.top);

    useEffect(() => {
        requestAnimationFrame(() => {
            const distanceToBottom = window.innerHeight - 50;
            setTop(distanceToBottom);
        });
    }, []);

    const handleClick = () => {
        setActive(title);
        onItemClickAtBottom(id);
    };

    return (
        <a
            href={`#${id}`}
            className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
            style={{
                position: 'fixed',
                top: top,
                left: left,
                zIndex: 9999,
                transition: 'top 2s ease-in',
            }}
            onClick={handleClick}
        >
            {title}
        </a>
    );
};

export default FallingMenuItem;
