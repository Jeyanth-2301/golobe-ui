import React from 'react'
import { useState,useEffect} from 'react';
import { Grid, Typography } from '@mui/material'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { Button, IconButton } from '@mui/material';
import location from '../../../assets/icons/location-icon/location.svg'
import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, DialogActions, InputAdornment, TextField } from '@mui/material';
import { EmailIcon, FacebookIcon, WhatsappIcon, TelegramIcon, TwitterIcon, LinkedinIcon } from "react-share";
import axios from 'axios'
const Detail = ({data}) => {
  
  const [name,setName]=useState(null)
  const [hotelTypeStars, setHotelTypeStars] = useState([]);
  const [hotelType,setHotelType]=useState(null)
  const [loc,setLoc]=useState(null);
  const [id,setId]=useState(null);
  const [hotelRating, setHotelRating] = useState(null);
  const [number,setNumber]=useState(null)
  const [rate,setRate]=useState(null)
  const [review, setReview] = useState(null);
 
  useEffect(() => {
    if (data) {
      
        const name=data.hotelName;
        setName(name)
        const id=data._id;
        setId(id)
        console.log(id)
        const hotelRating = data.hotelType;
        setHotelType(hotelRating)
        setHotelTypeStars(renderStars(hotelRating));
        const loc=data.location.address;
        setLoc(loc)
        const rate=data.rating;
        const show= rate % 1 === 0 ? rate.toFixed(0) : rate.toFixed(1);
        setHotelRating(show)
        const revno=data.numReviews;
        setNumber(revno)
        const rpn=data.ratePerNight;
        setRate(rpn)
        const allreview=data.overallReview;
        setReview(allreview)
      }
  }, [data]);


  const commonIconButtonStyle = {
    height: '32px',
    color: '#112211',
    padding: '5px',
    border: '1px solid #8DD3BB',
    borderRadius: '0',
    marginRight: '12px',
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <StarOutlinedIcon key={i} fontSize="small" style={{ color:'#FF8682' }} />
      );
    }
    return stars;
  };
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);

    const url = `http://localhost:3200/auth/users/64cb50827767115059b3eaa7/favourites/${id}`;
    const method = newIsFavorite ? 'POST' : 'DELETE';

    axios({
      
      method,
      url,
    })
      .then(response => {
        
        console.log('Request successful:', response);
      })
      .catch(error => {
        
        console.error('Error making request:', error);
       
        setIsFavorite(isFavorite);
      });
  };
  const handleShareClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const [sharingMessage, setSharingMessage] = useState('');

  const currentURL = window.location.href;

  const handleShare = async (platform) => {
    const sharingURL = currentURL;
    const sharingText = sharingMessage;
    let message = sharingText ? `${sharingText}\n\n` : '';

    if (navigator.share) {

      try {
        await navigator.share({
          title: sharingText,
          text: ' ',
          url: sharingURL,
        }); setSharingMessage('');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      message += platform === 'mail' ? sharingURL : `${sharingText} ${sharingURL}`;


      switch (platform) {
        case 'mail':
          const subject = 'Check out this link';
          const body = sharingText ? `${sharingText}\n\n${sharingURL}` : sharingURL;
          window.open(
            `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
          break;
        case 'whatsapp':
          const encodedMessage = encodeURIComponent(sharingText ? `${sharingText}: ${sharingURL}` : sharingURL);
          window.open(`https://api.whatsapp.com/send?text=${encodedMessage}`, '_blank');
          break;
        case 'telegram':
          window.open(
            `https://t.me/share/url?url=${encodeURIComponent(sharingURL)}&text=${encodeURIComponent(
              sharingText
            )}`
          );
          break;
        case 'linkedin':
          window.open(
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              sharingURL
            )}&title=${encodeURIComponent(sharingText)}`
          );
          break;
        case 'twitter':
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              sharingURL
            )}&text=${encodeURIComponent(sharingText)}`
          );
          break;
        case 'facebook':
          window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(sharingURL)}`);
          break;
        default:
          break;
      }
    }
  };


  return (
    <div >
      <Grid container  style={{height:'15vh',width:'90vw',marginTop:'2vh'}}>
        <Grid item xs={10} container direction="column">
          <Grid item sx={{height:'5vh'}}>
             <Typography variant="h1" sx={{fontSize:'24px'}}>{name}&nbsp;
                  <Typography variant="pico" component="span" style={{display:'inline-flex',alignItems:'center'}}>
                      {hotelTypeStars} 
                      {hotelType} Star Hotel
                  </Typography>
              </Typography>
           </Grid>
            <div >
            <Grid item style={{height:'5vh',padding:'1vh 0'}}>
              <Typography variant='pico'> 
              <img src={location} alt="location"/>{loc}
              </Typography>
            </Grid>
            <Grid item container alignItems="center" sx={{height:'5vh',padding:'1vh 0'}}>
               <Typography variant='body1' sx={{fontWeight:'500',marginLeft:'0.2vw'}}>{hotelRating}</Typography>&nbsp;
               <Typography variant="body1" sx={{fontWeight:'700'}}>{review}</Typography>&nbsp;
               <Typography variant="pico">{number} reviews</Typography>
            </Grid>
            </div>
            </Grid>
            <Grid item xs={2} container direction="column" sx={{height:'15vh',marginLeft:'-2px',width:'10vw'}}>
              <Grid item sx={{color:'#FF8682',alignItems:'center',height:'7.5vh',marginTop:'0.5vh'}}>
                    <Typography variant="h4" align="right">Rs {rate}
                        <Typography variant="body1" style={{display:'inline'}}>/night
                        </Typography>
                    </Typography>
                </Grid>

          <Grid item style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Grid item >
              <IconButton sx={commonIconButtonStyle} onClick={handleFavoriteClick}>
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={commonIconButtonStyle} onClick={handleShareClick}><ShareIcon /></IconButton>
              <div>
                <Dialog open={open} onClose={handleClose} maxWidth="sm">
                  <DialogTitle>Share</DialogTitle>
                  <DialogContent  >
                    <TextField
                      value={sharingMessage}
                      onChange={(e) => setSharingMessage(e.target.value)}
                      style={{ fontSize: 14 }}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleClose}>
                              <Close />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        style: {
                          shrink: true,
                        },
                      }}
                    />

                  </DialogContent>
                  <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <EmailIcon onClick={() => handleShare('mail')} style={{ width: 40, height: 40, cursor: 'pointer' }} />
                    <WhatsappIcon onClick={() => handleShare('whatsapp')} style={{ width: 40, height: 40, cursor: 'pointer' }} />
                    <TelegramIcon onClick={() => handleShare('telegram')} style={{ width: 40, height: 40, cursor: 'pointer' }} />
                    <LinkedinIcon onClick={() => handleShare('linkedin')} style={{ width: 40, height: 40, cursor: 'pointer' }} />
                    <TwitterIcon onClick={() => handleShare('twitter')} style={{ width: 40, height: 40, cursor: 'pointer' }} />
                    <FacebookIcon onClick={() => handleShare('facebook')} style={{ width: 40, height: 40, cursor: 'pointer' }} />
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Detail