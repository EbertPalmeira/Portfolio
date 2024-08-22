import {Grid, Typography} from '@mui/material'
import { RiFileCodeLine } from "react-icons/ri";
import { PiWebhooksLogoBold,PiUsersThreeDuotone } from "react-icons/pi"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicos = () => {
  useEffect(() => {
    AOS.init({
      duration: 7000, 
      once: true,     
    });
  }, []);

  return (
    <> 
    <Typography 
      
      sx={{
      display:'flex',
      justifyContent:'center',
      color:'#fff',
      fontSize:'2em',
      alignItems:'center',
      marginTop:'150px'
     }}
     data-aos="fade-down"
      data-aos-duration="3000"
     >
       Serviços
        <Typography sx={{color:'#986dff',fontSize:'1.2em', alignItems:'center',textAlign:'center'}}> .</Typography>
     </Typography>


    <Grid sx={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       padding: '50px',
       gap: '30px',
       '@media (max-width: 1200px)': {
         gap: '20px',
         flexDirection: 'column',
       },
       '@media (max-width: 800px)': {
         flexDirection: 'column',
         gap: '20px',
       }

        

    }}>


        <Grid sx={{
         border: '2px solid #1f1f1f',
         padding: '30px',
         transition: '0.7s',
         borderRadius: '10px',
         textAlign: 'center',
         ':hover': {
           border: '2px solid #986dff'
         },
        }}
        data-aos="zoom-out-down"
        data-aos-duration="3000"
        >
            <RiFileCodeLine size={50} color='#986dff' style={{marginBottom:'10px'}}/>

            <Typography sx={{
                fontSize:'1.4em',
                color:"#fff",
                fontWeight:'bold',
                marginBottom:'10px'
                ,

                '@media (max-width:350px)':{
                   fontSize:'1em'
                }
            }}>
                Desenvolvimento

            </Typography>
            <Typography sx={{
                color:"#9ca3af",


            }}>
              Desenvolvo sites profissionais, portfólios, blogs e landing pages com um compromisso inabalável com a qualidade e a eficiência. 
              Cada projeto é concebido para ser rápido e altamente responsivo, garantindo que as aplicações ofereçam uma experiência de usuário impecável.

            </Typography>
        </Grid>

        <Grid   sx={{
         border: '2px solid #1f1f1f',
         padding: '30px',
         transition: '0.7s',
         borderRadius: '10px',
         textAlign: 'center',

         ':hover': {
           border: '2px solid #986dff'
         },
         
        }}
        data-aos="zoom-out-down"
        data-aos-duration="2500"
        >
            <PiWebhooksLogoBold size={50} color='#986dff' style={{marginBottom:'10px'}}/>

            <Typography sx={{
                fontSize:'1.4em',
                color:"#fff",
                fontWeight:'bold',
                marginBottom:'10px',

                '@media (max-width:350px)':{
                   fontSize:'1em'
                }
            }}>
                Motion

            </Typography>
            <Typography sx={{
                color:"#9ca3af",


            }}>
                Crio interações que não apenas transmitem uma sensação de modernidade, mas também capturam a atenção do usuário de maneira envolvente e intuitiva. 
                Minhas soluções são projetadas para se destacar visualmente e proporcionar uma experiência de uso fluida e agradável.

            </Typography>

        </Grid>

        <Grid   sx={{
          border: '2px solid #1f1f1f',
          padding: '30px',
          transition: '0.7s',
          borderRadius: '10px',
          textAlign: 'center',
          ':hover': {
            border: '2px solid #986dff'
          },
        }}
        data-aos="zoom-out-down"
        data-aos-duration="2000">
            <PiUsersThreeDuotone size={50} color='#986dff' style={{
                marginBottom:'10px',}}
                />

            <Typography sx={{
                fontSize:'1.4em',
                color:"#fff",
                fontWeight:'bold',
                marginBottom:'10px',
                '@media (max-width:350px)':{
                   fontSize:'1em'
                }
            }}>
                Users

            </Typography>
            <Typography sx={{
                color:"#9ca3af",


            }}>
                Proporciono a melhor experiência ao usuário ao estimular sua interação com um determinado produto ou serviço. 
                Além disso, utilizo constantemente as tecnologias mais populares no mundo da programação.

            </Typography>

        </Grid>
    </Grid>
    </>
  )
}

export default Servicos