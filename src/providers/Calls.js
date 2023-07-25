import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useHook } from "./Hook";

const CallsContext = createContext(null);

export const Calls = ({ children }) => {
    const hook = useHook();
    const [courses, setCourses] = useState([]);
    const [careers, setCareers] = useState([]);

    const getCourses = async () => {
        try {
            const res = await axios.get(`${hook.endpoint}/courses`);
            setCourses(res.data.response)
        } catch (error) {
            // Handle errors
        }
    }

    const getCareers = async () => {
        try {
            const res = await axios.get(`${hook.endpoint}/careers`);
            setCareers(res.data.response)
        } catch (error) {
            // Handle errors
        }
    }


    useEffect(() => {
        getCourses();
        getCareers();
    }, [])
    return (
        <CallsContext.Provider value={{ courses, careers  }}>
            {children}
        </CallsContext.Provider>
    )
}

export const useCalls = () => {
    return useContext(CallsContext);
}
