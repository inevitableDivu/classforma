import React, { useContext } from 'react'

const ThemeContextApi = React.createContext();

export function useTheme() {
    return useContext(ThemeContextApi)
}

function ThemeContext({ children }) {

    function setTheme(themeColor, type) {
        localStorage.setItem('annotation-theme-color', JSON.stringify({ themeColor: themeColor, type: type }))
    }

    function getTheme() {
        const data = localStorage.getItem('annotation-theme-color')
        return JSON.parse(data)
    }

    const contextApi = {
        setTheme,
        getTheme
    }
    return (
        <ThemeContextApi.Provider value={contextApi}>
            {children}
        </ThemeContextApi.Provider>
    )
}

export default ThemeContext
