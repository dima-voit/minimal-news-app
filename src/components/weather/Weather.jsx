import axios from "axios";
import React from "react";
import styles from "./weather.module.scss";

export class Weather extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    temp: null,
    tempMax: null,
    tempMin: null,
    locationName: null,
    country: null,
    feelsLike: null,
    humidity: null,
    windSpeed: null,
    icon: null,
    weatherName: null,
  }

  componentDidMount() {
    if(navigator.geolocation) {
      this.getPositions()
      .then((position) => {
        console.log(position.coords.latitude);
        // this.setState({latitude: position.coords.latitude})
        this.getWeather(position.coords.latitude, position.coords.longitude)
    })
    }
  }

  getPositions = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
  }

  getWeather = (latitude, longitude) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {params: {
        lat: latitude,
        lon: longitude,
        units: 'metric',
        appid: '7140505f5aa2181188526b6867fba29c'
      }})
      .then((response) => {
        console.log(response.data);
        this.setState({
          locationName: response.data.name,
          country: response.data.sys.country,
          temp: Math.round(response.data.main.temp),
          tempMax: Math.round(response.data.main.temp_max),
          tempMin: Math.round(response.data.main.temp_min),
          feelsLike: Math.round(response.data.main.feels_like),
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
          icon: response.data.weather[0].icon,
          weatherName: response.data.weather[0].main,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

    render () {
    return (
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>{this.state.locationName}<small><sup>{this.state.country}</sup></small></h3>
        <div className={styles.weather}>
          <div className={styles.weatherItem}>
            <div className={styles.weatherIcon}>
              <img src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.weatherName} />
            </div>
            <div className={styles.weatherTemp}>
              <div className={styles.tempNow}>{this.state.temp}°</div>
              <div className={styles.tempFeel}>Feels like {this.state.feelsLike}°</div>
              <div>Max:{this.state.tempMax}°&nbsp; Min:{this.state.tempMin}°</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
