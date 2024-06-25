import React, { useState } from 'react'

export const ArrowFunc = () => {
    const[theme,setTheme]=useState('light');
    const toggleThemeChange = () =>{
        setTheme(theme==='light'?'dark':'light')
    }
  return (
    <div style={{background:theme==='light'?"#fff":"#333"}}>
        <button onClick={toggleThemeChange}>Toggle Theme</button>
    </div>
  )
}