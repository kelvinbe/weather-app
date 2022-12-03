import axios from 'axios'



const API = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'f33a484cf794d08d0148764789aaba32'


export const getWeatherData = async (location) => {

    const response = await axios.get(API, {
        params: {
            q: location,
            units: 'metric',
            APPID: API_KEY
        }
    })

    console.log('response', response)

    return response.data



}


export const getForecastData = async (location) => {

    let loc = await getWeatherData(location)

    const latitude = loc.coord.lat
    const longitude = loc.coord.lon

    const ForecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    

    let forcastData = await axios.get(ForecastAPI);


    console.log('forecastSliced', forcastData.data.list.slice(33))

    const forecastSlicedData =  forcastData.data.list.slice(33)


    return forecastSlicedData



}