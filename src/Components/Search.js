import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { getWeatherData, getForecastData } from "../api/weatherApi";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/search.css";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Store } from "react-notifications-component";

function Search() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForeCast] = useState({});
  const [loading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);

  const search = async (e) => {
    try {
      setIsLoading(true);
      const data = await getWeatherData(location);
      const forecastData = await getForecastData(location);
      dispatch({ type: "GET_SEARCH", data: data });
      dispatch({ type: "GET_FORECAST", data: forecastData });
      setWeather(data);
      setForeCast(forecastData);
      setLocation("");
      setIsLoading(false);
    } catch (error) {
      Store.addNotification({
        title: "Error ",
        message: "Invalid Country or City",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });

      console.log("error", error);
      setIsLoading(false)
    }
  };

  useEffect(() => {});

  console.log("foreee", forecast);
  console.log("results", results);

  return (
    <Box sx={{ flexGrow: 1 }} className="search-layout">
      <Grid container spacing={2} style={{display: 'contents'}}>
        <Grid item xs={12}>
          <TextField
            label="Search City"
            InputProps={{
              type: "search",
            }}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search..."
            type={search}
          />
        </Grid>
        <Grid item xs={12}>
          <Button className="button-style" variant="contained" onClick={search}>
            GO!
          </Button>
        </Grid>

        {loading ? <div style={{marginTop: 20}}><CircularProgress /> </div>: weather.main && (
          <WeatherDisplay
            className="layout"
            weather={weather}
            forecast={forecast}
          />
        )}
      </Grid>
    </Box>
  );
}

export default Search;
