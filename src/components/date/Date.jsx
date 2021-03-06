import React from "react";
import styles from "./date.module.scss";

export class CurrentDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className={styles.currentDate}>
        {this.state.date.toLocaleString('en-us',{month:'short'})},&nbsp;
        {this.state.date.getDate()}<br/>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}