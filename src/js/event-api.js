import { API_KEY, BASE_URL } from './api.js';
import axios from 'axios';

export default class EventApi {
  constructor() {
    this.page = 1;
    this.per_page = 10;
    this.id="";
    this.keyword = "";
    this.max_img_per_request = 16;
  }
 
  async getAllEvent() {
    try {
      const response = await axios.get(
        `${BASE_URL}/events.json?&keyword=${this.keyword}&countryCode=US&apikey=${API_KEY}&size=${this.per_page}&page=${this.page}&per_page=${this.max_img_per_request}`
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
