import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { darkTheme } from '../src/Components/ThemeHandler';
import { sideBar } from '../src/Components/SideBar';
import Form from './Form';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'fixed',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
      <div>
          
        <ThemeProvider theme={darkTheme}>
            
            <Box sx={{ display: 'flex' }}>
            
                <CssBaseline />
                
                <AppBar position="absolute" sx={{ width: `calc(100%)-${drawerWidth}`, ml: `${drawerWidth}px` }} open={open}>
                    <Toolbar
                        position="fixed"
                        sx={{
                        pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '-30px',
                            ...(open && { display: 'none' }),
                        }}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        align="center"
                        sx={{ flexGrow: 1 }}
                        >
                        Carbon Footprint
                        </Typography>
                    </Toolbar>
                    <Box
        component="main"
        sx={{bgcolor: 'background.default', paddingTop: 0}}
        >
        <div>
            <Form/>
        </div>
        
        </Box>
                </AppBar>
            <Drawer variant="permanent" open={open}>               
                <Toolbar
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                
                <Divider />
                
                <List>{sideBar}</List>            
                
            </Drawer>
        

        </Box>

        </ThemeProvider>
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}