import React from 'react'
import { Grid, Card, CardActions, CardMedia, CardContent, Typography, Button} from '@mui/material'
import '../styles/weather.css'


function WeatherDisplay({weather}) {
  return (
    <Grid container className='layout'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={weather.weather[0].description}
        height="140"
        image={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          City: {weather.name}
        </Typography>
        <Typography gutterBottom variant="h5"color="text.secondary">
          Temperature: {Math.round(weather.main.temp)} <sup>&deg;C</sup>
        </Typography>
        <Typography variant="h5" color="text.secondary">
            Humidity: {weather.main.humidity}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
          Current Condition: {weather.weather[0].description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default WeatherDisplay