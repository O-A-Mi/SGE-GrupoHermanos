import React, { createContext, useState, useEffect } from 'react';
import style from './style.module.css'

const BackscreenContext = createContext();

const BackscreenProvider = ({ children }) => {
    const [BackscreenState, setBackscreenState] = useState(false);

    useEffect(() => {
        if (BackscreenState) {
            document.getElementById('backscreen').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('backscreen').style.opacity = '1';
            });
        } else {
            document.getElementById('backscreen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('backscreen').style.display = 'none';    
            }, 150);
        }
    }, [BackscreenState]);

    const showBackscreen = () => {
        setBackscreenState(true);
    };

    const hideBackscreen = () => {
        setBackscreenState(false);
    };

    return (
        <BackscreenContext.Provider value={{ BackscreenState, showBackscreen, hideBackscreen }}>
            {children}
            <div className={style.backscreen} id='backscreen'></div>
        </BackscreenContext.Provider>
    );
};

export { BackscreenContext, BackscreenProvider };