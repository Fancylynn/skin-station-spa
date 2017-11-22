import React, {Component} from "react";
import styles from "../styles/Reservation.css";
import cssModules from "react-css-modules";
import NavBar from "../components/NavBar";
import ReservationItem from "../components/ReservationItem";
import Footer from "../components/Footer";

const FACE_DATA = [
  {
    name: "Basic Facial",
    timeAndMoney: "60 min | $70"
  },
  {
    name: "Ultrasonic Facial",
    timeAndMoney: "75 min | $95"
  },
  {
    name: "Signature Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Regeneration Facial",
    timeAndMoney: "80 min | $135"
  },
  {
    name: "Gentlemen's Facial",
    timeAndMoney: "60 min | $70"
  },
  {
    name: "Men’s Signature Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Teen Facial",
    timeAndMoney: "35 min | $45"
  },
  {
    name: "Special Acne Facial",
    timeAndMoney: "75 min | $110"
  },
  {
    name: "Organic Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Customized Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Oxygenating Trio Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "Vitamin C Hydrating Facial",
    timeAndMoney: "80 min | $135"
  },
  {
    name: "Collagen Anti-Aging Facial",
    timeAndMoney: "90 min | $150"
  },
  {
    name: "Microdermabrasion Skin Peel Facial",
    timeAndMoney: "75 min | $135"
  },
  {
    name: "RF Firming Facial",
    timeAndMoney: "80 min | $150"
  },
  {
    name: "Thermal Lifting Facial",
    timeAndMoney: "80 min | $150"
  },
  {
    name: "Oxydermy Hyperbaric Oxygen Facial",
    timeAndMoney: "80 min | $150"
  },
  {
    name: "IPL Photo Rejuvenation Facial",
    timeAndMoney: "80 min | $200"
  }
];

const BODY_DATA = [
  {
    name: "Signature Massage",
    timeAndMoney: "30/60 min | $45/$80"
  },
  {
    name: "Deep Tissue Massage",
    timeAndMoney: "30/60 min | $50/$90"
  },
  {
    name: "Aromatherapy Massage",
    timeAndMoney: "30/60 min | $60/$105"
  },
  {
    name: "Hot Stone Massage",
    timeAndMoney: "60/90 min | $100/$145"
  },
  {
    name: "Organic Massage",
    timeAndMoney: "30/60 min | $50/$90"
  },
  {
    name: "Clarifying Back Facial",
    timeAndMoney: "45 min | $60"
  },
  {
    name: "Body Cellulite Treatment",
    timeAndMoney: "30 min | $85"
  },
  {
    name: "Endermologie Cellulite Treatment",
    timeAndMoney: "35 min | $100"
  },
  {
    name: "Microdermabrasion for Body",
    timeAndMoney: "15 min | $60"
  },
  {
    name: "Brown Sugar Scrub",
    timeAndMoney: "30 min | $60"
  },
  {
    name: "Brown Sugar Scrub & Sea Weed Mud Wrap Combo",
    timeAndMoney: "45/90 min | $90/$120"
  }
];

const HAIR_DATA = [
  {
    name: "IPL Hair Removal-Small Area",
    timeAndMoney: "$68"
  },
  {
    name: "IPL Hair Removal-Medium Area",
    timeAndMoney: "$98"
  },
  {
    name: "IPL Hair Removal-Large Area",
    timeAndMoney: "$128"
  },
  {
    name: "Eyebrow Shaping/Design",
    timeAndMoney: "$15"
  },
  {
    name: "Lip or Chin Wax",
    timeAndMoney: "$10"
  },
  {
    name: "Side Wax",
    timeAndMoney: "$18"
  },
  {
    name: "Bikini Wax",
    timeAndMoney: "$30"
  },
  {
    name: "Brazilian Wax",
    timeAndMoney: "$60"
  },
  {
    name: "Under Arms Wax",
    timeAndMoney: "$20"
  },
  {
    name: "Back Wax",
    timeAndMoney: "$45"
  },
  {
    name: "Arms Wax",
    timeAndMoney: "$35"
  },
  {
    name: "Leg Wax",
    timeAndMoney: "$60"
  }
];

const PACKAGE_DATA = [
  {
    name: "Signature Spa Package",
    timeAndMoney: "3 hrs | $200"
  },
  {
    name: "Queen of the Day",
    timeAndMoney: "3 hrs | $238"
  },
  {
    name: "King of the Day",
    timeAndMoney: "3 hrs | $238"
  },
  {
    name: "Couple Spa Package",
    timeAndMoney: "3 hrs | $428"
  }
];

