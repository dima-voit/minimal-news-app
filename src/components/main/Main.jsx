import React from "react";
import styles from "./main.module.scss";

export class Main extends React.Component {

  render() {
    return (
      <main className={styles.main}>
        <div className={styles.news}>
          <div className={styles.mainNews}>
            <article>
              <a href="#">
                <div className={styles.imgNews}>
                  <img src="https://via.placeholder.com/405x240" alt="News" />
                </div>
                <div className={styles.textNews}>
                  <h3 className={styles.titleNews}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur.
                  </h3>
                  <div className={styles.previewNews}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta fuga, magni velit optio corrupti iste, odit officia eveniet cum doloribus assumenda eos fugiat culpa. Officiis vel architecto necessitatibus aspernatur.</p>
                  </div>
                </div>
              </a>
            </article>
          </div>
          <div className={styles.smallNews}>
            <article>
              <a href="#">
                <div className={styles.imgNews}>
                  <img src="https://via.placeholder.com/190x130" alt="News" />
                </div>
                <div className={styles.textNews}>
                  <h3 className={styles.titleNews}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <div className={styles.previewNews}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </a>
            </article>
            <article>
              <a href="#">
                <div className={styles.imgNews}>
                  <img src="https://via.placeholder.com/190x130" alt="News" />
                </div>
                <div className={styles.textNews}>
                  <h3 className={styles.titleNews}>
                    Delectus pariatur rerum unde assumenda distinctio blanditiis sunt.
                  </h3>
                  <div className={styles.previewNews}>
                    <p>Officiis vel architecto necessitatibus aspernatur.</p>
                  </div>
                </div>
              </a>
            </article>
            <article>
              <a href="#">
                <div className={styles.imgNews}>
                  <img src="https://via.placeholder.com/190x130" alt="News" />
                </div>
                <div className={styles.textNews}>
                  <h3 className={styles.titleNews}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur.
                  </h3>
                  <div className={styles.previewNews}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta fuga, magni velit optio corrupti iste, odit officia eveniet cum doloribus assumenda eos fugiat culpa. Officiis vel architecto necessitatibus aspernatur.</p>
                  </div>
                </div>
              </a>
            </article>
            <article>
              <a href="#">
                <div className={styles.imgNews}>
                  <img src="https://via.placeholder.com/190x130" alt="News" />
                </div>
                <div className={styles.textNews}>
                  <h3 className={styles.titleNews}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <div className={styles.previewNews}>
                    <p>Provident soluta fuga, magni velit optio corrupti iste, odit officia eveniet cum doloribus assumenda eos fugiat culpa.</p>
                  </div>
                </div>
              </a>
            </article>
            <article>
              <a href="#">
                <div className={styles.imgNews}>
                  <img src="https://via.placeholder.com/190x130" alt="News" />
                </div>
                <div className={styles.textNews}>
                  <h3 className={styles.titleNews}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <div className={styles.previewNews}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </a>
            </article>
            <article>
              <a href="#">
                <div className={styles.imgNews}>
                  <img src="https://via.placeholder.com/190x130" alt="News" />
                </div>
                <div className={styles.textNews}>
                  <h3 className={styles.titleNews}>
                    Delectus pariatur rerum unde assumenda distinctio blanditiis sunt.
                  </h3>
                  <div className={styles.previewNews}>
                    <p>Officiis vel architecto necessitatibus aspernatur.</p>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </div>
        <aside className={styles.aside}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Kyiv</h3>
            <div className={styles.weather}>
              <div className={styles.weatherItem}>
                <h4 className={styles.weatherDay}>Today</h4>
                <div className={styles.weatherIcon}>
                  <img src="https://s.yimg.com/os/weather/1.0.1/dark_icon/64x64/partly_cloudy_day@2x.png" alt="" />
                </div>
                <div className={styles.weatherTemp}>
                  <span className={styles.night}>+1°</span> <span class={styles.day}>+5°</span>
                </div>
              </div>
              <div className={styles.weatherItem}>
                <h4 className={styles.weatherDay}>Mon</h4>
                <div className={styles.weatherIcon}>
                  <img src="https://s.yimg.com/os/weather/1.0.1/dark_icon/64x64/cloudy_day_night@2x.png" alt="" />
                </div>
                <div className={styles.weatherTemp}>
                  <span className={styles.night}>+2°</span> <span class={styles.day}>+8°</span>
                </div>
              </div>
              <div className={styles.weatherItem}>
                <h4 className={styles.weatherDay}>Tue</h4>
                <div className={styles.weatherIcon}>
                  <img src="https://s.yimg.com/os/weather/1.0.1/dark_icon/64x64/scattered_showers_day_night@2x.png" alt="" />
                </div>
                <div className={styles.weatherTemp}>
                  <span className={styles.night}>+11°</span> <span class={styles.day}>+15°</span>
                </div>
              </div>
              <div className={styles.weatherItem}>
                <h4 className={styles.weatherDay}>Wen</h4>
                <div className={styles.weatherIcon}>
                  <img src="https://s.yimg.com/os/weather/1.0.1/dark_icon/64x64/clear_day@2x.png" alt="" />
                </div>
                <div className={styles.weatherTemp}>
                  <span className={styles.night}>+1°</span> <span class={styles.day}>+5°</span>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Exchange rate: <span>UAH</span></h3>
            <table className={styles.exchangeTable}>
              <tbody>
                <tr>
                  <th></th>
                  <th>buy</th>
                  <th>sell</th>
                </tr>
                <tr>
                  <td>USD</td>
                  <td>28.30</td>
                  <td>28.60</td>
                </tr>
                <tr>
                  <td>EUR</td>
                  <td>32.00</td>
                  <td>32.50</td>
                </tr>
                <tr>
                  <td>GBP</td>
                  <td>37.50</td>
                  <td>39.50</td>
                </tr>
                <tr>
                  <td>PLN</td>
                  <td>6.600</td>
                  <td>7.600</td>
                </tr>
              </tbody>
            </table>
          </section>
        </aside>
      </main>
    )
  }
}