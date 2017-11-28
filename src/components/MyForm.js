import React from 'react';
import DayPicker from 'react-day-picker/DayPicker';
// import styles from "../styles/MyForm.css";
// import cssModules from "react-css-modules";
import 'react-day-picker/lib/style.css';
import styles from 'react-day-picker/lib/style.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
//   handleDayChange(day) {
//     this.setState({ selectedDay: day });
//   }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }
  render() {
    const { selectedDay } = this.state;
    return (
        <div>
            <DayPicker
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
            />
            <p>
            {this.state.selectedDay
                ? this.state.selectedDay.toLocaleDateString()
                : 'Please select a day 👻'}
            </p>
      </div>

    );
  }
}
// export default cssModules(MyForm, styles);
