import * as React from 'react';
import { householdVehicles, naturalGas, electricity, fuel, propane } from "./carbon_calc.js"
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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { darkTheme } from './Components/ThemeHandler.js';
import { sideBar } from './Components/SideBar.js';

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
      position: 'relative',
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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", date:"", miles_driven: "", miles_per_gallon: "", week_or_year: "", ng_usage: "0",electricity_usage:"0", fuel_oil_usage:"0", pp_usage:"0"};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     alert(householdVehicles(this.state.miles_driven));
//     this.setState({ username: "" });
//   }

    handleSubmit(evt){
        evt.preventDefault();



        let databody = {
            "name": this.state.name,
            "date": this.state.date,
            "vehicleScore": householdVehicles(this.state.miles_driven),
            "naturalGasScore": naturalGas(this.state.ng_usage),
            "electricityScore": electricity(this.state.electricity_usage),
            "fuelScore": fuel(this.state.fuel_oil_usage),
            "propaneScore": propane(this.state.pp_usage),
            "totalScore": householdVehicles(this.state.miles_driven) + naturalGas(this.state.ng_usage) 
            + electricity(this.state.electricity_usage) + fuel(this.state.fuel_oil_usage) + propane(this.state.pp_usage)
        }

        return fetch(process.env.MONGO_DB_CONNECTION_STRING + '/energy', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
    }

  render() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    return (
        <div>
          <ThemeProvider theme={darkTheme}>
          <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
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
                marginRight: '36px',
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
              sx={{ flexGrow: 1 }}
            >
              Carbon Footprint
            </Typography>
          </Toolbar>
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
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? theme.palette.grey[900]
                : theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          </Box>
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 6 }}>
            <h1>Your Data</h1>
            <form onSubmit={this.handleSubmit}>
                <h5>Household Vehicle</h5>
                <p>What is the average amount of miles driven by this vehicle per week?</p>
                <input
                    type='number'
                    name='miles_driven'
                    placeholder='0'
                    value={this.state.miles_driven}
                    onChange={this.handleChange}
                />
                
                <p>How many miles does this car get to the gallon?</p>
                <input
                type='number'
                name='miles_per_gallon'
                placeholder='0'
                value={this.state.miles_per_gallon}
                onChange={this.handleChange}
                />

                <h5>Home Energy</h5>  
                               
                <p>How much natural gas does your household use per month (dollars)?</p>
                <input
                type='number'
                name='ng_usage'
                placeholder='0'
                value={this.state.ng_usage}
                onChange={this.handleChange}
                />

                <p>How much electricity does your household use per month (dollars)?</p>
                <input
                type='number'
                name='electricity_usage'
                placeholder='0'
                value={this.state.electricity_usage}
                onChange={this.handleChange}
                />

                <p>How much fuel oil does your household use per month (dollars)?</p>
                <input
                type='number'
                name='fuel_oil_usage'
                placeholder='0'
                value={this.state.fuel_oil_usage}
                onChange={this.handleChange}
                />

                <p>How much propane does your household use per month (dollars)?</p>
                <input
                type='number'
                name='pp_usage'
                placeholder='0'
                value={this.state.pp_usage}
                onChange={this.handleChange}
                />
                <p/>
                <button>Submit!</button>
            </form>
            </Box>
            </Box>
            </ThemeProvider>
        </div>
    );
  }
}


export default Form;
