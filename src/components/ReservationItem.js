import React, {Component, PropTypes} from "react";
import styles from "../styles/Reservation.css";
import cssModules from "react-css-modules";


class Reservation extends Component {
  static propTypes = {
    services: PropTypes.any.isRequired,
    onDisplayBookCalender: PropTypes.func.isRequired
  };

  render() {
    const {services, onDisplayBookCalender} = this.props;
    const serviceList = services.map((service, idx) => {
      return (
        <div key={idx} id={"top" + idx}>
          <div styleName="service-item">
            <hr styleName="seperate-line"/>
            <div styleName="service-item-detail">
              <p styleName="service-name">{service.name}</p>
              <p styleName="service-time-and-money">{service.timeAndMoney} </p>
              <button styleName="book-button" onClick={() => onDisplayBookCalender(service.name)}>Book Now</button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div styleName="service-item-container" >
        {serviceList}
      </div>
    );
  }
}

export default cssModules(Reservation, styles);

