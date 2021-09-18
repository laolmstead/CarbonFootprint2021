import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


export const sideBar = (
  <div>
    <List>
      <ListItem component={Link} button to='/Form' color="inherit" key='Add Activity'>
        <ListItemIcon>
          <AddIcon/>
        </ListItemIcon>
        <ListItemText primary='Add Activity' />
      </ListItem>
    </List>
    <List>
      <ListItem button component={Link} to='/Profile' key='Profile' color="inherit">
        <ListItemIcon>
          <PersonIcon/>
        </ListItemIcon>
        <ListItemText primary='Profile' />
      </ListItem>
    </List>
    <List>
      <ListItem button component={Link} to='/Profile' key='Stats' color="inherit">
        <ListItemIcon>
          <AnalyticsIcon/>
        </ListItemIcon>
        <ListItemText primary='Stats' />
      </ListItem>
    </List>
    <List>
      <ListItem button component={Link} to='/Profile' color="inherit" key='Resources'>
        <ListItemIcon>
          <InfoIcon/>
        </ListItemIcon>
        <ListItemText primary='Resources' />
      </ListItem>
    </List>
  <Divider />
    <List>
      <ListItem button component={Link} to='/Profile' color="inherit" key='Settings'>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary='Settings' />
      </ListItem>
    </List>
    <List>
      <ListItem button component={Link} to='/Profile' color="inherit"key='Log Out'>
        <ListItemIcon>
          <LogoutIcon/>
        </ListItemIcon>
        <ListItemText primary='Log Out' />
      </ListItem>
    </List>
  </div>
);
