import React, { createContext, useState } from 'react'
export const themeContext = createContext('')
export const setThemeContext = createContext('')
function ContextProvider({children}) {
    const [theme,setTheme] = useState('dark')
  return (
    <themeContext.Provider value={theme}>
        <setThemeContext.Provider value={setTheme}>
                    <div className={theme==='dark'? 'dark w-full h-full':'w-full h-full'}>
                    {children}
                  </div>
        </setThemeContext.Provider>
    </themeContext.Provider>
  )
}

export default ContextProvider