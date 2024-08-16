import React from 'react'
import  {Box, Button, Grid,Typography}  from '@mui/material'
import code from '../../imgs/code.svg'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import './styles.css'



const Main = () => {
  return (
    <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',marginTop:'50px',color:'#fff',alignItems:'center',gap:'200px'}}>

        <Grid  sx={{alignItems:'center'}}>
            <Grid className='sobre' sx={{marginBottom:'20px'}}>
                <Typography 
                    sx={{fontSize:'20px',
                        marginBottom:'10px',
                        fontWeight:'600'
                    }}>
                    Olá, eu sou
                    </Typography>
                
                <Typography 
                    sx={{fontSize:'2.5em',
                    marginBottom:'10px',
                    fontWeight:'600',
                    '@media (max-width:600px)': {
                    fontSize: '2.1em', 
                    },

                }}>
                    Ebert Palmeira
                </Typography>
                <Typography 
                    sx={{
                        fontSize:'20px',
                        marginBottom:'10px',
                        fontWeight:'600'
                        }}> 
                        Front-end Developer
                        </Typography>
            </Grid>
            <Grid  xs={12} sm={6} md={4} lg={3} sx={{
                display:"grid",
                textAlign:'center',
                alignItems:'center',
                gap: '20px',
                
                }} className='btn' >
                <Button sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        background: 'linear-gradient(to right, #120f2b, #6a97ff);',
                        border:' 1px solid #6a97ff',
                        transition:'0.5s',
                        width: '300px',
                        height:'70px',
                        gap: '10px',
                        color:'#fff',

                        '@media (max-width:400px)':{
                        width: '200px',
                        height:' 70px',
                        
                    }
                    
                }} className='link'>
                    <FaLinkedin size={30} style={{background:'none',color:'#fff'}}/>
                   
                    <a href='' style={{background:'none',color:'#fff'}}> LinkedIn</a>
                </Button>

                    <Button sx={{
                        background: 'linear-gradient(to right, #17152e, #8a2be2)',
                        border:' 1px solid #8a2be2',
                        transition:' 0.5s',
                        width: '300px',
                        height:'70px',
                        gap: '10px',

                        '@media (max-width:400px)':{
                        width: '200px',
                        height:' 70px',

                        }
                    }} className='git'>
                    <FaGithub size={30} style={{background:'none',color:'#fff'}}/>
                   
                    <a href='' style={{background:'none',color:'#fff'}}>GitHub</a>
                    </Button>
            </Grid>

        </Grid>
        <Box className="imgPc">
            <img  src={code} alt="" />
        </Box>


    </Grid>
  )
}

export default Main