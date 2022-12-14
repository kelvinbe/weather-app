import React from "react";
import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import "../styles/weather.css";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Boot = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: "270px",
  },

  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "728px",
  },
}));

function WeatherDisplay({ weather, forecast }) {
  const navigate = useNavigate();

  console.log("forecastWea", forecast);

  const toggleForcast = () => {
    navigate("/forecast");
  };

  return (
    <div>
      <Grid container className="layout">
        <Button
          size="small"
          variant="outlined"
          style={{ marginBottom: 10 }}
          onClick={toggleForcast}
        >
          Weekly Forecast
        </Button>
        <Boot
          sx={{ maxWidth: 345 }}
          style={{
            borderRadius: "20px",
            backgroundColor: "#cae2e6",
            marginBottom: 20,
          }}
        >
          <CardMedia
            component="img"
            alt={weather.weather[0].description}
            height="140"
            image={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <CardContent style={{ display: "flex" }}>
            <Typography gutterBottom variant="h5" component="div">
              <p>City: </p>
              <p>Temperature: </p>
              <p>Humidity: </p>
              <p>Condition: </p>
              <p>Precipitation: </p>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              style={{
                backgroundColor: "#90b3e0",
                borderRadius: "30px",
                color: "antiquewhite",
                lineHeight: 1,
                fontSize: 24,
                width: 126
              }}
              component="div"
            >
              <p>{weather.name}</p>
              <p>
                {Math.round(weather.main.temp)} <sup>&deg;C</sup>
              </p>
              <p>{weather.main.humidity}</p>
              <p style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{weather.weather[0].description}</p>
              <p>
                {Math.round(weather.main.feels_like)}
                <sup>%</sup>
              </p>
            </Typography>
          </CardContent>
        </Boot>
      </Grid>
    </div>
  );
}

export default WeatherDisplay;
