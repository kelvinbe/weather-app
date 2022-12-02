import axios from 'axios'



const API = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'b83257fc8bfc2e65a49556fb31edbf14'



export const getWeatherData = async (location) => {

    const response = await axios.get(API, {
        params: {
            q: location,
            units: 'metric',
            APPID: API_KEY
        }
    })

    return response.data



}