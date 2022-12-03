import React from 'react'
import { Grid, Card, CardActions, CardMedia, CardContent, Typography, Button} from '@mui/material'


const ForecastDisplay = ({weather, forecast, setViewForcast, viewForecast}) => {


    console.log('forecastDis', forecast)

    const toggleForecast = () => {

        setViewForcast(!viewForecast)
    }

  return (
    <Grid container className='layout'>
   {forecast.map((weather) => {

   return <Grid item sm={12}>
   <Card sx={{ maxWidth: 345 }} style={{borderRadius: '20px', backgroundColor: '#cae2e6', marginBottom: 20}}>
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
</Card>
</Grid>

   }) }
   </Grid>
  )
}

export default ForecastDisplay