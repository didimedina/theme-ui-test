import React, { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import Card from './Card';


function App() {
  const [density, setDensity] = useState('standard')
  const actualTheme = theme(density)
  const handleClick = () => setDensity('low')
  //const handleClick = () => setDensity(1 - density)
  
  return (
    <ThemeProvider theme={actualTheme}>
        <Card />

        <button onClick={handleClick}>change density</button>

    </ThemeProvider>
  );
}

export default App;
