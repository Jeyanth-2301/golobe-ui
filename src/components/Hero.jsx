import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'


const Hero = () => {
    return (
        <Box>
            <Container maxWidth='lg' sx={{ bgcolor: '#ada7a6', height: "80vh", alignContent: "center" }} >
                <Container maxWidth='sm' >
                    <Stack alignItems={'flex-start'}>
                        <Typography variant='h1'>
                            Make your travel whishlist, we’ll do the rest
                        </Typography>
                    </Stack>
                </Container>
            </Container>
        </Box>
    )
}

export default Hero