import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/logo.svg";
import MailOutlineIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footerstyles.css";

class Footer extends React.Component {
    constructor() {
        super()
    
        this.state = {
          activeItem: 0,
          items: ['Price comparison', 'chrome extensions', 'How it works', ' Ratepunk Blog', ' Privacy policy'],
        }
      }
    
      footerItemClick(index) {
        this.setState({
          activeItem: index,
        })
      }

    render () {
  return (
    <div>
      <Row className="p-4 footer-row">
        <Col lg={4} md={4} sm={12} className="footer-col first-col">
          <img src={logo} alt="logo" className="pb-2"></img>
          <p>
            Ratepunk compares hotel room prices accross the major online travel
            agencies. when you search for a room,Ratepunk extension scans the
            top booking sites and runs a price comparison. so you can be
            confident Knowing you are getting th best deal!.
          </p>
        </Col>
        <Col lg={4} md={4} sm={12} className="footer-col">
          <h6 className="pb-2 footer-heading">QUICK LINKS</h6>
          <ul>
                {this.state.items.map((item, index) => 
                    <li>
                        <a key={index} href="#home" className={this.state.activeItem === index ? "active" : ""}
                            onClick={this.footerItemClick.bind(this, index)}
                        >
                            {item}
                        </a>
                    </li>
                )}
          </ul>
        </Col>
        <Col lg={4} md={4} sm={12} className="footer-col">
          <h6 className="pb-2 footer-heading">CONTACT</h6>
          <p>
            <MailOutlineIcon color="primary" /> hi@ratepunk.com
          </p>
          <h6 className="pb-2 footer-heading">SOCIAL</h6>
          <InstagramIcon color="primary" /> <FacebookIcon color="primary" /> <LinkedInIcon color="primary" /> <TwitterIcon color="primary" />
        </Col>
      </Row>
      <p className="p-4 copyrite">&copy; 2022 Ratepunk All Rights Reserved</p>
    </div>
  );
    }
}

export default Footer;
