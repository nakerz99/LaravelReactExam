import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { deletetDateTimeLog, addLogRequest, getDateTimeLogs } from './store/actions/TimeLogAction';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timestamp: 0,
      button: "start",
      status: false,
      data: ""
    };
    this.AddLog = this.AddLog.bind(this)
    this.deleteLogs = this.deleteLogs.bind(this)

  };

  componentDidMount() {
    this.countData()

    console.log('test')
    this.props.getDateTimeLogs().then(
      (resp) => {
        let data = resp.data
        this.setState({ data })
      });
  }

  countData() {
    let self = this;
    var today = new Date();
    let firstLog = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    self.setState({ timestamp: firstLog })
    var timestamp = ""
    setInterval(function () {
      if (self.state.status) {
        console.log(self.state.status)
        timestamp = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        self.setState({ timestamp })
        today.setSeconds(today.getSeconds() + 1);
      }
    }, 1000);
  }

  deleteLogs = (rowId) => {
    const arrayCopy = this.state.data.filter((row) => row.id !== rowId);
    this.setState({ data: arrayCopy });
    console.log(arrayCopy)
    this.props.deletetDateTimeLog(rowId);


  };

  AddLog() {
    if (this.state.button === "stop") {
      this.setState({ button: "start", status: false })
    } else {
      this.setState({ button: "stop", status: true })
    }
    let data = {
      timestamp: this.state.timestamp,
      log_type: this.state.button
    }
    this.props.addLogRequest(data)
      .then((resp) => {
        let data = resp.data
        console.log(data.data)
        console.log(this.state.data)

        let tempState = [...this.state.data];
        tempState.push(data.data)
        this.setState({
          data: tempState
        })

      });


  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4 d-flex justify-content-center">{this.state.timestamp}</h1>
          <div className="form-group">
            <button className="btn btn-primary btn-block" onClick={this.AddLog}>
              {this.state.button}
            </button>
          </div>
        </div>
        <div>
          <h1 id='title'>Date Time Logs</h1>
          <center>
            <table id='students' className="table">
              <thead>
                <tr>
                  <th>Time Log</th>
                  <th>Log Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data ? this.state.data.map((log, key) => {
                  return (
                    <tr key={log.id}>
                      <td>{log.dateTimeLog}</td>
                      <td>{log.log_type}</td>
                      <td><button onClick={() => this.deleteLogs(log.id)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                  );
                }) : null
                }
              </tbody>
            </table>
          </center>
        </div>
      </div>
    );
  }
}




const mapDisPatchToProps = (dispatch) => {
  return {
    addLogRequest: (creds) => dispatch(addLogRequest(creds)),
    getDateTimeLogs: (creds) => dispatch(getDateTimeLogs(creds)),
    deletetDateTimeLog: (creds) => dispatch(deletetDateTimeLog(creds)),

  }
}

export default connect(null, mapDisPatchToProps)(App)


