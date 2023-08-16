import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ModeContext = createContext(null);

export const Mode = ({ children }) => {
    const location = useLocation();
    const mode = window.localStorage.getItem('mode');
    const [myMode, setMyMode] = useState(mode);
    // const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    const getMode = () => {
        if (window.localStorage.getItem('mode')) {
            let activeMode = window.localStorage.getItem('mode');
            setMyMode(activeMode);
        } else {
            window.localStorage.setItem('mode', 'light');
            setMyMode('light');
        }
    }

    const toggleMode = () => {
        if (myMode === 'light') {
            setMyMode('dark');
            window.localStorage.setItem('mode', 'dark');
        } else {
            setMyMode('light');
            window.localStorage.setItem('mode', 'light');
        }
    }

    const changeBackground = () => {
        if (mode === 'light') {
            document.body.style.backgroundColor = '#f3f3f3';
        } else {
            document.body.style.backgroundColor = 'lightgrey';
        }
    }

    const changeIcon = () => {
        // let favicon = document.getElementById('favicon')
        if (mode === 'light') {
            return "/icon.png";
        } else {
            return "/icon_dark.png";
        }
    }

    // darkThemeMq.addListener(e => {
    //     if (e.matches) {
    //         if (myMode === "light") {
    //             toggleMode();
    //         }
    //     } else {
    //         if (myMode === "dark") {
    //             toggleMode();
    //         }
    //     }
    // });

    useEffect(() => {
        getMode()
        return () => {
            window.scrollTo(0, 0);
        }
    }, [location.key]);

    useEffect(() => {
        changeBackground();
        return () => {
            return true;
        }
    }, [mode]);

    return (
        <ModeContext.Provider value={{ myMode, toggleMode, changeIcon }}>
            {children}
        </ModeContext.Provider>
    )
}

export const useMode = () => {
    return useContext(ModeContext);
}