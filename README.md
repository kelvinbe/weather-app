<h1 align="center">Weather App</h1> 

![weather app cover](https://github.com/kelvinbe/weather-app/blob/main/src/assets/img1.png)

<h2 align="center">Web application to show the current and upcoming week weather forecast.</h2>    

<br />
<p align="center">
    <img src="https://img.shields.io/badge/React_(17.0.2)-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
    <img src="https://img.shields.io/badge/Redux_(4.1.2)-593D88?style=for-the-badge&logo=react-redux&logoColor=white" alt="redux" />
    <img src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra-ui"/>
    <img src="https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white" alt="restAPI"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/>     
</p>



     
    
  <h3 align="center"><a href="https://mohit-weather-app.vercel.app/"><strong>Live preview »</strong></a></h3>
   
    
  <p align="center"> 
    <br />&#10023;
    <a href="https://github.com/m-sehrawat/Weather-App/issues">Report Bug</a>    &#10023;
    <a href="#Getting-Started">Getting Started</a> &#10023; <a href="#Install">Installing</a> &#10023;    
    <a href="#Contact">Author</a> &#10023;
  </p>



<br/>


This project is about building a web application to show a weather forecast using weather API from external services [Open weather map](https://openweathermap.org/). Here you will be able to search for a specific location in the world and also it will automatically detect your current location in the beginning (for that you need to allow location) and will display all the important weather details.

It have some cool features like save the weather data in redux-store and session-storage to reduce the dependency of network requests, search weather details according to the city, detect your current location for displaying weather data, shows a map of that location, sync data to get the latest updated details of the current weather, toast notification for every action, pop up modal to display extra details of seven-day forecast weather, cool zoom-in zoom-out animations and responsive for every screen size.

To use the app, type a name of the city and click on search/press Enter or else click on the Your location weather button, every time you click on the button first it will check if the data is available in the session storage or not, and if not then it will send a network request else it will take the data from session-storage. 


## 🚀 Features
- Saving the weather data in redux-store and session-storage to reduce the dependency of network requests
- Search weather details according to the city
- Detect your current location for displaying weather data
- Shows a map of that location
- Sync data to get the latest updated details of the current weather
- Toast notification for every action
- Pop up modal to display extra details of seven-day forecast weather
- Cool zoom-in zoom-out animations 
- Responsive for every screen size.

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
cd /home/workspace/weather-App
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


