import React from 'react'
import {Grid, Typography} from '@mui/material'
import { FaLaptopCode } from "react-icons/fa";
import { RiFileCodeLine } from "react-icons/ri";
import { PiWebhooksLogoBold,PiUsersThreeDuotone } from "react-icons/pi"




const Servicos = () => {


  return (
    <> 
    <Typography sx={{
      display:'flex',
      justifyContent:'center',
      color:'#fff',
      fontSize:'2em',
      alignItems:'center',
      marginTop:'150px'
     }}>
       Serviços
        <Typography sx={{color:'#986dff',fontSize:'1.2em', alignItems:'center',textAlign:'center'}}> .</Typography>
     </Typography>
    <Grid container sx={{
        marginTop:'50px',
        display:'grid',
        gridTemplateColumns:'repeat(3,380px)',
        justifyContent:'center',
        gap:'30px',
        

    }}>


        <Grid sx={{
            border: '2px solid #1f1f1f',
            padding:'30px',
            transition:'0.7s',
            alignItems:"center",
            borderRadius:'10px',
            textAlign:'center',
            ':hover':{
                border: '2px solid #986dff'
            }
        }}>
            <RiFileCodeLine size={50} color='#986dff' style={{marginBottom:'10px'}}/>

            <Typography sx={{
                fontSize:'1.4em',
                color:"#fff",
                fontWeight:'bold',
                marginBottom:'10px'
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

        <Grid sx={{
            border: '2px solid #1f1f1f',
            borderRadius:'10px',
            padding:'30px',
            transition:'0.7s',
            alignItems:"center",
            textAlign:'center',
            ':hover':{
                border: '2px solid #986dff'
            }
        }}>
            <PiWebhooksLogoBold size={50} color='#986dff' style={{marginBottom:'10px'}}/>

            <Typography sx={{
                fontSize:'1.4em',
                color:"#fff",
                fontWeight:'bold',
                marginBottom:'10px'
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

        <Grid sx={{
            border: '2px solid #1f1f1f',
            borderRadius:'10px',
            padding:'30px',
            transition:'0.7s',
            alignItems:"center",
            textAlign:'center',
            ':hover':{
                border: '2px solid #986dff'
            }
        }}>
            <PiUsersThreeDuotone size={50} color='#986dff' style={{
                marginBottom:'10px',}}
                />

            <Typography sx={{
                fontSize:'1.4em',
                color:"#fff",
                fontWeight:'bold',
                marginBottom:'10px'
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