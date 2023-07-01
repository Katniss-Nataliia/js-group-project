import { API_KEY, BASE_URL } from './api.js';
import axios from 'axios';

export default class EventApi {
  constructor() {
    this.page = 1;
    this.per_page = 16;
    this.id="";
    this.keyword = "";
  }
 
  async getAllEvent() {
    try {
      const response = await axios.get(
        `${BASE_URL}/events.json?&keyword=${this.keyword}&countryCode=US&apikey=${API_KEY}&size=${this.per_page}&page=${this.page}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getEventInfo(id){
    try {
      this.id =id;
      const response = await axios.get(
        `${BASE_URL}/events.json?countryCode=US&apikey=${API_KEY}&id=${this.id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
