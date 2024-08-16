import React from 'react'
import  {Box, Grid}  from '@mui/material'
import code from '../../imgs/code.svg'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import './styles.css'



const Main = () => {
  return (
    <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',marginTop:'50px',color:'#fff',alignItems:'center',gap:'200px'}}>

        <Grid xs={12} sm={6} md={4} lg={3} sx={{alignItems:'center'}}>
            <Grid  sx={{marginBottom:'20px'}}>
                <p style={{fontSize:'20px',marginBottom:'10px'}}>Olá, eu sou</p>
                <h2 style={{fontSize:'2.5em',marginBottom:'10px'}}>Ebert Palmeira</h2>
                <p style={{fontSize:'20px',marginBottom:'10px'}}> Front-end Developer</p>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} className='btn' >
                <button className='link'>
                    <FaLinkedin size={30} style={{background:'none',color:'#fff'}}/>
                   
                    <a href='' style={{background:'none',}}> LinkedIn</a>
                    </button>

                    <button  className='git'>
                    <FaGithub size={30} style={{background:'none',color:'#fff'}}/>
                   
                    <a href='' style={{background:'none'}}>GitHub</a>
                    </button>
            </Grid>

        </Grid>
        <Box>
            <img style={{width:'550px'}} src={code} alt="" />
        </Box>


    </Grid>
  )
}

export default Main