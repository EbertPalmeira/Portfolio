import { useState } from 'react'
import {Grid,Box, Typography} from '@mui/material'
import { FaHtml5,FaCss3Alt,FaReact,FaWordpress,FaNodeJs } from "react-icons/fa";
import { SiTypescript,SiStyledcomponents,SiMui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Conhecimentos = () => {

  useEffect(() => {
    AOS.init({
      duration: 7000, 
      once: true,     
    });
  }, []);

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
      wordpress: 'WordPress é um sistema de gerenciamento de conteúdo (CMS) popular que permite criar e gerenciar sites e blogs com facilidade.',
      Node: "O Node.js é um ambiente de execução de JavaScript no lado do servidor, permitindo que desenvolvedores criem aplicações rápidas e escaláveis usando JavaScript fora do navegador.",
      mysql:"O MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto, que utiliza a linguagem SQL para armazenar, gerenciar e manipular dados de forma estruturada em tabelas.",
      next:'O Next.js é um framework de React para desenvolvimento de aplicações web, que oferece recursos como renderização do lado do servidor (SSR), geração de páginas estáticas (SSG), roteamento automático e otimização de desempenho, facilitando a criação de sites rápidos e escaláveis.'
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
            data-aos="fade-down"
            data-aos-duration="3000"
            
            >
          <FaHtml5 size={60}/>
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.css)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-easing="linear"
            >
              
          <FaCss3Alt size={60}/>
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.js)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-down"
            data-aos-duration="3000"
            
            >
          <IoLogoJavascript size={60}/>
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.react)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-easing="linear"
            >
          <FaReact size={60}/>
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.typescript)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            >
          <SiTypescript size={60} />
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.styledcomponents)}
            onMouseLeave={handleMouseLeave} 
           sx={customTypographyStyles}
           data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            data-aos-easing="linear"
           >
          <SiStyledcomponents size={60} />
        </Typography>

        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.mui)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            
            >
          <SiMui size={60} />
        </Typography>
        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.wordpress)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            data-aos-easing="linear"
            >
          <FaWordpress size={60} />
        </Typography>

        
        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.Node)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            data-aos-easing="linear"
            >
          <FaNodeJs size={60} />
        </Typography>
        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.mysql)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            data-aos-easing="linear"
            >
          <DiMysql size={60} />
        </Typography>
        <Typography onMouseEnter={() => 
            handleMouseEnter(iconDescriptions.next)}
            onMouseLeave={handleMouseLeave} 
            sx={customTypographyStyles}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            data-aos-easing="linear"
            >
          <SiNextdotjs size={60} />
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