import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Box, Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,} from '@mui/material'
import React from 'react'
import Post from './Post'

const Feeds = () => {
  return (
    <Box
      flex={3}
      p={{xs: 0, md: 2}}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post/>
    </Box>
  )
}

export default Feeds