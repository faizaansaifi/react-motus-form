import React,{Component} from 'react';

export default class Tax extends Component{
    render(){
        return(
            <div className="annualTax">
                <p>How often should we calculate incurred tax?</p>
                <select name="tax">
                    <option value="Annually">Annually</option>
                    <option value="Quaterly">Quaterly</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <h5>What month does tax reporting start?</h5>
                <label className="radio-container">
                    <input type="radio" name="month" value="November" />November
                        <span className="radioDot"></span>
                </label>
                <label className="radio-container">
                    <input type="radio" name="month" value="December" />December
                    <span className="radioDot"></span>
                </label>
            </div>
        )
    }
}
