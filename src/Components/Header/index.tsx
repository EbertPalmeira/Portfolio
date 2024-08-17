import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, Box, Grid, Link, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    { text: 'Quem Sou', link: '#quem-sou' },
    { text: 'Projetos', link: '#projetos' },
    { text: 'Conhecimentos', link: '#conhecimentos' },
  ];

  return (
    <Box>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around',paddingTop:'30px',alignItems:'center',marginBottom:'50px'}}>
        <Box>
          <FaCode size={20} color='red'/>
        </Box>
        <Box>
          {!isMobile && (
            <Grid sx={{ display: 'flex', gap: '40px' }}>
              {menuItems.map((item) => (
                <Link key={item.text} sx={{ textDecoration: 'none', color: 'white',fontWeight:'700' }} href={item.link}>
                  {item.text}
                </Link>
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
            <ListItem button component="a" href={item.link} key={index} onClick={toggleDrawer(false)}>
              <ListItemText sx={{color:'#fff',textAlign:'center',marginTop:'10px'}} primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
