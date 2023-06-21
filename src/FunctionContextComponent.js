// Importing our custom hooks so we can use them in order to use their darkTheme value
// and their toggleTheme function in this component.
import { useTheme, useThemeUpdate, useThemeGreeting } from './ThemeContext';

export default function FunctionContextComponent() {
    // Here we're getting the values from ThemeContext by using the simple custom hooks
    // that we created in our ThemeContext component. These custom hooks allow easy access
    // to the variable and function we defined within that component so we can use them
    // here.
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const greeting = useThemeGreeting();

    // Some styling for the themes. Using the darkTheme value here.
    const themeStyles = {
        background: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '333',
        padding: '2rem',
        margin: '2rem'
    };

    // The button here uses the toggleTheme() function to toggle whether darkTheme = true
    // or false each time it is clicked. 
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>{greeting}</div>
        </>
    );
};