import React, { useState } from "react";

import "../styles/forecast.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const ForecastDisplay = () => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  console.log("hover", isHover);

  const results = useSelector((state) => state.forecastData);

  const handleHover = (id) => {
    setIsHover(true);
  };

  const handleHoverOut = () => {
    setIsHover(false);
  };

  const toggleForcast = () => {
    navigate("/");
  };

  console.log(results);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgb(42 130 156)",
          paddingTop: 80,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        className="color-back"
      >
        <>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item md={12}>
              <h1 className="text-games">Weekly Forecast</h1>
            </Grid>
            <Grid
              item
              md={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                style={{ marginBottom: 10 }}
                onClick={toggleForcast}
              >
                Back to Search
              </Button>
            </Grid>
            {results?.map((weather, key) => {
              return (
                <Grid
                  item
                  style={{ padding: 10, marginBottom: 20 }}
                  key={weather.dt}
                  className="flex-wrapper"
                >
                  <Card
                    style={{ borderRadius: 20 }}
                    sx={{ maxWidth: 345 }}
                    key={weather.dt}
                    className="tag"
                    onMouseOver={() => handleHover(weather.id)}
                    onMouseOut={handleHoverOut}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                      alt="Paella dish"
                    />
                    <CardContent style={{ display: "flex" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <p>Day: </p>
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
                          textAlign: "center",
                          color: "antiquewhite",
                          lineHeight: 1,
                          padding: 17,
                  
                        }}
                        component="div"
                      >
                        <p style={{whiteSpace: 'nowrap'}}>{weather.dt_txt.slice(0, 10)}</p>
                        <p>
                          {Math.round(weather.main.temp)} <sup>&deg;C</sup>
                        </p>
                        <p>{weather.main.humidity}</p>
                        <p style={{whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>{weather.weather[0].description}</p>
                        <p>
                          {Math.round(weather.main.feels_like)}
                          <sup>%</sup>
                        </p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      </div>
    </div>
  );
};

export default ForecastDisplay;
