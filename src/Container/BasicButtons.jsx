import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import drop from '../assets/icons/drop-icons/drop.svg';
import { Box, Grid, Typography } from '@mui/material';

export default function BasicButtons() {
  return (
    <>
    <Box sx={{ border: 1, borderBottomColor: 'grey.500',pt: 3,pb: 1}}>
      <Stack spacing={2} direction="row">
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={3}>
              <Button variant="text">Hotels</Button>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3}>
              <Button variant="text">Motels</Button>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3}>
              <Button variant="text">Resorts</Button>
            </Grid>
        </Grid>
      </Stack>
  </Box>
    <Grid item sx ={{marginLeft: 1,marginTop: 3}}>
    <Typography sx = {{fontSize : '14px'}}>showing 4 of 257 places</Typography>
    </Grid>
    <Grid item sx ={{marginTop: -2.,marginLeft: '650px'}} >
        <Typography sx = {{fontSize: '14px'}}>sort by Recommendeg
          <img src ={ drop} />
        </Typography>
    </Grid>
  </>
);
}
