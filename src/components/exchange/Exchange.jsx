import React from "react";
import styles from "./exchange.module.scss";

export class Exchange extends React.Component {

  render() {
    return (
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
    )
  }
}