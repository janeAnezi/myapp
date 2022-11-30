import React from "react";
import "./sectionstyles.css";
import Invite from "../assets/invite.svg";
import Voucher from "../assets/voucher.svg";
import CollectCoin from "../assets/collect-coins.svg";

const emailState = {
  email: "",
  error: "",
  success: ""
};

class Section extends React.Component {
  constructor() {
    super();
    this.state = emailState;
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  emailValidation() {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!this.state.email || regex.test(this.state.email) === false) {
      this.setState({
        error: "please enter a valid email"
      });
      return false;
    } else {
       return ({ success: " ✅ Your email is confirmed!" });
    }

  }
  onSubmit() {
    if (this.emailValidation()) {
      console.log(this.state);
      this.setState(emailState);
    }
  }

  render() {
    return (
      <div className="bg-warning p-5 ">
        <div className="row">
            <div lg={5} md={6} sm={12} className="col  pt-5 form">
                <div className=" text-center sectncard">
                <h3 className="card-heading"> REFER FRIENDS AND GET REWARDS </h3>
                <p className="card-text">
                    Refere your friends to use and earn hotel booking vouchers.
                    We'll give you one coin for each friend that installs our
                    extension. Minimum cash-out at 20 coins
                </p>
                {this.state.email === true  ? <span className="text-success p-2">{this.state.success}</span> : <span className="text-danger p-2">{this.state.error}</span>}
                <form  onClick={(event) => {
                        this.onSubmit();
                        event.preventDefault();
                    }}>
                    <i className="fa fa-envelope icon"></i>
                    <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    className="form-control"
                    placeholder="Enter your email address"
                    />
                    <button
                    type="submit"
                    className="form-control mt-1 reflink"
                    >
                    Get Referal Link
                    </button>
                </form>
                <p className="pt-5 cardtext"> Limits on max rewards apply.</p>
                </div>
            </div>
            <div lg={6} md={5} sm={12} className="col pt-5 ml-5 sectiontestCol">
                <div className="sectionTest">
                    <div className="mt-3 p-2">
                        <img src={Invite} alt="collect coin" />
                    </div>
                    <div>
                        <p className="parTitle">TEST 1</p>
                        <h4>INVITE </h4>
                        <p>Refer friends with your unique referal link. </p>
                    </div>
                </div>

                <div className="sectionTest step-2">
                    <div className="mt-4 p-3">
                        <img src={CollectCoin} alt="collect coin" />
                    </div>

                    <div>
                        <p className="parTitle">STEP 2</p>
                        <h4>COLLECTIONS</h4>
                        <p>
                        Get one coin for each friend that instals our extension using
                        your referal link.
                        </p>
                    </div>
                </div>

                <div className="sectionTest">
                    <div className="mt-4 p-3">
                        <img src={Voucher} alt="collect coin" />
                    </div>

                    <div>
                        <p className="parTitle">TEST 3</p>
                        <h4>GET VOUCHER </h4>
                        <p>
                        Redeem for a $20 hotel booking voucher once you collect 20
                        coins.
                        </p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
