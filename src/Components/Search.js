import React, {useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { getWeatherData,getForecastData  } from '../api/weatherApi';
import WeatherDisplay from './WeatherDisplay';
import '../styles/search.css'
import {useSelector, useDispatch} from 'react-redux'



function Search() {


 const [location, setLocation] = useState('')
 const [weather, setWeather] = useState({})
 const [forecast, setForeCast] = useState({})

 const dispatch = useDispatch()
 const results = useSelector((state) => state.results )



 const search = async (e) => {
        
        const data = await getWeatherData(location)
        const forecastData = await getForecastData(location)
        dispatch({type: 'GET_SEARCH', data: data})
        dispatch({type: 'GET_FORECAST', data: forecastData})
        console.log('dataaaa', forecastData)
        setWeather(data)
        setForeCast(forecastData)
        setLocation('')
    }

    useEffect (() => {


    })

    console.log('foreee', forecast)
    console.log('results', results)

  
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


         {weather.main && <WeatherDisplay className='layout' weather={weather} forecast={forecast} /> }
      </Grid>
    </Box>
  );
}


export default Search