import React, { createContext, useContext } from "react";

const HookContext = createContext(null);

export const Hook = ({ children }) => {
    const endpoint = "https://gen-api.rhymarworld.org.ng/api"

    return (
        <HookContext.Provider value={{ endpoint }}>
            {children}
        </HookContext.Provider>
    )
}

export const useHook = () => {
    return useContext(HookContext);
}
