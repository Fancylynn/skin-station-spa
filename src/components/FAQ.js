import React, {Component} from "react";
import styles from "../styles/FAQ.css";
import cssModules from "react-css-modules";

class FAQ extends Component {
  render() {
    return (
      <div styleName="FAQ-container">
        <div styleName="FAQ">
        <h1> FAQ </h1>
          <div styleName="question-and-answer">
            <h3>How do I view a reservation I booked online?</h3>
            <p>If you created or logged into an account when booking your appointment,
                    you can log into the system to view your appointments. Click the
                    Sign Up/Log In link in the right-hand corner. Once signed in, use
                    the “My Account” tab to view appointments.</p>
          </div>

          <div styleName="question-and-answer">
            <h3>What if I want to reserve multiple services?</h3>
            <p> {"If you want to reserve multiple services on a single day: After you select your first service, click 'Select another Service 'to select a second. Repeat this process to select a third, fourth, etc."}</p>
            <p> {"If you want to reserve services on an additional day: Use the 'Book more appointments' link on the final confirmation screen to book appointments on additional days."}</p>
          </div>

          <div styleName="question-and-answer">
            <h3>Where can I find descriptions of services or packages?</h3>
            <p>Click directly on the service or package name to view its description.</p>
          </div>

          <div styleName="question-and-answer">
            <h3>What do I do if my service is not available?</h3>
            <p>If no times are available on the date you selected, you can check availability for neighboring days or weeks by clicking through the date tabs.</p>
            <p>{"If you can't find any appointments, you can also call us."}</p>
          </div>

          <div styleName="question-and-answer">
            <h3>{"I've selected the wrong service. Can I change my selection?"}</h3>
            <p> {"Yes. Use the controls at the top of the 'Select Appointments' screen to change your service, preferred staff (if applicable) and time."}</p>
          </div>

          <div styleName="question-and-answer">
            <h3>How can I find out prices and availability before I make a booking?</h3>
            <p>You can use our system to check prices and general availability at any time. We cannot guarantee that the exact appointment you want will be available if you decide to book at a later point in time.</p>
          </div>

          <div styleName="question-and-answer">
            <h3>What should I do if I need more help?</h3>
            <p>Call us using the phone number displayed in the locatons page.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default cssModules(FAQ, styles);
