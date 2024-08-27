import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Profile() {
  const [open, setOpen] = React.useState(false);

  const [selectedImage, setSelectedImage] = React.useState('profile2.jpg');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
      <Avatar
  alt="Profile Picture"
  src={selectedImage}
  sx={{ width: 250, height: 250, marginTop: 7 }}
  onClick={handleOpen}
/>
        <Dialog open={open} onClose={handleClose} className="custom-dialog">
          <DialogTitle>Choose a Profile Picture</DialogTitle>
          <DialogContent>
            <div className="image-gallery">
              <img src="profile1.jpg" alt="Image 1" onClick={() => {
        setSelectedImage('profile1.jpg');
        setOpen(false);
      }} />
              <img src="profile2.jpg" alt="Image 2" onClick={() => {
        setSelectedImage('profile2.jpg');
        setOpen(false);
      }} />
              <img src="profile3.jpg" alt="Image 3" onClick={() => {
        setSelectedImage('profile3.jpg');
        setOpen(false);
      }} />
              <img src="profile4.jpg" alt="Image 4" onClick={() => {
        setSelectedImage('profile4.jpg');
        setOpen(false);
      }} />
              <img src="profile5.jpg" alt="Image 5" onClick={() => {
        setSelectedImage('profile5.jpg');
        setOpen(false);
      }} />
              <img src="profile6.jpg" alt="Image 6" onClick={() => {
        setSelectedImage('profile6.jpg');
        setOpen(false);
      }} />
              <img src="profile7.jpg" alt="Image 7" onClick={() => {
        setSelectedImage('profile7.jpg');
        setOpen(false);
      }} />
              <img src="profile8.jpg" alt="Image 8" onClick={() => {
        setSelectedImage('profile8.jpg');
        setOpen(false);
      }} />
              {/* <img src="profile9.jpg" alt="Image 3" onClick={() => console.log('Image 3 selected')} /> */}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
      <br />
      <div
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
  id="outlined-basic"
  label=""
  variant="outlined"
  placeholder='Name'
  
  sx={{
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },

    marginRight: 4,
    marginBottom: 2,
    width: 500
  }}
/><br></br>
<TextField
  id="outlined-basic"
  label=""
  variant="outlined"
  placeholder='Email ID'
  
  sx={{
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    marginRight: 2,
    width: 550
  }}
/>
<TextField
  id="outlined-basic"
  label=""
  variant="outlined"
  placeholder='Contact Number'
  
  sx={{
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    marginLeft: 2,
    width: 250
  }}
/> 
<TextField
  id="outlined-basic"
  label=""
  variant="outlined"
  placeholder='Password'
  
  sx={{
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    marginLeft: 4,
    width:250
  }}
/> 
      </div>
      <br />
      <div>
        <Button className="create-button" variant="contained">
          Edit
        </Button>
      </div>
      <br />
      <br />
      <div className="card-container">
      <Tooltip title="Your Study Groups">
        <Card sx={{ marginRight: 15, width: 210,height: 143 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // image="white3.jpg"
              alt="Your Groups"
            />
          </CardActionArea>
        </Card>
        </Tooltip>

        <Tooltip title="Messages">
        <Card sx={{ marginRight: 10, width: 210,height: 140 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // image="white4.jpg"
              alt="Messages"
            />
          </CardActionArea>
        </Card>
        </Tooltip>
        <Tooltip title="Study Materials">
        <Card sx={{ marginLeft: 10, width: 210,height: 140 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // image="white1.png"
              alt="Materials"
            />
          </CardActionArea>
        </Card>
        </Tooltip>
        <Tooltip title="FAQs">
        <Card sx={{ marginLeft: 15, width: 210,height: 140 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // image="white2.jpeg"
              alt="FAQS"
            />
          </CardActionArea>
        </Card>
        </Tooltip>
      </div>
      <style>
        {`
          .profile-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }
          .profile-header {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          .card-container {
            display: flex;
            flex-direction: row;
          }
          .image-gallery {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .image-gallery img {
            width: 100px;
            height: 100px;
            margin: 10px;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Profile