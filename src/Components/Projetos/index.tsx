import { Grid, Typography, Box, Avatar, Button } from '@mui/material';
import { FaGithub, FaGamepad } from 'react-icons/fa';
import jokenpo from '../../imgs/jokenpo.png'; 
import Quiz from '../../imgs/quiz.png'; 
import Dash from '../../imgs/dash.png'
import Ubs from '../../imgs/ubs.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projetos = () => {

  useEffect(() => {
    AOS.init({
      duration: 7000, 
      once: true,     
    });
  }, []);

  return(
  <Grid sx={{ marginTop: '150px'}}>
    <Typography sx={{
      display: 'flex',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '2em',
      alignItems: 'center',
      marginBottom: '50px',
      
    }}
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      Projetos
      <Typography sx={{ color: '#986dff', fontSize: '1.2em', textAlign: 'center' }}>.</Typography>
    </Typography>


    <Box  sx={{
      display:'grid',
      gridTemplateColumns:"500px 500px",
      justifyContent:'center',
      gap:'100px',
      padding:'50px',
      

      '@media (max-width:1200px)':{
          flexDirection:'column',
          gridTemplateColumns:"1fr",

                        }
    }}
    
    >
      {/* Jokenpo */}
      <Grid   data-aos="zoom-in"
      data-aos-duration="3000">
        <Box sx={{
          flex: '1 1 45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          textAlign: 'center',
          border: '4px solid #1f1f1f',
          padding: '20px',
          minHeight: '650px', 
          transition: '0.5s',
          '&:hover': {
            boxShadow: '0px 0px 13px 5px #1f1f1f'
          }
        }}>
          <Avatar src={jokenpo} sx={{ width: '250px', height: '300px', borderRadius: 0,textAlign:'center' }} />
          <Typography sx={{ color: '#fff', fontSize: '1.2em' }}>Jokenpô</Typography>
          <Typography sx={{ color: '#fff' }}>
            Este projeto foi desenvolvido para jogar pedra, papel e tesoura contra o computador,
            utilizando os hooks do React como a base principal. Manipulei os estados do jogo com useState e gerenciei o
            ciclo de vida dos componentes com useEffect.
          </Typography>
          <Button href='https://github.com/EbertPalmeira/Jokenpo' sx={{
            display: 'flex',
            gap: '20px',
            background: '#8a2be2',
            color: '#fff',
            transition: '0.5s',
            padding:'10px 50px'
          }}>
            <FaGithub size={30} style={{ color: '#fff' }} />
            GitHub
          </Button>
          <Button href='https://github.com/EbertPalmeira/Jokenpo' sx={{
            display: 'flex',
            gap: '20px',
            background: '#7B68EE',
            color: '#fff',
            transition: '0.5s',
            padding:'10px 50px'
          }}>
            <FaGamepad size={30} style={{ color: '#fff' }} />
            Aplicação
          </Button>
        </Box>
      </Grid>

      {/* QuizWeb */}
      <Grid data-aos="zoom-in"
      data-aos-duration="3000">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          textAlign: 'center',
          border: '4px solid #1f1f1f',
          padding: '20px',
          minHeight: '650px', 
          transition: '0.5s',
          '&:hover': {
            boxShadow: '0px 0px 13px 5px #1f1f1f'
          }
        }}>
          <Avatar src={Quiz} sx={{ width: '200px', height: '280px', borderRadius: 0, }} />
          <Typography sx={{ color: '#fff', fontSize: '1.2em' }}>QuizWeb</Typography>
          <Typography sx={{ color: '#fff' }}>
            Aplicativo para testar conhecimentos em diversos assuntos.
            Neste projeto, tive a oportunidade de explorar o hook useContext pela primeira vez, o que me permitiu gerenciar o estado global de forma eficiente.
            Utilizei também o React-Router-Dom para implementar as rotas.
          </Typography>
          <Button href='https://github.com/EbertPalmeira/QuizWeb' sx={{
            display: 'flex',
            gap: '20px',
            background: '#8a2be2',
            color: '#fff',
            transition: '0.5s',
            padding:'10px 50px'
          }}>
            <FaGithub size={30} style={{ color: '#fff' }} />
            GitHub
          </Button>
          <Button href='https://quizebertdeveloper.netlify.app/' sx={{
            display: 'flex',
            gap: '20px',
            background: '#7B68EE',
            color: '#fff',
            transition: '0.5s',
            padding:'10px 50px'
          }}>
            <FaGamepad size={30} style={{ color: '#fff' }} />
            Aplicação
          </Button>
        </Box>
      </Grid>

      {/* Dashboard */}
        <Grid data-aos="zoom-in"
          data-aos-duration="3000">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'center',
            border: '4px solid #1f1f1f',
            padding: '20px',
            minHeight: '650px', 
            transition: '0.5s',
            '&:hover': {
              boxShadow: '0px 0px 13px 5px #1f1f1f'
            }
          }}>
            <Avatar src={Dash}  sx={{
              width: '420px',
              height: '250px',
                borderRadius: 0,
                objectFit: 'contain' ,
                
                '@media (max-width:1200px)':{
                  width: '350px',
                  height: '220px',
                }
                
                }} />
            <Typography sx={{ color: '#fff', fontSize: '1.2em' }}>Dashboard Financeiro</Typography>
            <Typography sx={{ color: '#fff' }}>
            Desenvolvi um dashboard financeiro interativo utilizando React, que permite o controle e visualização de entradas e saídas financeiras. O projeto inclui gráficos dinâmicos que se atualizam em tempo real,
            destacando as transações de forma visual com cores diferenciadas para entradas e saídas.
            </Typography>
            <Button href='https://github.com/EbertPalmeira/dashboardFinanceiro' sx={{
              display: 'flex',
              gap: '20px',
              background: '#8a2be2',
              color: '#fff',
              transition: '0.5s',
              padding:'10px 50px'
            }}>
              <FaGithub size={30} style={{ color: '#fff' }} />
              GitHub
            </Button>
            <Button href='https://www.linkedin.com/feed/update/urn:li:activity:7236910703205355521/' sx={{
              display: 'flex',
              gap: '20px',
              background: '#7B68EE',
              color: '#fff',
              transition: '0.5s',
              padding:'10px 50px'
            }}>
              <FaGamepad size={30} style={{ color: '#fff' }} />
              Aplicação
            </Button>
          </Box>
        </Grid>

      {/* Ubs */}
        <Grid data-aos="zoom-in"
          data-aos-duration="3000">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'center',
            border: '4px solid #1f1f1f',
            padding: '20px',
            minHeight: '650px', 
            transition: '0.5s',
            '&:hover': {
              boxShadow: '0px 0px 13px 5px #1f1f1f'
            }
          }}>
            <Avatar src={Ubs}  sx={{
              width: '420px',
              height: '250px',
                borderRadius: 0,
                objectFit: 'contain',

                '@media (max-width:1200px)':{
                  width: '350px',
                  height: '250px',
                }
                
                
                }} />
            <Typography sx={{ color: '#fff', fontSize: '1.2em' }}>Cadastro de Pacientes</Typography>
            <Typography sx={{ color: '#fff' }}>
            Sistema completo de cadastro de pacientes usando React, Node.js e Supabase. 
            O projeto permite o registro e a gestão de informações detalhadas dos pacientes.O front-end, 
            construído com React, fornece uma interface
              intuitiva , enquanto o back-end em Node.js gerencia a lógica de negócios e interage com o banco
               de dados Supabase .
            </Typography>
            <Button href='https://github.com/EbertPalmeira/Projeto-cadastro-de-pacientes' sx={{
              display: 'flex',
              gap: '20px',
              background: '#8a2be2',
              color: '#fff',
              transition: '0.5s',
              padding:'10px 50px'
            }}>
              <FaGithub size={30} style={{ color: '#fff' }} />
              GitHub
            </Button>
            <Button href='https://www.linkedin.com/feed/update/urn:li:activity:7233233472801112064/' sx={{
              display: 'flex',
              gap: '20px',
              background: '#7B68EE',
              color: '#fff',
              transition: '0.5s',
              padding:'10px 50px'
            }}>
              <FaGamepad size={30} style={{ color: '#fff' }} />
              Aplicação
            </Button>
           
          </Box>
        </Grid>

        

   
    </Box>
  </Grid>
)};

export default Projetos;
