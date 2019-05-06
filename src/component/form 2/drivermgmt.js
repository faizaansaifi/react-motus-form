import React,{Component} from 'react';
export default class DriverMgmt extends Component {
    render(){
        return(
            <div className="driver">
                <h3>Driver Management</h3>
                <div className="container">
                    <label className="radio-container">Self-Service
                        <input type="radio" id="drive1" name="driver-group" />
                        <span className="radioDot"></span>
                    </label>
                    <label className="radio-container">HRIS Feed
                        <input type="radio" id="drive2" name="driver-group" />
                        <span className="radioDot"></span>
                    </label>
                    <label className="radio-container">Motus API
                        <input type="radio" id="drive3" name="driver-group" />
                        <span className="radioDot"></span>
                    </label>
                </div>
            </div>
        )
    }
}