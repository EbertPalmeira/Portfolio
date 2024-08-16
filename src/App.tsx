
import { Grid } from '@mui/material'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
 

  return (
    <Grid sx={{background:'black',margin:'0'}}>
      <Header />
      <Main/>
    </Grid>
  )
}

export default App
