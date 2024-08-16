
import { Grid } from '@mui/material'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Poppins", sans-serif', 
      
      
    },
  });

  return (
    <Grid sx={{background:'black',margin:'0'}}>
      <ThemeProvider theme={theme}>
      <Header />
      <Main/>
      </ThemeProvider>
    </Grid>
  )
}

export default App
