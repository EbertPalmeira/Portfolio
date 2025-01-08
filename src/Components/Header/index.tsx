import  { Button, Grid,Typography,Avatar}  from '@mui/material'
import code from '../../imgs/code.svg'
import { FaLinkedin,FaGithub  } from "react-icons/fa";
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    const TypingEffect: React.FC<{ text: string; speed?: number; onComplete?: () => void; style?: React.CSSProperties }> = ({ text, speed = 100, style }) => {

        const [displayedText, setDisplayedText] = useState('');
        const [isTyping, setIsTyping] = useState(true);
      
        useEffect(() => {
          if (isTyping) {
            const handle = setInterval(() => {
              setDisplayedText(prev => {
                if (prev.length < text.length) {
                  return text.substring(0, prev.length + 1);
                } else {
                  setIsTyping(false);
                  clearInterval(handle);
                  return prev;
                }
              });
            }, speed);
            return () => clearInterval(handle);
          }
        }, [isTyping, text, speed]);
        return <Typography style={style}>
            {displayedText}
            </Typography>
    }
    useEffect(() => {
        AOS.init({
          duration: 7000, 
          once: true,     
        });
      }, []);


  return (
    <Grid container spacing={2} sx={{
      display:'flex',
      justifyContent:'center',
      marginTop:'50px',
      color:'#fff',
      alignItems:'center',
      gap:'200px',
      marginBottom:'100px',
      
      '@media (max-width:800px)':{
          gap:'100px'  
              }
      
      }}>

        <Grid  sx={{alignItems:'center',padding:'50px'}}
            data-aos="fade-down"
         data-aos-duration="3000"
        
        >
            <Grid className='sobre' sx={{marginBottom:'20px',
                '@media (max-width: 600px)': {
                    fontSize: '16px', // Ajusta o tamanho da fonte para telas menores
          },
            }}>
                <TypingEffect text='Olá, eu sou' speed={150} style={{
                    fontSize:'20px',
                    marginBottom:'10px',
                    fontWeight:'600'
                }}/>
                
                    
                    
                <TypingEffect  text='Ebert Palmeira.' speed={100}
                style={{
                    fontSize:'2.5em',
                    marginBottom:'10px',
                    fontWeight:'700',
                    fontStyle:'normal',
                    
                }}
                />

                <TypingEffect  text='Front-end Developer.' speed={100}
                style={{
                    fontSize:'20px',
                    marginBottom:'10px',
                    fontWeight:'700',
                    fontStyle:'normal',
                    fontFamily:'Poppins'
                    
                }}
                />
                
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
                   
                    <a href='https://www.linkedin.com/in/ebert-palmeira-613a77228/' style={{background:'none',color:'#fff'}}> LinkedIn</a>
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
                   
                    <a href='https://github.com/EbertPalmeira' style={{background:'none',color:'#fff'}}>GitHub</a>
                    </Button>
            </Grid>

        </Grid>

        <Grid sx={{
            display:'absolute',
            justifyContent:'center',
            position: 'relative',
            textAlign:'center',
            overflow: 'hidden',
        
            
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            >
            <Avatar src={code} sx={{
                 width:550,
                 height:550,

                 '@media (max-width:500px)':{
                  display:'none'

                  
                  
              }
             
             } }/>
            
            
           
        </Grid>


    </Grid>
  )
}

export default Header