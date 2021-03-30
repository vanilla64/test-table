import { DATA_FETCH } from './constants';

class Api {
  constructor(url) {
    this._url = url
  }

  _initialRequest = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getMinData = () => {
    return fetch(this._url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
      }
    })
      .then(res => this._initialRequest(res))
  }

  getMaxData = () => {
    return fetch(this._url, {method: 'GET'})
      .then(res => this._initialRequest(res))
  }

  getData = () => {
    return fetch(this._url, {method: 'GET'})
      .then(res => this._initialRequest(res))
  }
}

const api = new Api(DATA_FETCH)

export default api;
