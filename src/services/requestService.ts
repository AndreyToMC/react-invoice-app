import axios from 'axios'
import Axios from 'axios-observable';
import { errorAction } from '../actions/newError';

import { push } from 'react-router-redux';
import { apiURL } from '../services/apiURL';

export default function sendRequest(method: string, url: string, data?: any) {
  return axios({method, url: apiURL + url, data}).then((res) => res.data).catch((error) => {
    errorAction(error.message)
    return Promise.reject()
  })
}
