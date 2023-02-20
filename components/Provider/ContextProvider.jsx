import React, { createContext, useState } from 'react'
export const themeContext = createContext('')
export const setThemeContext = createContext('')
export const coverContext = createContext('')
export const setCoverContext = createContext('')
export const wisdomContext = createContext('')
export const setWisdomContext = createContext('')
function ContextProvider({children}) {
    const [theme,setTheme] = useState('dark')
    const [wisdom,setWisdom] = useState([])
    const [cover,setCover] = useState([])
  return (
    <themeContext.Provider value={theme}>
        <setThemeContext.Provider value={setTheme}>
          <wisdomContext.Provider value={wisdom}>
            <setWisdomContext.Provider value={setWisdom}>
              <coverContext.Provider value={cover}>
                <setCoverContext.Provider value={setCover}>
                    <div className={theme==='dark'? 'dark w-full h-full':'w-full h-full'}>
                    {children}
                  </div>
                </setCoverContext.Provider>
              </coverContext.Provider>
            </setWisdomContext.Provider>
          </wisdomContext.Provider>
        </setThemeContext.Provider>
    </themeContext.Provider>
  )
}

export default ContextProvider