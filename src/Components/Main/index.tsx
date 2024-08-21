import { Grid,Avatar,Typography,Link } from '@mui/material'
import imgEu from '../../imgs/eucode.svg'
import {FaInstagram,FaLinkedin,FaGithub,FaStackOverflow,FaWhatsapp} from "react-icons/fa";



import { keyframes } from '@emotion/react';




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




  const customTypographyStyles = () => ({
                    padding:'10px 15px',
                    border:'5px solid #1f1f1f',
                    borderRadius:'20px',
                    transition: 'all 0.8s',
                    

                    '&:hover': {
                    borderRadius: '5px',
                    transform: 'translateY(-10px)',
                    boxShadow: `
                        0 7px 0 -2px #986dff,
                        0 15px 0 -4px #39a2db,
                        0 16px 10px -3px #39a2db
                    `,
                    },
                    '&:active': {
                    transition: 'all 0.2s',
                    transform: 'translateY(-5px)',
                    boxShadow: `
                        0 2px 0 -2px #f85959,
                        0 8px 0 -4px #39a2db,
                        0 12px 10px -3px #39a2db
                    `,
                    },
  });
  


const Main = () => {
  return (
    <Grid container spacing={2}  sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 450px)',
        justifyContent: 'center',
        gap: '50px',
        border: '4px solid #1f1f1f',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '50px',
        position: 'relative',
        overflow: 'hidden',
        '@media (max-width: 1000px)': {
          gridTemplateColumns: '1fr', // Uma coluna para telas menores
        },



    }}>
        <Grid sx={{
           display:'flex',
           flexDirection: 'column',
           justifyContent:'center',
           alignItems:'center',
           textAlign:'center',

           '@media (min-width: 600px)': {
                flexDirection: 'row',
                gap: '40px',
  },
           
        }}>   
           
            <Avatar  src={imgEu} sx={{
                width:'350px',
                height:'350px',
                margin:'0 auto',
                animation: `${bounceAnimation} 5s ease-in-out infinite`,
                transition:'0.5s',
                position:'relative',
                display:'flex',
                placeContent:'center',
                placeItems:'center',
                overflow:'hidden',
                
              ':hover':{
                boxShadow: '10px 10px 13px 2px #986dff ',
              },
                


                '@media (max-width: 400px)': {
                    width:'250px',height:'250px',
            },
            }}/>

        <Grid sx={{
            display:'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // Distribui os ícones em uma grade
            gap: '20px',
            '@media (max-width: 900px)': {
                gridTemplateColumns: 'repeat(2, 1fr)', // Em telas menores, duas colunas
    },
            
        }}>
        

        
</Grid>
        </Grid>


        <Grid sx={{display:'grid'}}>
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

            <Typography  sx={{
                color:'#9ca3af',
                 fontFamily: 'Archivo, Arial, sans-serif',
            }}>
                Meu nome é Ebert, sou desenvolvedor Front-end. Sempre fui um entusiasta das tecnologias e estou constantemente em busca de conhecimento, seja através do YouTube ou de cursos online. Desenvolvo interfaces modernas e de alta qualidade, concentrando-me em performance, animações e responsividade. Além disso, crio projetos independentes para praticar e aprimorar meus conhecimentos.
            </Typography>

            <Grid sx={{
                display:'flex',
                gap:'20px',
                marginTop:'30px',
                flexWrap: 'wrap'
                
                }}>
                <Typography sx={customTypographyStyles()}>
                    <Link href="https://www.instagram.com/ebert_palmeira/" sx={{cursor:'pointer'}}  > <FaInstagram color='#986dff' size={30}/> </Link>   
                </Typography>

                <Typography sx={customTypographyStyles()}>
                   <Link href="https://www.linkedin.com/in/ebert-palmeira-613a77228/" sx={{cursor:'pointer'}}> <FaLinkedin color='#986dff' size={30}/> </Link>
                </Typography>

                <Typography sx={customTypographyStyles()}>
                    <Link href="https://github.com/EbertPalmeira" sx={{cursor:'pointer'}}> <FaGithub color='#986dff' size={30}/> </Link>
                </Typography>

                <Typography  sx={customTypographyStyles()}>
                    <Link href="https://stackoverflow.com/users/20626625/ebert-palmeira" sx={{cursor:'pointer'}}> <FaStackOverflow color='#986dff' size={30}/> </Link>
                </Typography>

                <Typography sx={customTypographyStyles()}>
                    <Link href="https://api.whatsapp.com/send?phone=5564981479751&text=" sx={{cursor:'pointer'}}> <FaWhatsapp color='#986dff' size={30} /> </Link>
                </Typography>
            </Grid>

        </Grid>






    </Grid>
  )
}

export default Main