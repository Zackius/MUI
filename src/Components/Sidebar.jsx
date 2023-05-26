import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({setMode, mode}) => {
  return (
    <Box
      flex={1}
      boxShadow="5"
      sx={{ display: { xs: "none", sm: "block" } }}
      p={4}
    >
      <Box  position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component= "a" href="#home">
            <ListItemIcon>
              <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component= "a" href="#page">
            <ListItemIcon>
              <Article/>
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component= "a" href="#group">
            <ListItemIcon>
              <Group />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component= "a" href="#market">
            <ListItemIcon>
              <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component= "a" href="#friends">
            <ListItemIcon>
              <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component= "a" href="#setting">
            <ListItemIcon>
              <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component= "a" href="#profile">
            <ListItemIcon>
              <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component= "a" href="#home">
            <ListItemIcon>
             <ModeNight/>
              </ListItemIcon>
          <Switch onChange={e=>setMode(mode ==="light" ? "dark" : "light")}/>
            </ListItemButton>
        </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar