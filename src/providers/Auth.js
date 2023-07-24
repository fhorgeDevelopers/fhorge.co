import React, { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const Auth = ({ children }) => {
    

    return (
        <AuthContext.Provider value={{  }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}