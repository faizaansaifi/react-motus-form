import React,{Component} from 'react';
export default class FixedPayment extends Component {
    render() {
        return (
            <div className="driver">
                <h3>Fixed Payment Schedule</h3>
                <span>Applies to Fixed & Variable Rate product only.</span>
                <div className="container">
                    <label className="radio-container">Prior Month(Arrears)
                        <input type="radio" id="pay1" name="payment-group" />
                        <span className="radioDot"></span>
                    </label>
                    <label className="radio-container">Current Month(Upfront)
                        <input type="radio" id="pay2" name="payment-group" />
                        <span className="radioDot"></span>
                    </label>
                </div>
            </div>
        )
    }
}