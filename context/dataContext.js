import { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const host = 'http://localhost:3000';
    const [data, setData] = useState([]);

    // Putting data into a global state by using Context API
    const refreshData = async () => {
        try {
            const res = await fetch(`${host}/api/hello`);
            const latestData = await res.json();
            setData(latestData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <DataContext.Provider
            value={{
                data,
                refreshData
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };