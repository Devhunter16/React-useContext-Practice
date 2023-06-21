// Importing our component to be used in the return statement below.
import FunctionContextComponent from './FunctionContextComponent';
import ThemeProvider from './ThemeContext';

export default function App() {

  // FunctionContextComponent is wrapped in the ThemeProvider which provides values 
  // within the ThemeContext to any components or elements wrapped within it.
  return (
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
  );
};