import React from 'react'
import { Box } from '@mui/material'
import {} from '@mui/icons-material'

import Post from './Post'

const Feed = () => {
  return (
    <Box flex={2}>
      <Post
        image={
          'https://images.pexels.com/photos/7532428/pexels-photo-7532428.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }
        name='Deer'
      />
      <Post
        image={
          'https://images.pexels.com/photos/54635/swan-water-bird-animal-nature-54635.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
        name='Swan'
      />
      <Post
        image='https://images.pexels.com/photos/162256/wolf-predator-european-wolf-carnivores-162256.jpeg?auto=compress&cs=tinysrgb&w=600'
        name='Wolf'
      />
    </Box>
  )
}

export default Feed