const OTHERS_DATA = [
  {
    name: "Organic Seaweed Mask",
    timeAndMoney: "$45"
  },
  {
    name: "Hydrate Oat Milk Mask",
    timeAndMoney: "$60"
  },
  {
    name: "Algo Mask",
    timeAndMoney: "$45"
  },
  {
    name: "24 K Gold Anti-Aging Mask",
    timeAndMoney: "$45"
  },
  {
    name: "Collagen Hydrating Mask",
    timeAndMoney: "$45"
  },
  {
    name: "Collagen Eye Mask",
    timeAndMoney: "$25"
  },
  {
    name: "BioLife Eye Treatment",
    timeAndMoney: "$50"
  },
  {
    name: "Signature Eye Treatment",
    timeAndMoney: "$60"
  },
  {
    name: "Thermal Lifting Eye Treatment",
    timeAndMoney: "$60"
  },
  {
    name: "LED Light Therapy Treatment",
    timeAndMoney: "$45"
  },
  {
    name: "Ultrasonic Face Treatment",
    timeAndMoney: "$50"
  },
  {
    name: "PCA Smoothing Body Peel",
    timeAndMoney: "$125"
  },
  {
    name: "PCA Sensi Peel",
    timeAndMoney: "$100"
  },
  {
    name: "PCA Peel (hydroquinone free)",
    timeAndMoney: "$100"
  },
  {
    name: "PCA Peel (w/ hydroquinone)",
    timeAndMoney: "$100"
  },
  {
    name: "PCA Peel (w/ hydroquinone & resorcinol)",
    timeAndMoney: "$100"
  },
  {
    name: "Ultra Peel I (TCA Peel) ",
    timeAndMoney: "$100"
  },
  {
    name: "Oxygenating Trio",
    timeAndMoney: "$100"
  },
  {
    name: "Clarify (Salicylic Acid Peel)",
    timeAndMoney: "$60"
  },
  {
    name: "Revitalize (Papaya enzymes Peel)",
    timeAndMoney: "$60"
  },
  {
    name: "RRetexturize (Pumpkin Enzymes Peel) ",
    timeAndMoney: "$60"
  },
  {
    name: "Esthetique Booster (Retinol Treatment)",
    timeAndMoney: "$60"
  },
  {
    name: "Ultra II Booster (Retinol Treatment)",
    timeAndMoney: "$60"
  },
  {
    name: "Detox pore Treatment",
    timeAndMoney: "$60"
  },
  {
    name: "Eyelash Perm",
    timeAndMoney: "$45"
  },
  {
    name: "Eyelash Tint",
    timeAndMoney: "$25"
  },
  {
    name: "Eyebrow Tint",
    timeAndMoney: "$15"
  },
  {
    name: "Permanent Make Up -- Eye Brow",
    timeAndMoney: "$300"
  },
  {
    name: "Permanent Make Up -- 3D Eye Brow",
    timeAndMoney: "$500"
  },
  {
    name: "Permanent Make Up -- Top Eye Liner",
    timeAndMoney: "$350"
  },
  {
    name: "Permanent Make Up -- Bottom Eye Liner",
    timeAndMoney: "$250"
  },
  {
    name: "Permanent Make Up -- Lip Liner",
    timeAndMoney: "$400"
  }
];

class Reservation extends Component {
  state = {
    service: "facial"
  }

  onFacial = () => {
    this.setState({service: "facial"});
  }

  onBody = () => {
    this.setState({service: "body"});
  }

  onHair = () => {
    this.setState({service: "hair"});
  }

  onPackage = () => {
    this.setState({service: "package"});
  }

  onOthers = () => {
    this.setState({service: "others"});
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div styleName="reservation-title">
          <h2 styleName="title">Our Services</h2>
        </div>
        <div styleName="nav-bar">
          <ul>
            <li
                onClick={this.onFacial}
                styleName={this.state.service === "facial" ? "nav-selected" : "nav-li"}
            >
              Facial
            </li>
            <li
                onClick={this.onBody}
                styleName={this.state.service === "body" ? "nav-selected" : "nav-li"}
            >
            Body
            </li>
            <li
                onClick={this.onHair}
                styleName={this.state.service === "hair" ? "nav-selected" : "nav-li"}
            >
            Hair
            </li>
            <li
                onClick={this.onPackage}
                styleName={this.state.service === "package" ? "nav-selected" : "nav-li"}
            >
            Package
            </li>
            <li
                onClick={this.onOthers}
                styleName={this.state.service === "others" ? "nav-selected" : "nav-li"}
            >
            Others
            </li>
          </ul>
        </div>
        {this.state.service === "facial" && <ReservationItem styleName="reservation-list" services={FACE_DATA}/>}
        {this.state.service === "body" && <ReservationItem styleName="reservation-list" services={BODY_DATA}/>}
        {this.state.service === "hair" && <ReservationItem styleName="reservation-list" services={HAIR_DATA}/>}
        {this.state.service === "package" && <ReservationItem styleName="reservation-list" services={PACKAGE_DATA}/>}
        {this.state.service === "others" && <ReservationItem styleName="reservation-list" services={OTHERS_DATA}/>}
        <Footer/>
      </div>
    );
  }
}

export default cssModules(Reservation, styles);
