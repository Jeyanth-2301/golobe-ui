import React from 'react'
import Search from './Search'
import RecentSearch from './RecentSearch'
import Cards from './Cards'
import {Box} from '@mui/material'
const MainPage = () => {
  return (
    <div>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,marginTop:'-3%'}}>
     <Search />
     <RecentSearch />
     <Cards />
     </Box>
      

    </div>
  )
}

export default MainPage