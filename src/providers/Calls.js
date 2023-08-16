import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useHook } from "./Hook";

const CallsContext = createContext(null);

export const Calls = ({ children }) => {
    const hook = useHook();
    const [courseCategories, setCourseCategories] = useState([]);
    const [careerCategories, setCareerCategories] = useState([]);
    const [careerCategory, setCareerCategory] = useState([]);
    const [careerDetail, setCareerDetail] = useState([]);
    const [categoryDetails, setCategoryDetails] = useState([]);

    const getCourseCategories = async () => {
        try {
            const res = await axios.get(`${hook.endpoint}/courses`);
            setCourseCategories(res.data.response)
        } catch (error) {
            // Handle errors
            setCourseCategories([])
        }
    }

    const getCareerCategories = async () => {
        try {
            const res = await axios.get(`${hook.endpoint}/career_categories`);
            setCareerCategories(res.data.response)
        } catch (error) {
            // Handle errors
            setCareerCategories([])
        }
    }

    const getCareerCategory = async (category) => {
        setCareerCategory([])
        try {
            const res = await axios.get(`${hook.endpoint}/careers/${category}`);
            setCareerCategory(res.data)
            // setCareerCategory([])
            // if(res.data.id) {
            //     console.log("Here!");
            // }
            // console.log(res.data)
        } catch (error) {
            // Handle errors
            setCareerCategory([])
        }
    }

    const specificCareerCategory = async (category) => {
        // setCareerCategory([])
        try {
            const res = await axios.get(`${hook.endpoint}/career/${category}`);
            // setCareerCategory(res.data)
        } catch (error) {
            // Handle errors
            // setCareerCategory([])
        }
    }

    const getCareerDetail = async (category, career) => {
        setCareerDetail([])
        try {
            const res = await axios.get(`${hook.endpoint}/careers/${category}/${career}`);
            setCareerDetail(res.data)
        } catch (error) {
            // Handle errors
            setCareerDetail([])
        }
    }

    const careerCategoryDetails = async (category) => {
        setCategoryDetails([])
        try {
            const res = await axios.get(`${hook.endpoint}/career/${category}/details`);
            setCategoryDetails(res.data)
        } catch (error) {
            // Handle errors
            setCategoryDetails([])
        }
    }


    useEffect(() => {
        getCareerCategories();
        getCourseCategories();
    }, [])
    return (
        <CallsContext.Provider value={{ courseCategories, careerCategories, categoryDetails, specificCareerCategory, careerCategory, getCareerDetail, careerDetail, getCareerCategory, careerCategoryDetails }}>
            {children}
        </CallsContext.Provider>
    )
}

export const useCalls = () => {
    return useContext(CallsContext);
}
