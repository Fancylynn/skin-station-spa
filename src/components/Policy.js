import React, {PropTypes} from "react";
import cssModules from "react-css-modules";
import styles from "../styles/Policy.css";

const Policy = props => {
  return (
    <div>
      <h1 styleName="policy-title">STORE POLICIES</h1>
      <div styleName="policy-detail">
        <h3>Refunds:</h3>
        <p>There are no refunds for any service, series or product.Unopened products
                in original, undamaged packaging can be returned within 14 days for store
                credit when accompanied with a receipt. Spa series of treatments and gift
                certificates can be exchanged for credit only to be used toward other
                products or services.</p>

        <h3>Reservations:</h3>
        <p>All spa services are available by appointment. We recommend scheduling your
            appointment as far in advance as possible to ensure availability. Walk-ins
            are based on availability. Any gift cards, vouchers, or certificates must be
            mentioned at time of booking. For parties of 3 and larger or any spa package,
            we require a credit card or gift certificate number.</p>

        <h3>Check In:</h3>
        <p>If you are a first time client, we suggest that you arrive 10 minutes before
            your appointment. This will allow ample time for a skin consultation necessary
            to customize treatments to your personal needs and to complete a profile before
            your service.</p>

        <h3>Late Arrivals:</h3>
        <p>Late arrivals will not receive an extension of scheduled service.</p>

        <h3>Cancellations:</h3>
        <p>We require 24 hours advance notice in order to cancel or change any service
            with no charge. If you do not notify us of the cancellation 24 hours prior
                to your spa treatment, you are subject to a $15 charge for each service that
                would have been rendered. This policy also applies to gift card, vouchers,
                or certificates holders.</p>

        <h3>Gift Certificates:</h3>
        <p>All gift certificates must be mentioned and approved prior to making your appointment.</p>

        <h3>Spa Promotions:</h3>
        <p>Spa promotions cannot be used or combined with any other offer, promotion, or third
            party gift certificate.</p>

        <h3>Loss or Damage:</h3>
        <p>For the protection of your clothing, we recommend wearing the robe provided.
            We cannot be responsible for any loss or damage of personal items.</p>

        <h3>Cell Phones:</h3>
        <p>We ask that you please mute cell phones during your visit. Please maintain
            conversations at a considerate volume in all spa areas.</p>

        <h3>Health Conditions:</h3>
        <p>Please advise us at time of booking of any health conditions, allergies,
            injuries, pregnancy or special needs that may affect your services.</p>

        <h3>Cleanliness:</h3>
        <p>For your safety and health we are committed to the highest standards of cleanliness.
            All equipment is sterilized and sanitized after every service and treatment.</p>

        <h3>Gratuities:</h3>
        <p>All services do not include gratuity but a cash gratuity of 15-20% of each service
            price is appropriate and appreciated. However, the gratuity you leave is entirely
            based on your satisfaction.</p>

        <h3>Payment:</h3>
        <p>All major credit cards are accepted. We do not accept any personal or traveler’s
            checks. Any gift cards, vouchers, or certificates must be mentioned at time of booking.</p>
      </div>
    </div>
  );
};

export default cssModules(Policy, styles);
