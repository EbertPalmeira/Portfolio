import React,{useState,useEffect} from 'react'
import  {Box, Button, Grid,Typography,Avatar}  from '@mui/material'
import code from '../../imgs/code.svg'
import { FaLinkedin,FaGithub ,FaReact,FaJs,FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

import './styles.css'
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';



const Main = () => {

    const spin = keyframes`
    0% {
    left: 100px;
    top: 0px;
  }
  25% {
    left: 200px;
    transform: rotate(90deg);
  }
  50% {
    top: 200px;
  }
  75% {
    left: 100px;
  }
  100% {
    left: 100px;
    top: 0px;
    transform: rotate(360deg);
  }
`;

const js = keyframes`
        0% {
    top: 500px;
    left: 500px;
  }
  25% {
    left: 400px;
    top: 300px;
  }
  50% {
    top: 200px;
    left: 200px;
  }
  75% {
    top: 500px;
    left: 300px;
  }
  100% {
    top: 500px;
    left: 500px;
    transform: rotate(360deg);
  }
`;
const html = keyframes`
      0% {
    top: 300px;
    left: 400px;
  }
  25% {
    left: 200px;
    top: 200px;
  }
  50% {
    top: 100px;
    left: 100px;
  }
  75% {
    top: 300px;
    left: 300px;
  }
  100% {
    top: 300px;
    left: 400px;
    transform: rotate(360deg);
  }
`;
const types = keyframes`
   0% {
    top: 500px;
    left: 50px;
  }
  25% {
    left: 200px;
    top: 300px;
  }
  50% {
    top: 100px;
    left: 100px;
  }
  75% {
    top: 300px;
    left: 80px;
  }
  100% {
    top: 500px;
    left: 50px;
    transform: rotate(360deg);
  }
`;
const boots = keyframes`
   0% {
    top: 500px;
    left: 200px;
  }
  25% {
    left: 500px;
    top: 300px;
  }
  50% {
    top: 50px;
    left: 100px;
  }
  75% {
    top: 300px;
    left: 400px;
  }
  100% {
    top: 500px;
    left: 200px;
    transform: rotate(360deg);
  }
`;


        const AnimatedIcon = styled(FaReact)(({ theme }) => ({
            fontSize: '4rem',
            color: theme.palette.primary.main,
            transition: 'color 0.3s',
            animation: `${spin} 10s linear infinite`,

            
          }));

          const AnimatedJJs = styled(FaJs)(({ theme }) => ({
            fontSize: '4rem',
            color: theme.palette.primary.main,
            transition: 'color 0.3s',
            animation: `${js} 10s linear infinite`,

            
          }));
          const AnimatedHtml = styled(FaHtml5)(({ theme }) => ({
            fontSize: '4rem',
            color: theme.palette.primary.main,
            transition: 'color 0.3s',
            animation: `${html} 10s linear infinite`,

            
          }));
          const AnimatedTs = styled(SiTypescript)(({ theme }) => ({
            fontSize: '4rem',
            color: theme.palette.primary.main,
            transition: 'color 0.3s',
            animation: `${types} 10s linear infinite`,

            
          }));
          const AnimatedBoots = styled(BsBootstrapFill)(({ theme }) => ({
            fontSize: '4rem',
            color: theme.palette.primary.main,
            transition: 'color 0.3s',
            animation: `${boots} 10s linear infinite`,

            
          }));

  
  return (
    <Grid container spacing={2} sx={{
      display:'flex',
      justifyContent:'center',
      marginTop:'50px',
      color:'#fff',
      alignItems:'center',
      gap:'200px',
      
      '@media (max-width:800px)':{
          gap:'100px'

                  
                  
              }
      
      }}>

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
                    fontWeight:'700',
                    fontStyle:'normal',
                    '@media (max-width:600px)': {
                    fontSize: '2.1em', 
                    },

                }}
                >
                Ebert Palmeira.
            
             
                </Typography>
                <Typography 
                    sx={{
                        fontSize:'20px',
                        marginBottom:'10px',
                        fontWeight:'700',
                        fontStyle:'normal',
                        fontFamily:'Poppins'

                        }}> 
                        Front-end Developer.
                        
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
                        gap: '20px',
                        color:'#fff',
                        textTransform:'capitalize',
                        fontSize:'1em',

                        ':hover':{
                            padding:'10px',
                            transform: 'scale(1.05)',
                        },

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
                        gap: '20px',
                        textTransform:'capitalize',
                        fontSize:'1em',

                        ':hover':{
                            padding:'10px',
                            transform: 'scale(1.05)',
                        },

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
        <Grid className="imgPc" sx={{
            display:'absolute',
            justifyContent:'center',
            position: 'relative',
            textAlign:'center',
            overflow: 'hidden',
        
            
            }}>
            <Avatar src={code} sx={{
                 width:550,
                 height:550,

                 '@media (max-width:500px)':{
                  display:'none'

                  
                  
              }
             
             } }/>
            
            
            <AnimatedIcon sx={{
                position:'absolute',
                alignItems:'center',
                textAlign:'center',
                color:'#4169E1'
                
                
                }}/>

                <AnimatedJJs sx={{
                    position:'absolute',
                    alignItems:'center',
                    textAlign:'center',
                    color:'yellow'
                }}/>

                <AnimatedHtml sx={{
                    position:'absolute',
                    alignItems:'center',
                    textAlign:'center',
                    color:'#FF4500'
                }}/>

                <AnimatedTs sx={{
                     position:'absolute',
                     alignItems:'center',
                     textAlign:'center',
                     color:'#1E90FF	'
                }}
                
                />

                <AnimatedBoots sx={{
                    position:'absolute',
                    alignItems:'center',
                    textAlign:'center',
                    color:'#4B0082'
                }} />
        </Grid>


    </Grid>
  )
}

export default Main