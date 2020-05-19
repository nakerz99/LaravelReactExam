import axios from 'axios';

const url = "http://localhost:8000/api/v1";

export function addLogRequest(logData) {
  return dispatch => {
    return axios.post(url + '/logs', logData);
  }
}

export function getDateTimeLogs() {
  return dispatch => {
    return axios.get(url + '/logs', null);
  }
}

export function deletetDateTimeLog(logId) {
  return dispatch => {
    return axios.delete(url + '/logs/' + logId, null);
  }
}
