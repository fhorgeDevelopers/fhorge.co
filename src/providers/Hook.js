import React, { createContext, useContext } from "react";

const HookContext = createContext(null);

export const Hook = ({ children }) => {
    const endpoint = "https://www.api.fhorge.co/api"

    return (
        <HookContext.Provider value={{ endpoint }}>
            {children}
        </HookContext.Provider>
    )
}

export const useHook = () => {
    return useContext(HookContext);
}
