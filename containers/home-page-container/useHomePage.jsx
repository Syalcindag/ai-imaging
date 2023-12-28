"use client"
import { useState, useContext, createContext, useMemo } from "react";

export const HomePageContext = createContext();

export const  HomePageProvider = ({children}) =>  {
    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const [isSubmiting, setIsSubmiting] = useState(false);

    const generateImage = async () => {
        try {
            setIsSubmiting(true)
            const response = await fetch('/api/generate', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt,
                    width: 768,
                    height: 768,
                    scheduler: "K_EULER",
                    num_outputs: 1,
                    guidance_scale: 7.5,
                    num_inference_step: 50,
                }),
            });

            if(!response.ok) {
                throw new Error('Failed to gemerate')
            }

            const generateImage = await response.json();
            setImage(generateImage);
            setError(null);
        } catch (error) {
            setError(error)
            throw new Error(error);
        }

        setIsSubmiting(false);
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
        image,
        error,
        isSubmiting
    }),[prompt, image, error, isSubmiting]);

    return (
    <HomePageContext.Provider value={data}>
        {children}
    </HomePageContext.Provider>)
}

export const useHomePage = () => {
    const context = useContext(HomePageContext);
    return context;
}