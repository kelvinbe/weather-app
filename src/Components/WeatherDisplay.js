import React, { useState } from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, Button} from '@mui/material'
import '../styles/weather.css'
import { useNavigate } from "react-router-dom";



function WeatherDisplay({weather, forecast}) {

  const [viewForcast, setViewForcast] = useState(false)
  const navigate = useNavigate()

  console.log('forecastWea', forecast)

  const toggleForcast = () => {

    navigate('/forecast')
  }
  console.log('view', viewForcast)

  return (
    <Grid container className='layout'>
        <Button size="small" variant="outlined" style={{marginBottom: 10}} onClick={toggleForcast}>Weekly Forecast</Button>
       <Card sx={{ maxWidth: 345 }} style={{borderRadius: '20px', backgroundColor: '#cae2e6'}}>
      <CardMedia
        component="img"
        alt={weather.weather[0].description}
        height="140"
        image={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <CardContent style={{display: 'flex'}}>
      <Typography gutterBottom variant="h5" component="div">
      <p>City: </p>
      <p>Temperature: </p>
      <p>Humidity: </p>
      <p>Current Condition: </p> 
      <p>Precipitation: </p>
        </Typography>
        <Typography gutterBottom variant="h5" style={{backgroundColor: '#90b3e0', borderRadius: '30px'}}  component="div">
            <p>{weather.name}</p>
            <p>{Math.round(weather.main.temp)} <sup>&deg;C</sup></p>
            <p>{weather.main.humidity}</p>
            <p>{weather.weather[0].description}</p>
            <p>{Math.round(weather.main.feels_like)}<sup>%</sup></p>
        </Typography>
      </CardContent>
    </Card>}
    </Grid>
  )
}

export default WeatherDisplay