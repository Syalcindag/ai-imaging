"use client"
import { useState, useContext, createContext, useMemo } from "react";

export const HomePageContext = createContext();

export const  HomePageProvider = ({children}) =>  {
    const [prompt, setPrompt] = useState('');
    const generateImage = () => {
        console.log('generateImage')
        // api call
    }

    const changePrompt = (title) => {
        setPrompt(title);
        window.scrollTo(0,0)
    }

    const data = useMemo(() =>({
        prompt,
        setPrompt,
        generateImage,
        changePrompt,
    }),[prompt]);

    return (
    <HomePageContext.Provider value={data}>
        {children}
    </HomePageContext.Provider>)
}

export const useHomePage = () => {
    const context = useContext(HomePageContext);
    return context;
}