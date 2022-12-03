import React from 'react'
import './App.css';
import Search from './Components/Search';
import Title from './Components/Title';
import { Box } from '@mui/system';
import { ReactNotifications} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


function App() {

 

  return (
    <Box className='container'>
      <Title />
      <ReactNotifications />
      <Search />
    </Box>
  );
}

export default App;
