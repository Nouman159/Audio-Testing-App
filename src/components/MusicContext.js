import React, { createContext, useState, useContext } from 'react';

// Create a context
const MusicContext = createContext();

// Create a provider component
export const MusicProvider = ({ children }) => {
    const [currentMusic, setCurrentMusic] = useState(null);

    return (
        <MusicContext.Provider value={{ currentMusic, setCurrentMusic }}>
            {children}
        </MusicContext.Provider>
    );
};

// Custom hook to use the music context
export const useMusic = () => useContext(MusicContext);
