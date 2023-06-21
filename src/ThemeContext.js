import React, { useState, useContext } from 'react';

// Using the React.createContext() function to initially create a couple contexts. 
// This allows for us to pass important values to all of the children (including 
// the children of those children) wrapped in ThemeUpdateContext.Provider and 
// ThemeContext.Provider.
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
const ThemeGreetingContext = React.createContext();

// This is a custom hook we have to define in order to use ThemeContext outside of this 
// file. We're going to need to use it our FunctionContext component so we can access
// the darkTheme prop we're passing into ThemeContext.Provider.
export function useTheme() {
    return useContext(ThemeContext);
};

// This is a custom hook we have to define in order to use ThemeUpdateContext outside of 
// this file. We're going to need to use it our FunctionContext component so we can access
// the toggleTheme function prop we're passing into ThemeUpdateContext.Provider.
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
};

export function useThemeGreeting() {
    return useContext(ThemeGreetingContext);
};

// This function ThemeProvider is what we wrap child elements in that we want to inherit
// the function's values
export default function ThemeProvider({children}) {
  // Boolean useState which toggles darkTheme true or false.
  const [darkTheme, setDarkTheme] = useState(true);

  // Silly variable I defined to practice useContext a little more.
  const greeting = "Hello";

  // This function taggles the dark theme between enabled and disabled each time it's 
  // called.
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  };

  return (
    <ThemeUpdateContext.Provider value={toggleTheme}>
        <ThemeContext.Provider value={darkTheme}>
            <ThemeGreetingContext.Provider value={greeting}>
                {children}
            </ThemeGreetingContext.Provider>
        </ThemeContext.Provider>
    </ThemeUpdateContext.Provider>
  )
};