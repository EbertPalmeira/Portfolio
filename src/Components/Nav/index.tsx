import { useState } from 'react';
import { Drawer, IconButton, List, ListItem,  Box, Grid,  useMediaQuery, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaCode} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import styled, { keyframes } from 'styled-components';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer =
  (open: boolean) =>
  (event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent<Element>).key === 'Tab' ||
        (event as React.KeyboardEvent<Element>).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const bounce = keyframes`
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-5px);
      }

      100% {
        transform: translateY(0px);
      }
`;


    const AnimatedIcon = styled(FaCode)`
      animation: ${bounce} 2s ease-in-out infinite;
      color:"#986dff"
    `;
  const menuItems = [
    { text: 'Quem Sou', link: 'quem-sou' },
    { text: 'Projetos', link: 'projetos' },
    { text: 'Conhecimentos', link: 'conhecimentos' },
  ];

  return (
    <Box>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around',paddingTop:'30px',alignItems:'center',marginBottom:'50px'}}>
        <Box>
          <AnimatedIcon size={30} color="#986dff" />
          
        </Box>
        <Box>
          {!isMobile && (
            <Grid sx={{ display: 'flex', gap: '40px' }}>
              {menuItems.map((item) => (
                <Box 
                component={ScrollLink}
                key={item.text}
                to={item.link}
                smooth={true}
                duration={500}
                
                sx={{ 
                  textDecoration: 'none',
                   color: 'white',
                   fontWeight:'700' ,
                   position: 'relative',
                   paddingBottom:'5px',

                   '::after' :{
                    content: '""',
                    marginTop:'10px',
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(to right, #0003, #986dff)',
                    borderRadius: '4px',
                    position: 'absolute',
                    left: '0',
                    bottom: '0',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform .25s ease',
                    
                  },
                  ':hover::after': {
                    transform:'scaleX(1)',
                    borderRadius: '5px',
                    marginTop:'10px',
                  }

                   
                   
                   }} href={item.link}>
                  {item.text}
                </Box>
              ))}
            </Grid>
          )}
        </Box>

        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: 'white' }}
          >
            <MenuIcon sx={{ color: '#fff' }}/>
          </IconButton >
        )}
      </Grid>

      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { width: '100%',
             backgroundColor: 'black',
              color: 'white',
              marginTop:'70px',
            },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button component="a" href={item.link} key={index} onClick={toggleDrawer(false)} sx={{
              textAlign:'center',
              display:'grid',
              justifyContent:'center',
              gap:'20px',
              padding:"20px"
              }}>
              <ScrollLink 
                key={item.text}
                to={item.link}
                smooth={true}
                duration={500}
                
                style={{ textDecoration: 'none', color: 'white',fontWeight:'700' }} href={item.link}>
                  {item.text}
                </ScrollLink>
              
                
           
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Nav;
