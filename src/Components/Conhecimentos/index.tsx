import React, { useState } from 'react'
import {Grid,Box, Typography} from '@mui/material'
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaWordpress } from "react-icons/fa";
import { SiTypescript,SiStyledcomponents,SiMui } from "react-icons/si";

const Conhecimentos = () => {

  const customTypographyStyles = () => ({
    padding:'20px',
    border:'2px solid #1f1f1f',
    color:'#986dff',
    transition:"0.5s",

    ':hover':{
      border:'2px solid #986dff',
    }

    })

    const [text,setText]= useState('')


  return (
    <>
    <Grid sx={{
      marginTop:'50px',
      display:'grid',
      gridTemplateColumns:'450px 500px',
      gap:'100px',
      justifyContent:'center',
    }}>
      <Box >
        
     
          <Typography sx={{
            display:'flex',
            color:'#fff',
            fontSize:'2em',
          }}>
            Conhecimentos
            <Typography sx={{color:'#986dff',fontSize:'1.2em', alignItems:'center',textAlign:'center'}}> .</Typography>
          </Typography>

          <Typography sx={{

          }}>
            {text}
          </Typography>
          </Box>

      <Box sx={{
        display:'flex',
        gap:"20px",
        flexWrap:'wrap',
        alignItems:"center"
          
      }}>

        <Typography sx={customTypographyStyles}>
          <FaHtml5 size={60}/>
        </Typography>

        <Typography sx={customTypographyStyles}>
          <FaCss3Alt size={60}/>
        </Typography>

        <Typography sx={customTypographyStyles}>
          <FaJs size={60}/>
        </Typography>

        <Typography sx={customTypographyStyles}>
          <FaReact size={60}/>
        </Typography>

        <Typography sx={customTypographyStyles}>
          <SiTypescript size={60} />
        </Typography>

        <Typography sx={customTypographyStyles}>
          <SiStyledcomponents size={60} />
        </Typography>

        <Typography sx={customTypographyStyles}>
          <SiMui size={60} />
        </Typography>
      </Box>



    </Grid>

    {/* footer */}
    <Box sx={{
      marginTop:'100px'
    }}>
      <Typography >a</Typography>
    </Box>
    </>
  )
}

export default Conhecimentos