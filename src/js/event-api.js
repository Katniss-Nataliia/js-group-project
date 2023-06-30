import { API_KEY, BASE_URL } from './api.js';
import axios from 'axios';

export default class EventApi {
  constructor() {
    this.page = 1;
    this.per_page = 16;
  }

  async getResponse() {
    try {
      const response = await axios.get(
        `${BASE_URL}/events.json?countryCode=US&apikey=${API_KEY}&size=${this.per_page}&page=${this.page}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
