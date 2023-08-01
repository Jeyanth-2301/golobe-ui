//import React from 'react'
import { useState } from 'react';
import {Grid,Typography, Box } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import {Button,IconButton} from '@mui/material';
import location from  '../assets/icons/location.svg'
import {Close} from '@mui/icons-material';
import {Dialog,DialogContent,DialogTitle,DialogActions,InputAdornment,TextField} from '@mui/material';
import {EmailIcon,FacebookIcon,WhatsappIcon,TelegramIcon,TwitterIcon,LinkedinIcon} from "react-share";

const Detail = () => {
  const commonIconButtonStyle = {
      height: '32px',
      color: '#112211',
      padding: '5px',
      border: '1px solid #8DD3BB',
      borderRadius: '0',
      marginRight: '12px',
    };
    
const [isDownloaded, setIsDownloaded] = useState(false);
const handleDownloadClick = () =>{
    setIsDownloaded(true);
}

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
        let message = sharingText ? `${sharingText}\n\n` : ''  ;
    
        if (navigator.share) {
          
          try {
            await navigator.share({
              title: sharingText,
              text: ' ',
              url: sharingURL,
            });  setSharingMessage('');
          } catch (error) {
            console.error('Error sharing:', error);
          }
        } else {message += platform === 'mail' ? sharingURL : `${sharingText} ${sharingURL}`;
      
        let subject = '';
        let body='';
        let encodedMessage='';
          
          switch (platform) {
            case 'mail':
              subject = 'Check out this link';
              body = sharingText ? `${sharingText}\n\n${sharingURL}` : sharingURL;
              window.open(
                `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
              break;
              case 'whatsapp':
                  encodedMessage = encodeURIComponent(sharingText ? `${sharingText}: ${sharingURL}` : sharingURL);
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
    <Box style={{height:'104px',width:'100%',marginTop:'32px', paddingLeft:'0px'}}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9} container direction="column" sx={{width:'804px',height:'104px'}}>
          <Grid item sx={{height:'30px',width:'804px'}}>
             <Typography variant="h1" sx={{fontSize:'24px'}}>CVK Park Bosphorus Hotel Istanbul&nbsp;
                  
              </Typography>
           </Grid>
            <div style={{width:'804px',height:'58px',padding: '10px 0'}}>
            <Grid item>
              <Typography sx={{width:'804px',height:'18px'}}> 
              <img src={location} alt="location"/>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </Typography>
            </Grid>
            
            </div>
            </Grid>
            <Grid item xs={3} container direction="column" sx={{marginLeft:'-3px'}}>
              <Grid item sx={{color:'#FF8682',marginBottom:'10px'}}>
                    <Typography variant="h4" align="right">$240
                        <Typography variant="body1" style={{display:'inline'}}>/night
                        </Typography>
                    </Typography>
                </Grid>
              <Grid item style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
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
          <EmailIcon  onClick={() => handleShare('mail')}  style={{ width: 40, height: 40,cursor: 'pointer' }}/>
          <WhatsappIcon onClick={() => handleShare('whatsapp')} style={{ width: 40, height: 40,cursor: 'pointer' }} />
          <TelegramIcon onClick={() => handleShare('telegram')}  style={{ width: 40, height: 40,cursor: 'pointer' }}/>
          <LinkedinIcon onClick={() => handleShare('linkedin')} style={{ width: 40, height: 40,cursor: 'pointer' }}/>
          <TwitterIcon onClick={() => handleShare('twitter')} style={{ width: 40, height: 40,cursor: 'pointer' }}/>
          <FacebookIcon onClick={() => handleShare('facebook')}style={{ width: 40, height: 40,cursor: 'pointer' }} />
        </DialogActions>
      </Dialog>
</div>
                    </Grid>
                   <Grid item>
                    {isDownloaded ? (
                        <Button variant='contained' color='secondary' disabled>Downloaded</Button>
                    ):(
                        <Button variant="contained" color="primary" sx={{ color:'#112211',lineHeight:'normal',border:'1px solid black',
                        gap:'4px',borderRadius:'4px',padding: '7px',marginLeft: '5px','&:hover': {backgroundColor: '#8DD3BB'},}}
                        onClick={handleDownloadClick}>Download</Button>
                    )}
                    
                    </Grid>
                  </Grid>
                 </Grid>
                </Grid> 
    </Box>
  )
}
  
export default Detail 