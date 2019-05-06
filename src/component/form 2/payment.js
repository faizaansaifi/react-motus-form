import React,{Component} from 'react';
export default class Payment extends Component {
    render() {
        return (
            <div className="payment">
                <div className="driver">
                    <h3>Payment Method</h3>
                    <span>
                            Applies to Fixed  & Rate
                            and Cents per Mile products only.
                        </span>
                    <form>
                        <div className="container">
                            <label className="radio-container">Direct Deposit
                                <input type="radio" id="test1" name="radio-group"/>
                                <span className="radioDot"></span>
                            </label>
                            <label className="radio-container">Concur
                                <input type="radio" id="test2" name="radio-group"/>
                                <span className="radioDot"></span>
                            </label>
                            <label className="radio-container">Payroll File
                                <input type="radio" id="test3" name="radio-group"/>
                                <span className="radioDot"></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}