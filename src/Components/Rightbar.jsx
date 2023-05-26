import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
      boxShadow="5"
      sx={{ display: { xs: "none", sm: "block" } }}
    flex={2}
    p={2}
    >
      <Box position="fixed">
        <Typography variant='"h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max" />
  <Avatar alt="Travis Howard" src="https://mpost.io/wp-content/uploads/image-74-7-1024x1024.jpg"/>
  <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OsPendvkCTTCI0qh6KlWBA8qCzG1WkfxyJ2z_Vuwe-Mm5GB7wgG1g2T8Jfgu3j4e_kg&usqp=CAU" />
  <Avatar alt="Agnes Walker" src="https://i.etsystatic.com/41069920/r/il/87b4e5/4721601657/il_340x270.4721601657_p2sh.jpg" />
  <Avatar alt="Trevor Henderson" src="https://imgv3.fotor.com/images/side/customize-your-ai-robot-girl-in-different-aspects-in-Fotor-ai-art-generator_2023-05-16-034601_jdhn.jpg" />
        </AvatarGroup>        
        <Typography variant='"h6' fontWeight={100}>
     Latest Converstion
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="/" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2ac0260c23e9cdcd/63f24c375c5a8b10c839c71f/Marcus-Rashford-Manchester-United-2022-23.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Lionel Messi" src="https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Paul Pogba" src="https://img.a.transfermarkt.technology/portrait/big/122153-1582114937.jpg?lm=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
       </Box>
    </Box>
  )
}

export default Rightbar