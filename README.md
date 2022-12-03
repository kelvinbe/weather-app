<h1 align="center">Weather App</h1> 

![weather app cover](https://github.com/kelvinbe/weather-app/blob/main/src/assets/img1.png)

<h2 align="center">Web application to show the current and upcoming week weather forecast.</h2>    

<br />
<p align="center">
    <img src="https://img.shields.io/badge/React_(18.2.0)-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
    <img src="https://img.shields.io/badge/React_Redux_(8.0.5)-593D88?style=for-the-badge&logo=react-redux&logoColor=white" alt="redux" />
    <img src="https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white" alt="restAPI"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/>     
</p>



     
    
  <h3 align="center"><a href="https://mohit-weather-app.vercel.app/"><strong>Live preview »</strong></a></h3>
   
    
  <p align="center"> 
    <br />&#10023;
    <a href="#Getting-Started">Getting Started</a> &#10023; <a href="#Install">Installing</a> &#10023;    
    <a href="#Contact">Funtionality And Structure</a> &#10023;
  </p>



<br/>

## Architecture
This project is built using React and Material UI calling the [Open weather map](https://openweathermap.org/) API to fetch weather data. The data
is displayed using React. Components are the building blocks of the UI where we have four primary components being used, which are 
```Search, ForecastDisplay, WeatherDisplay and Title```


### Search
This is a react component that displays a textfield and allows the user to input a city or country so as to query the api and return that data.
### ForecastDisplay
This component displays weekly data from the weather api for 5 days to come which is what the free-tier package of the OpenWeatherApi provides.
### WeatherDisplay
This componet displays the current weather of the city or country that was queried from the search bar
### Title
This is a simple component displaying the title of the project 
### React-Redux
React Redux is used to manage the state of the application. We do this by saving the data coming from the api in the store provided by react-redux.
The benefit of this is the ability to reduce complexity that comes by drilling props into diffrent components so as to access them. With the store 
provided being global we can access the data from the api from anywhere in the application allowing for scaling and easy redabilty.
### API
This is a javascript file that holds all the api calls to the open weather api

## 🚀 Specifications and Features 
#### STORY-1 
```User can input a city and querying the weather api``` 
#### STORY-2
```A button with title 'Go' calls the open weather api and stores the data in the react-redux store```
#### STORY-3 
```Weather conditions for a give location for the next five days are displayed. 5 days because the free-tire on the api only allows 5 days```
#### STORY-4 
```Responsiveness is added allowing for Mobile and Desktop screens to use the app.```
#### STORY-5 
```Image displaying the current condition of the location is displayed from the open weather api allowing better visualization.```
#### STORY-6 
```Added chaging color pattern in the background to beautify UI and added progress spinner so as to give response to user while data is being```
   ```fethed from the api. Also added the notification library to assist with displaying error meassage if invalid city is entered in input.```

<br/>




![weatherapp](https://github.com/kelvinbe/weather-app/blob/main/src/assets/img.png)


<br />


<br/>


## Getting Started

This project was built using React v 18.2.0, React-Redux v 8.0.5, Material UI, and Open Weather API. It is a web application and for running on your local environment you should follow these guidelines.


### Prerequisites

- NPM 

### Setup

```
Using SSH

# git clone  git@github.com:kelvinbe/weather-app.git
```

+ Open terminal on your workspace with

```
cd /home/workspace/weather-app
```


## Install

Install NPM

Check that you have node and npm installed

To check if you have Node.js installed, run this command in your terminal:


```
node -v
```

To confirm that you have npm installed you can run this command in your terminal:


```
npm -v
```


To install all the dependences of the project, run the following command:


```
npm install
```


To run the application, run the following command:

```
npm start
```


