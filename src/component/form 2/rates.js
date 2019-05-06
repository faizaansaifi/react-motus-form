import React,{Component} from 'react';
export default class Rates extends Component {
    render(){
        return(
            <div className="fixedVariableRate">
                <form>
                    <h5>Select Required Forms : </h5>
                    <label className="container">
                        <input type="checkbox" value="Insurance Declaration" name="fixedVariable" />
                        <ul>
                            <li>Insurance Declaration</li>
                            <li><p>(Required for this product)</p></li>
                        </ul>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                    <input type="checkbox" value="Vehicle Information" name="vehicleInformation" />
                        <ul>
                            <li>Vehicle Information</li>
                            <li><p>(Required for this product)</p></li>
                        </ul>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                        <input type="checkbox" value="Insurance Declaration" name="vehicleInformation" />
                        <ul>
                            <li>Motor Vehicle Records(MVR)</li>
                        </ul>
                        <span className="checkmark"></span>
                    </label>
                </form>
            </div>
        )
    }
}