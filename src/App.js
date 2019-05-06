import React,{Component} from 'react';
import './App.css';
import Section1 from "./component/form1.js"
import Section2 from "./component/form2";
import Section3 from "./component/form3";

class App extends Component {
  state={
    form:1
  }
  onNext=()=>{
    if(this.state.form<3){
      this.setState({
        form:++this.state.form
      })
    }
  }
  onBack=()=>{
    if(this.state.form>1){
      this.setState({
        form:--this.state.form
      })
    }
  }
  render() {
    return (
        <div className="App">
          <header className="wrapper">
            <div className={'child1'}>
              <div className={"logo"}>
              </div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
            <div className={"child2"}>
              <ul>
                <li>
                  <img src={"assets/Search%20-%20Main%20Nav.png"}/>
                </li>
                <li>
                  <img src={"assets/Search%20-%20Main%20Nav.png"}/>
                </li>
              </ul>
            </div>
          </header>

          <div className={"heading"}>
            <h4>New Customer</h4>
          </div>
          <div className="form-fillup-section">
            {(this.state.form===1)?<Section1/>:null}
            {(this.state.form===2)?<Section2/>:null}
            {(this.state.form===3)?<Section3/>:null}
          </div>
          <div className="buttons-at-bottom">
            {(this.state.form===1)?
                <button className="left" onClick={this.onBack}>Cancel</button>:
                <button className="left" onClick={this.onBack}>Back</button>
            }

            <button type="submit" className="right" onClick={this.onNext}>Next-></button>
          </div>
          <div className="footer">
            Copyright Alpha Beta Gamma
          </div>
        </div>
    );
  }
}

export default App;
