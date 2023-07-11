import React, { useState } from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material'
import { Pets, Mail, Notifications } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px ',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  //  justifyContent:"center",
  gap: '20px',
  /* xs de display :"none" olucak */
  [theme.breakpoints.up('sm')]: {
    /* small veya büyükse */ display: 'flex',
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>

      <StyledToolbar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant='h6'>
          LAMA DEV
        </Typography>
        
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Search>
          <InputBase placeholder='search...' />
        </Search>

        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.pexels.com/photos/17481292/pexels-photo-17481292.jpeg?auto=compress&cs=tinysrgb&w=175&fit=crop&h=275&dpr=1'
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.pexels.com/photos/17481292/pexels-photo-17481292.jpeg?auto=compress&cs=tinysrgb&w=175&fit=crop&h=275&dpr=1'
          />
          <Typography variant='span'>john</Typography>
        </UserBox>
      </StyledToolbar>


      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
