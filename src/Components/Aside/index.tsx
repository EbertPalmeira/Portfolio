import React from 'react'

import {  Box, Grid, Link,Typography } from '@mui/material';


const Aside = () => {
  return (
   <Grid container sx={{
      marginTop:'100px',
      display:'grid',
      justifyContent:'center'
   }}>
     <Typography sx={{
      display:'flex',
      justifyContent:'center',
      color:'#fff',
      fontSize:'2em',
      alignItems:'center'
     }}>
        Projetos
        <Typography sx={{color:'#986dff',fontSize:'1.2em', alignItems:'center',textAlign:'center'}}> .</Typography>
     </Typography>

     <Grid sx={{
        display:'flex',
        flexWrap:'wrap',
        gap:'50px'
     }}>

     <Box>
        <Typography sx={{ color:'#fff'}} >
            Jokepô
        </Typography>
     </Box>

     <Box>
     <Typography sx={{ color:'#fff'}} >
            QuizWeb
        </Typography>
     </Box>
     <Box></Box>
     </Grid>
   </Grid>
  )
}

export default Aside