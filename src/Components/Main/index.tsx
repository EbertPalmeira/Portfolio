import { Grid,Box,Avatar,Typography,Link } from '@mui/material'
import React from 'react'
import imgEu from '../../imgs/eucode.svg'
import {FaReact,FaJs,FaHtml5 ,FaInstagram,FaLinkedin,FaGithub,FaStackOverflow} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";


import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';

const html = keyframes`
     0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px) translateX(-20px);

  }

  100% {
    transform: translateY(0px);
  }
`;

const js = keyframes`
   0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px) translateX(10px);
  }

  100% {
    transform: translateY(0px);
  } left: 300px;
  }
  100% {
    top: 200px;
    left: 200px;
    transform: rotate(360deg);
  }
`;

const spin = keyframes`
        0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px) translateX(10px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const types = keyframes`
        0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px) translateX(10px);
  }

  100% {
    transform: translateY(0px);
  }
`;


const bounceAnimation = keyframes`
0% {
  transform: translateY(0px);
}

50% {
  transform: translateY(-20px);
}

100% {
  transform: translateY(0px);
}
`;


const AnimatedIcon = styled(FaReact)(({ theme }) => ({
    fontSize: '4rem',
    color: theme.palette.primary.main,
    transition: 'color 0.3s',
    animation: `${spin} 10s linear infinite`,

    
  }));
const AnimatedHtml = styled(FaHtml5)(({ theme }) => ({
    fontSize: '4rem',
    color: theme.palette.primary.main,
    transition: 'color 0.3s',
    animation: `${html} 10s linear infinite`,

    
  }));

const AnimatedJJs = styled(FaJs)(({ theme }) => ({
    fontSize: '4rem',
    color: theme.palette.primary.main,
    transition: 'color 0.3s',
    animation: `${js} 10s linear infinite`,

    
  }));

  const AnimatedTs = styled(SiTypescript)(({ theme }) => ({
    fontSize: '4rem',
    color: theme.palette.primary.main,
    transition: 'color 0.3s',
    animation: `${types} 10s linear infinite`,

    
  }));

 

  

 

const Main = () => {
  return (
    <Grid   sx={{
        display:'grid',
        gridTemplateColumns:'400px 400px',
        justifyContent:'center',
        gap:'50px',
        border:'2px solid #1f1f1f',
        width:'1000px',
        margin:'0 auto',
        padding:'50px',
        position: 'relative',
        overflow: 'hidden',
    }}>
        <Grid >   
           
            <Avatar  src={imgEu} sx={{
                width:'350px',
                height:'350px',
                animation: `${bounceAnimation} 5s ease-in-out infinite`, // Animação aplicada
            }}/>

        <AnimatedHtml size={55} sx={{
                position:'absolute',
                alignItems:'center',
                margin:'0',
                padding:'0',
                color:'#FF4500',
                bottom:'350px',
                borderRadius:'10px',
                background:'#000',  
                }}/>

        <AnimatedJJs size={50} sx={{
         position:'absolute',
         alignItems:'center',
         textAlign:'center',
         color:'yellow',
         background:'#000',
         marginLeft:'250px'
            
            
        }}/>

        <AnimatedIcon size={50} sx={{
                position:'absolute',
                alignItems:'center',
                textAlign:'center',
                color:'#4169E1',
                bottom:'300px',
                marginLeft:'280px',
                borderRadius:'10px',
                background:'#000', 

                
                
        }}/>

            <AnimatedTs size={45} sx={{
                     position:'absolute',
                     alignItems:'center',
                     textAlign:'center',
                     color:'#1E90FF	',
                    border:'1px solid #000',
                    background:'#000', 
                }}  
                />

        
           
        </Grid>


        <Box>
            <Typography sx={{
                color:"#986dff",
                display:'flex',
                gap:'10px',
                fontSize:'1.6em'
                }}>
                Quem sou.
            </Typography>

            <Typography sx={{fontSize:'2em',color:"#fff"}}>
                Ebert Palmeira
            </Typography>

            <Typography sx={{fontSize:'1.2em',color:"#fff",marginBottom:'20px'}}>
                Frontend Developer
            </Typography>

            <Typography sx={{
                color:'#9ca3af',
                 fontFamily: 'Archivo, Arial, sans-serif',
            }}>
                Meu nome é Ebert, sou desenvolvedor Front-end. Sempre fui um entusiasta das tecnologias e estou constantemente em busca de conhecimento, seja através do YouTube ou de cursos online. Desenvolvo interfaces modernas e de alta qualidade, concentrando-me em performance, animações e responsividade. Além disso, crio projetos independentes para praticar e aprimorar meus conhecimentos.
            </Typography>

            <Grid sx={{
                display:'flex',
                gap:'20px',
                marginTop:'30px'
                
                }}>
                <Typography sx={{padding:'10px 15px',border:'5px solid #1f1f1f',borderRadius:'20px'}}>
                    <Link sx={{cursor:'pointer'}}> <FaInstagram color='#986dff' size={30}/> </Link>   
                </Typography>

                <Typography sx={{padding:'10px 15px',border:'5px solid #1f1f1f',borderRadius:'20px'}}>
                   <Link sx={{cursor:'pointer'}}> <FaLinkedin color='#986dff' size={30}/> </Link>
                </Typography>

                <Typography sx={{padding:'10px 15px',border:'5px solid #1f1f1f',borderRadius:'20px'}}>
                    <Link sx={{cursor:'pointer'}}> <FaGithub color='#986dff' size={30}/> </Link>
                </Typography>

                <Typography sx={{padding:'10px 15px',border:'5px solid #1f1f1f',borderRadius:'20px'}}>
                    <Link sx={{cursor:'pointer'}}> <FaStackOverflow color='#986dff' size={30}/> </Link>
                </Typography>
            </Grid>

        </Box>






    </Grid>
  )
}

export default Main