import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-scroll';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Coding Profiles', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item} onClick={handleDrawerToggle}>
          <Link
            to={item.toLowerCase().replace(' ', '-')}
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            style={{ width: '100%', cursor: 'pointer' }}
          >
            <ListItemText primary={item} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Arun Jadaun
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(' ', '-')}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
              >
                <Button color="inherit">{item}</Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 