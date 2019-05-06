import React,{Component} from "react";
import {connect} from "react-redux";
import {nextSection} from "../actions/action"

export default class Section1 extends Component{
    state={     }
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value});
        const {nextSection}=this.props;
        nextSection({...this.state});
    }

    render(){
        console.log("New State value",this.props.newState);
        const {companyName,companyAlias,city}= this.props.newState;
        return(
            <div className="form1-container">
                <div className="car-default-bar">
                    <span className="step1-heading">Add Company Info</span>
                    <div className="step2">2</div>
                    <span className="step2-heading">Assign Products</span>
                    <div className="step3">3</div>
                    <span className="step3-heading">Setup Admins</span>
                </div>
                <div className="car-progress-bar">
                    <div className="step1">
                        <img src={"assets/Car.png"}/>
                    </div>
                </div>
                <div className="form-head">
                    <input type="checkbox" name="demo"/><span>This is demo company</span>
                </div>
                <form>
                    <label>Company Name</label>
                    <input type="text" name="companyName"  value={this.props.newState.companyName} onChange={this.handleChange}/>
                    <label>Company Alias</label>
                    <input type="text" name="companyAlias" value={this.props.newState.companyAlias} onChange={this.handleChange}/>
                    <h5>Account Information</h5>
                    <label>Industry</label>
                    <select name="CarName" option={this.props.newState.CarName}  onChange={this.handleChange}>
                        <option value="">Select car:</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Citroen">Citroen</option>
                    </select>
                    <label>Account Manager</label>
                    <select>
                        <option value="0">Select</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                    </select>
                    <label>Start Date</label>
                    <input type="date" name="start_date" value={this.props.newState.start_date} onChange={this.handleChange}/>
                    <h5>Contact Information</h5>
                    <label>Country</label>
                    <select onChange={this.handleChange} value={this.props.newState.country}>
                        <option name="country" value="0">Select Country:</option>
                        <option name="country" value="1">India</option>
                        <option name="country" value="2">USA</option>
                        <option name="country" value="3">United Kingdom</option>
                    </select>
                    <label>Billing Address Line 1</label>
                    <input type="text" name="add_line1" value={this.props.newState.add_line1} onChange={this.handleChange}/>
                    <label>Billing Address Line 2</label>
                    <input type="text" name="add_line2" value={this.props.newState.add_line2} onChange={this.handleChange}/>
                    <label>City</label>
                    <input type="text" name="city" value={this.props.newState.city} onChange={this.handleChange}/>
                    <div className="state_zip">
                        <span className="state">
                        <label>State</label>
                        <select>
                            <option name='city' value="0">Select City:</option>
                            <option name='city' value="1">Delhi</option>
                            <option name='city' value="2">Mumbai</option>
                            <option name='city' value="3">Ahmadabad</option>
                        </select>
                        </span>
                        <span className="zip">
                        <label>ZIP Code</label>
                        <input type="text" name="zip" value={this.props.newState.zip} onChange={this.handleChange}/>
                        </span>
                    </div>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={this.props.newState.phone} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(newState)=> ({
     newState,
})

const mapDispatchToProps=(dispatch)=>({
            nextSection: (data)=>dispatch(nextSection(data))
})

Section1=connect(mapStateToProps,mapDispatchToProps)(Section1);