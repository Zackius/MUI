import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import {Add as AddIcon, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import { useState } from 'react'
import styled from '@emotion/styled'

const StyledModal = styled(Modal)({
    display: "flex", 
    justifyContent: "center",
    alignItems: "center"
})

const UserBox= styled(Box)({
    display: "flex", 
    alignItems: "center",
    gap: "10px",
    marginBottom:"10px"

})
const Add = () => {
    const [open, setOpen] = useState(false)
  return (
      <>
          <Tooltip onClick={e=>setOpen(true)}  title="Add" sx={{positon: "fixed", bottom: "20", left: {xs: "calc(50% - 25px)",  md: 30}}}>
          <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
          </Tooltip>
          <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={250} height={250} bgcolor={"background.default"} color={"text.primary"} p={3}  borderRadius={8}>
                  <Typography variant="6" color="gray" textAlign="center">
                      Create Post
                  </Typography>
                  <UserBox>
                      <Avatar src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2ac0260c23e9cdcd/63f24c375c5a8b10c839c71f/Marcus-Rashford-Manchester-United-2022-23.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                      sx={{width:30, height: 30}}
                      />
                      <Typography variant='span' fontWeight={400}> James Doe</Typography>
                  </UserBox>
                  <TextField
                      id="standard-multiline-static"
                      sx={{width: "80"}}
          label="Post"
          multiline
          rows={4}
      placeholder="What on your mind"
          variant="standard"
                  />
                  <Stack direction ="row" gap={2} mt={1} mb={1}>
                      <EmojiEmotions color='primary' />
                      <PersonAdd color='error' />
                      <VideoCameraBack color="success"/>
                      
                  </Stack>
                  <ButtonGroup fullWidth  variant="contained" aria-label="outlined primary button group">
                      <Button>Post</Button>
  <Button sx={{width: "100px" }} ><DateRange/></Button>

</ButtonGroup>
                  </Box>
</StyledModal>
    </>
  )
}

export default Add