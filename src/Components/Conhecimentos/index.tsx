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
    const iconDescriptions = {
      html: 'HTML é a linguagem padrão para criar páginas web.',
      css: 'CSS é uma linguagem usada para descrever a apresentação de documentos HTML.',
      js: 'JavaScript é uma linguagem de programação que permite criar interatividade em páginas web.',
      react: 'React é uma biblioteca JavaScript para construir interfaces de usuário.',
      typescript: 'TypeScript é um superconjunto do JavaScript que adiciona tipagem estática.',
      styledcomponents: 'Styled Components é uma biblioteca para estilizar componentes em React usando CSS-in-JS.',
      mui: 'Material-UI é uma biblioteca de componentes React que implementa o Material Design.',
      wordpress: 'WordPress é um sistema de gerenciamento de conteúdo (CMS) popular que permite criar e gerenciar sites e blogs com facilidade.'
    };

    const [text,setText]= useState<string>('*passe o cursor do mouse no card para ler*')

    

    const handleMouseEnter = (description:string) => {
      setText(description);
    };
    const handleMouseLeave = () => {
      setText('*passe o cursor do mouse no card para ler*');
    };

  return (
    <>
    <Grid sx={{
      marginTop:'100px',
      display:'grid',
      gridTemplateColumns:'450px 500px',
      gap:'100px',
      justifyContent:'center',

      '@media (max-width: 1200px)': {
        gridTemplateColumns:'1fr',
        textAlign:'center'
       },
       
    }}>
      <Box sx={{
        justifyContent:'center'
      }}>
        
     
          <Typography  sx={{
            display:'flex',
            color:'#fff',
            fontSize:'2em',
            '@media (max-width: 1200px)': {
              justifyContent:'center',
            textAlign:'center'
       },
          }}>
            Conhecimentos
            <Typography sx={{color:'#986dff',fontSize:'1.2em', alignItems:'center',textAlign:'center'}}> .</Typography>
          </Typography>

          <Typography sx={{
            color:'#fff',
            transition:'0.4s',
            fontSize:'1.2em',
            '@media (max-width: 1200px)': {
              display:'none',
              justifyContent:'center'
       },
          }}>
            {text}
          </Typography>
          </Box>

      <Box sx={{
        display:'flex',
        gap:"20px",
        flexWrap:'wrap',
        alignItems:"center",
        '@media (max-width: 1200px)': {
              justifyContent:'center'
       },
          
      }}>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.html)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            >
          <FaHtml5 size={60}/>
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.css)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}>
          <FaCss3Alt size={60}/>
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.js)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}>
          <FaJs size={60}/>
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.react)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}>
          <FaReact size={60}/>
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.typescript)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}>
          <SiTypescript size={60} />
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.styledcomponents)}
            onMouseLeave={handleMouseLeave} 
           sx={customTypographyStyles}>
          <SiStyledcomponents size={60} />
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.mui)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}>
          <SiMui size={60} />
        </Typography>
        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.wordpress)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}>
          <FaWordpress size={60} />
        </Typography>
      </Box>



    </Grid>

    {/* footer */}
    <Box sx={{
      marginTop:'100px'
    }}>
      <Typography sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'5px',
        color:'#fff',
        marginTop:'50px',
        paddingBottom:'30px',
        textAlign:'center',
        fontSize:'1.4em',
        '@media (max-width: 1200px)': {
          fontSize:'1em'
   },
      }} >Copyright © <Typography sx={{color:'#986dff',fontSize:'1.2em'}}>Ebert Palmeira</Typography></Typography>
    </Box>
    </>
  )
}

export default Conhecimentos