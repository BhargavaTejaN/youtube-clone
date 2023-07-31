import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import {NavBar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components/index'

const App = () => {
  return (
    <div>
      <Box sx={{backgroundColor : '#000'}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </div>
  )
}

export default App