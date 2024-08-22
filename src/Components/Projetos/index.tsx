import { Grid, Typography, Box, Avatar, Button } from '@mui/material';
import { FaGithub, FaGamepad } from 'react-icons/fa';
import jokenpo from '../../imgs/jokenpo.png'; 
import Quiz from '../../imgs/quiz.png'; 

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
      display:'flex',
      justifyContent:'center',
      gap:'30px',
      padding:'50px',

      '@media (max-width:1200px)':{
          flexDirection:'column'

                        }
    }}
    
    >
      {/* Jokenpo */}
      <Grid   data-aos="zoom-in"
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
          <Avatar src={jokenpo} sx={{ width: '300px', height: '300px', borderRadius: 0,textAlign:'center' }} />
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
          <Avatar src={Quiz} sx={{ width: '300px', height: '300px', borderRadius: 0, }} />
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

   
    </Box>
  </Grid>
)};

export default Projetos;
