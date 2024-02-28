import React, { createContext, useState, useContext } from 'react';

// Create a context
const QueueContext = createContext();

// Create a provider component
export const QueueProvider = ({ children }) => {
    const [queue, setQueue] = useState([]);

    return (
        <QueueContext.Provider value={{ queue, setQueue }}>
            {children}
        </QueueContext.Provider>
    );
};

// Custom hook to use the music context
export const useQueue = () => useContext(QueueContext);