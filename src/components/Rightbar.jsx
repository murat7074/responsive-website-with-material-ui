import React from 'react'
import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      {/* yukarıdaki box a    position="fixed" verince bozuluyor*/}
      <Box position="fixed" width={500} >
        <Typography variant='h6' fontWeight={100} mt={2} >
          Online friend
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
          
            alt='Remy Sharp'
            src='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.645752334.1661434658&semt=sph'
          />
          <Avatar
            alt='Travis Howard'
            src='https://img.freepik.com/premium-vector/vector-illustration-face-muslim-girl-hood-with-hat-with-funny-expression_500021-335.jpg?size=626&ext=jpg&ga=GA1.2.645752334.1661434658&semt=sph'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?size=626&ext=jpg&ga=GA1.2.645752334.1661434658&semt=sph'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?size=626&ext=jpg&ga=GA1.2.645752334.1661434658&semt=sph'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://img.freepik.com/premium-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-550.jpg?size=626&ext=jpg&ga=GA1.2.645752334.1661434658&semt=sph'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg&ga=GA1.2.645752334.1661434658&semt=sph'
          />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100}>
          Latest photos
        </Typography>

        <ImageList cols={3} rowHeight={290} gap={5} >
          <ImageListItem>
           <img src="https://images.pexels.com/photos/16877637/pexels-photo-16877637/free-photo-of-doga-cimen-cicek-yabani-cicek.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          </ImageListItem>
          <ImageListItem>
           <img src="https://images.pexels.com/photos/17268313/pexels-photo-17268313/free-photo-of-gida-sanat-doku-bahce.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          </ImageListItem>
          <ImageListItem>
           <img src="https://images.pexels.com/photos/17481292/pexels-photo-17481292.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          </ImageListItem>
        </ImageList>
         <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Online Conversation
        </Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
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
          <Avatar sx={{width:30,height:30}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
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
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
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
