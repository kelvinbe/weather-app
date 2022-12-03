import React from 'react'
import './App.css';
import Search from './Components/Search';
import Title from './Components/Title';
import { Box } from '@mui/system';

function App() {

 

  return (
    <Box className='container'>
      <Title />
      <Search />
    </Box>
  );
}

export default App;
