import React, { createContext, useContext, useState, useEffect } from "react";
import { useHook } from "./Hook";

const CallsContext = createContext(null);

export const Calls = ({ children }) => {
    const hook = useHook();
    const [navCourses, setNavCourses] = useState([]);

    const getNavCourses = () => {
       fetch(`${hook.endpoint}/courses`
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        alert(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
    }
    

    useEffect(()=>{
    getNavCourses()
  },[])
    return (
        <CallsContext.Provider value={{ navCourses }}>
            {children}
        </CallsContext.Provider>
    )
}

export const useCalls = () => {
    return useContext(CallsContext);
}
