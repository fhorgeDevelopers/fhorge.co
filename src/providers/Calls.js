import React, { createContext, useContext, useState } from "react";
import { useHook } from "./Hook";

const CallsContext = createContext(null);

export const Calls = ({ children }) => {
    const hook = useHook();
    const [navCourses, setNavCourses] = useState([]);

    const getNavCourses = () => {

    }

    return (
        <CallsContext.Provider value={{ navCourses }}>
            {children}
        </CallsContext.Provider>
    )
}

export const useCalls = () => {
    return useContext(CallsContext);
}