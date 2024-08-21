import { Grid, Box } from '@mui/material';
import './App.css';
import Header from './Components/Nav';
import Nav from './Components/Header';
import Main from './Components/QuemSou';
import '@fontsource/archivo'; 

import { createTheme, ThemeProvider } from '@mui/material';
import Aside from './Components/Projetos';
import Servicos from './Components/Serviços';
import Conhecimentos from './Components/Conhecimentos';


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Archivo", sans-serif', 
    },
  });


  return (
    <Grid sx={{background:'#1C1C1C', margin:'0'}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Nav/>
        <Box id="quem-sou">
          <Main />
        </Box>
        <Box id="projetos">
          <Aside />
        </Box>
        <Box id="servicos">
          <Servicos />
        </Box>
        <Box id="conhecimentos">
          <Conhecimentos />
        </Box>
      </ThemeProvider>
    </Grid>
  );
}

export default App;

