import React from "react";
import DayPicker from "react-day-picker/DayPicker";
import styles from "../styles/Calendar.css";
import cssModules from "react-css-modules";
import "react-day-picker/lib/style.css";
// import styles from "react-day-picker/lib/style.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined
    };
  }

  handleDayClick(day, {selected}) {
    this.setState({
      selectedDay: selected ? undefined : day
    });
  }

  render() {
    return (
      <div styleName="calendar-content">
        <div>
          <DayPicker
              selectedDays={this.state.selectedDay}
              onDayClick={this.handleDayClick}
          />
        </div>
        <div styleName="calendar-service">
          <h2> Reservation </h2>
          <p>{this.props.serviceReserved}</p>
          <p>
            {this.state.selectedDay
                  ? this.state.selectedDay.toLocaleDateString()
                  : "Please select a day 👻"}
          </p>
        </div>
      </div>

    );
  }
}

export default cssModules(Calendar, styles);
