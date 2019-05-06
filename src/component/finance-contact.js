import React,{Component} from 'react';

const FinanceContact=(props)=>{
    return(
        props.contact.map(()=>{
            return(
                <div className="finance-contact-info" >
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <div className="date-and-finance">
                        <input type="date" className="date-child"/>
                        <label className="radio-container">
                            <input type="radio" className="radio-child"/>
                            <span className="radioDot"></span>
                        </label>
                    </div>
                </div>
            )
        })
    )
}
export default FinanceContact;