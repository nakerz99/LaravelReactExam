import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {addLogRequest, getDateTimeLogs} from './store/actions/TimeLogAction';


 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timestamp: 0,
      button: "start",
      status: false
    };
    this.AddLog = this.AddLog.bind(this)

  };
  

  componentWillMount() {
    var today = new Date();
    var timestamp = "";
    let self = this;
    setInterval(function () {
      timestamp = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      self.setState({ timestamp })
      if (self.state.status) {
        today.setSeconds(today.getSeconds() + 1);
        console.log(self.state.status)
      }
    }, 1000);

    this.props.getDateTimeLogs().then(
      (resp) => {
       console.log(resp)
      });
  }


  // incrementDate(data) {
  //   var today = new Date();
  //   var timestamp = "";
  //   let self = this;
  //   if (data) {
  //     setInterval(function () {
  //       timestamp = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  //       console.log(timestamp)
  //       self.setState({ timestamp })
  //       today.setSeconds(today.getSeconds() + 1);
  //     }, 1000);s
  //   }
  // }

  AddLog() {
    if (this.state.button === "stop") {
    this.setState({ button: "start", status: false })
    } else {
    this.setState({ button: "stop", status: true })
    }

    this.props.addLogRequest(this.state)
    this.props.getDateTimeLogs()

    
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.timestamp}</div>
        <button onClick={this.AddLog}>
          {this.state.button}
        </button>
      </div>
    );
  }
}




const mapDisPatchToProps = (dispatch) =>{
  return {
    addLogRequest:(creds) =>dispatch(addLogRequest(creds)),
    getDateTimeLogs:(creds) =>dispatch(getDateTimeLogs(creds)),
  }
}



// SignupForm.propTypes = {
//   userSignupRequest: React.PropTypes.func.isRequired,
// }


export default connect(null,mapDisPatchToProps)(App)


