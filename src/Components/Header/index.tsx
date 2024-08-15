import React,{useState} from 'react'
import { FaCode } from "react-icons/fa";
import  {Box, Link}  from '@mui/material'
import { Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Header= () => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const menuItems = [
        { text: 'Quem Sou', link: '#quem-sou' },
        { text: 'Projetos', link: '#projetos' },
        { text: 'Conhecimentos', link: '#conhecimentos' },
      ];

      const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

      const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpen(open);
      };

  return (
    <div>
        <Box>
            <Box>
                <FaCode/>
            </Box>
            <Box>
                {!isMobile && (
    
                    <Link >A</Link>
                
            )}
            </Box>
        </Box>
      {isMobile && (
        <>

        
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem button component="a" href={item.link} key={index} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          
        </>
      )}
    </div>
  )
}

export default Header