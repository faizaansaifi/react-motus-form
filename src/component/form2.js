import React,{Component} from 'react';

import Rates from './form 2/rates';
import Tax from './form 2/tax';
import Payment from './form 2/payment';
import DriverMgmt from './form 2/drivermgmt';
import FixedPayment from './form 2/fixedPayment';
import {nextSection} from "../actions/action";
import {connect} from "react-redux";

export default class Section2 extends Component {
        state = {
            fixedChecked: false,
            centChecked : false,
            techChecked : false,
        }

    markCheckbox = (event) => {
        console.log("Event Name############## " ,event.target.name);
        if((event.target.name) == "fixedandVariableBar"){
            this.setState({
                fixedChecked : !this.state.fixedChecked,
            })
        }
        else if((event.target.name) == "centPerMile"){
            this.setState({
                centChecked : !this.state.centChecked,
            })
        }
        else if((event.target.name) == "technology"){
            this.setState({
                techChecked : !this.state.techChecked,
            })
        }
        setTimeout(() => {
            console.log("Checked Value " ,this.state.centChecked);
            const {nextSection}=this.props;
            nextSection({...this.state});
        },0)
    }


    render(){
            const { fixedChecked=false,centChecked,techChecked}=this.props.newState;
           // console.log("Fix Cent Tech",fixedChecked,centChecked,techChecked);
           // console.log("Fixed",this.state.fixedChecked);
            console.log(fixedChecked,"fixedCheck")
            const renderCheckbox = fixedChecked  ?
                <input type="checkbox" checked onClick={this.markCheckbox} name="fixedandVariableBar"/>
                :<input type="checkbox" onClick={this.markCheckbox} name="fixedandVariableBar"/>
        return(
            <div className="applyProduct">
                <div className="car-default-bar">
                    <div className="step1">
                        <img src={"assets/right-tick.png"}/>
                    </div>
                    <span className="step1-heading">Add Company Info</span>
                    <span className="step2-heading">Assign Products</span>
                    <div className="step3">3
                    </div>
                    <span className="step3-heading">Setup Admins</span>
                </div>
                <div className="car-progress-bar">
                    <div className="step2">
                        <img src={"assets/Car.png"}/>
                    </div>
                </div>
                <div className='enabledProducts'>
                    <h3>Enabled Products</h3>
                    <form>
                        <label className="container">
                            {renderCheckbox}
                            <label>Fixed and Variable Bar</label>
                            <span className="checkmark"></span>
                        </label>
                        {this.state.fixedChecked ?<div> <Rates/> <Tax /></div>: ''}
                        <label className="container">
                            <input type="checkbox" onClick={this.markCheckbox} name="centPerMile" />
                            <label>Cent Per Mile</label>
                            <span className="checkmark"></span>
                        </label>
                        {this.state.centChecked ? <Rates/> : ''}
                        <label className="container">
                            <input type="checkbox" onClick={this.markCheckbox} name="technology" />
                            <label>Technology Only</label>
                            <span className="checkmark"></span>
                        </label>
                        {this.state.techChecked ? <Rates/> : ''}
                    </form>
                </div>
                {!this.state.fixedChecked ?<div> <Payment/> </div>: ''}
                {!this.state.centChecked ? <DriverMgmt/> : ''}
                {!this.state.techChecked ? <FixedPayment/> : ''}
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

Section2=connect(mapStateToProps,mapDispatchToProps)(Section2);