import React from "react";
import axios from "axios";

import styles from "./exchange.module.scss";

export class Exchange extends React.Component {

  state = {
    exchangeRows: [],
  };

  constructor() {
    super();
    axios
      .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((response) => {
        console.log(response.data);
        this.setState({ exchangeRows: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
            
            {this.state.exchangeRows.map((exchangeRow) => (
              <tr key={exchangeRow.r030}>
                <td>{exchangeRow.cc}</td>
                <td>{exchangeRow.rate}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </section>
    )
  }
}
