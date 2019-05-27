import axios from 'axios';
import moment from '../handlers/moment';
import adapter from 'axios/lib/adapters/http';

let _instance;

export default class AgendaEdu {
  constructor() {
    this.baseURL = 'https://frontend-test.agendaedu.com/api';
  }

  static instance() {
    if (_instance == null) {
      _instance = new AgendaEdu();
    }

    return _instance;
  }

  init(token) {
    this._token = token;
  }

  headers() {
    return { 'Content-Type': 'application/json', token: this._token };
  }

  async get(path, params) {
    return await axios.get(this.baseURL + path, {
      params: params,
      headers: this.headers()
    });
  }

  async post(path, params) {
    return await axios.post(this.baseURL + path, params, { adapter });
  }

  static async events(params) {
    if (params == undefined || params.limit == undefined) {
      throw new Error('you must to send needed parameters');
    }
    const result = await AgendaEdu.instance().get('/events', params);

    return result.data;
  }

  static async authenticate(email, password) {
    return await AgendaEdu.instance().post('/login', {
      email: email,
      password: password
    });
  }

  static combine(events, groups) {
    events.map(event => {
      let found = false;
      let eventDay = moment.unix(Date.parse(event.startAt));

      groups.map(group => {
        if (eventDay.isSame(group.day, 'day')) {
          group.events.push(event);
          found = true;
          return;
        }
      });
      if (!found) {
        groups.push({
          day: eventDay,
          events: [event]
        });
      }
    });
    return groups;
  }

  static initialize(token) {
    AgendaEdu.instance()._token = token;
  }
}
