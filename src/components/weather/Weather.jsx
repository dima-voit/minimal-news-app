import React from "react";
import styles from "./weather.module.scss";

export class Weather extends React.Component {

  render () {
    return (
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Kyiv</h3>
        <div className={styles.weather}>
          <div className={styles.weatherItem}>
            <h4 className={styles.weatherDay}>Today</h4>
            <div className={styles.weatherIcon}>
              <img src="https://s.yimg.com/os/weather/1.0.1/dark_icon/64x64/partly_cloudy_day@2x.png" alt="" />
            </div>
            <div className={styles.weatherTemp}>
              <span className={styles.night}>+1°</span> <span className={styles.day}>+5°</span>
            </div>
          </div>
          <div className={styles.weatherItem}>
            <h4 className={styles.weatherDay}>Mon</h4>
            <div className={styles.weatherIcon}>
              <img src="https://s.yimg.com/os/weather/1.0.1/dark_icon/64x64/cloudy_day_night@2x.png" alt="" />
            </div>
            <div className={styles.weatherTemp}>
              <span className={styles.night}>+2°</span> <span className={styles.day}>+8°</span>
            </div>
          </div>
          <div className={styles.weatherItem}>
            <h4 className={styles.weatherDay}>Tue</h4>
            <div className={styles.weatherIcon}>
              <img src="https://s.yimg.com/os/weather/1.0.1/dark_icon/64x64/scattered_showers_day_night@2x.png" alt="" />
            </div>
            <div className={styles.weatherTemp}>
              <span className={styles.night}>+11°</span> <span className={styles.day}>+15°</span>
            </div>
          </div>
          <div className={styles.weatherItem}>
            <h4 className={styles.weatherDay}>Wen</h4>
            <div className={styles.weatherIcon}>
              <img src="https://s.yimg.com/os/weather/1.0.1/dark_icon/64x64/clear_day@2x.png" alt="" />
            </div>
            <div className={styles.weatherTemp}>
              <span className={styles.night}>+1°</span> <span className={styles.day}>+5°</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
