import React from "react";
import styles from "./news.module.scss";

export class News extends React.Component {
  render () {
    return (
      <div className={styles.news}>
        <div className={styles.mainNews}>
          <article>
            <a href="/#">
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
            <a href="/#">
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
            <a href="/#">
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
            <a href="/#">
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
            <a href="/#">
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
            <a href="/#">
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
            <a href="/#">
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
    )
  }
}
