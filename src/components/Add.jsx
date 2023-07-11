import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from '@mui/material'
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material'

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
})

const Add = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Delete'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box
          width={400}
          height={280}
          p={3}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create post
          </Typography>
          <UserBox>
            <Avatar
              alt='Travis Howard'
              src='https://img.freepik.com/free-photo/woman-with-headphones-her-head_1340-39040.jpg?size=626&ext=jpg&ga=GA1.2.645752334.1661434658&semt=sph'
            />
            <Typography variant='span' fontWeight={500}>
              Jane Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder='what is on your mind?'
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={2}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <PersonAdd color='success' />
            <VideoCameraBack color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
