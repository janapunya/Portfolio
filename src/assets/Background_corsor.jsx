import React, { useEffect } from 'react'
import gsap from "gsap";

function Background_corsor() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(".background-cursor", {
                x: e.clientX - 160,
                y: e.clientY - 160,
                ease: "none",
                duration: 1.5
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='h-80 w-80 bg-zinc-600 rounded-full blur-3xl opacity-40 fixed background-cursor z-0'></div>
    );
}

export default Background_corsor;
