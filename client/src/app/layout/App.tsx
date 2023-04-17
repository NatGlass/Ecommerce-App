import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog'
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App