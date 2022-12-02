import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { getWeatherData } from '../api/weatherApi';
import WeatherDisplay from './WeatherDisplay';
import '../styles/search.css'



function Search() {


 const [location, setLocation] = useState('')
 const [weather, setWeather] = useState({})

 const search = async (e) => {
        
        const data = await getWeatherData(location)
        console.log('dataaaa', data)
        setWeather(data)
        setLocation('')
    }
  
    return (
    <Box sx={{ flexGrow: 1 }} className='search-layout'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
      <TextField
            label="Search City"
            InputProps={{
              type: 'search',
            }}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Search...'
            type={search}
          />
          </Grid>
          <Grid item xs={12}>
            <Button className='button-style' variant="contained" onClick={search}>GO!</Button>
          </Grid>


         {weather.main && <WeatherDisplay className='layout' weather={weather} /> }
      </Grid>
    </Box>
  );
}


export default Search