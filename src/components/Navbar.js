import {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.svg";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from '@mui/icons-material/Clear';
import "./navbarcss.css";



class Navbar extends Component {
    state ={clicked: false};
   
    handleClick =() => {
        this.setState({clicked: !this.state.clicked});
    };
    constructor() {
        super()
    
        this.state = {
          activeItem: 0,
          items: ['Chrome Extensions', 'Price Comparison', 'Blog'],
        }
      }
    
      handleItemClick(index) {
        this.setState({
          activeItem: index,
        })
      }


    render() {
        
        return (
            <div className="container-fluid NavbarItems">
                <div className="logo">
                    <img src={logo} alt="nav-logo"></img>
                </div>
                <div className="menu-icons" onClick={this.handleClick}>
                  {this.state.clicked? <ClearIcon color="primary"/> : <DehazeIcon color="primary"/> }
                </div>
                <ul className={this.state.clicked? "nav-menu show" : "nav-menu"}>
                    
                    {this.state.items.map((item, index) => 
                        <li key={index} className={this.state.activeItem === index ? "nav-links active" : ""} 
                        onClick={this.handleItemClick.bind(this, index)}
                        >
                            {item}
                        </li>
                    )} 
                </ul>
                
            </div>
        )
    }
}
export default Navbar;