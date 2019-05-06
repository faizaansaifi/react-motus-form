import React,{Component} from 'react';
import FinanceContact from './finance-contact'
export default class Section3 extends Component{
    state={
        finance:[{contact:1}],
        contactindex:1
    }

    addFinanceContact=()=>{
        let {finance,contactindex}=this.state;
        if(contactindex<3) {
            this.setState({
                finance: [...finance, {contact: this.state.contactindex++}]
            })
        }
    }
    render() {
        let {finance, contactindex}=this.state;
        return(
            <div className="form3-container">
                <div className="car-default-bar">
                    <div className="step1">
                        <img src={"assets/right-tick.png"}/>
                    </div>
                    <span className="step1-heading">Add Company Info</span>
                    <div className="step2">
                        <img src={"assets/right-tick.png"}/>
                    </div>
                    <span className="step2-heading">Assign Products</span>
                    <span className="step3-heading">Setup Admins</span>
                </div>
                <div className="car-progress-bar">
                    <div className="step3">
                        <img src={"assets/Car.png"}/>
                    </div>
                </div>
               <div className="detail-container">
                    <div className="form3-heading">
                        <div className="child">First Name</div>
                        <div className="child">Last Name</div>
                        <div className="child">Email</div>
                        <div className="child specialChild">
                            <div className="sub-child1">Start Date</div>
                            <div className="sub-child2">Finance Contact</div>
                        </div>
                    </div>
                   <div className="contact-component-section">
                       <FinanceContact contact={finance} id={contactindex}/>
                   </div>
                   <div className="add-more-section">
                       <button onClick={this.addFinanceContact}>+</button>
                   </div>
               </div>
            </div>
        )
    }
}