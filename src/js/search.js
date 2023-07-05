import refs from './referans.js';
import EventApi from './event-api.js';
import { createEventCard } from './create-markup.js';

const eventApi = new EventApi();

refs.searchInput.addEventListener('keyup', e => {
    const value = e.target.value.trim();
    getFilteredData(value);
  });

async function getFilteredData(value) {
  eventApi.keyword = value;
  const data = await eventApi.getAllEvent();
  console.log(data)
  refs.gallery.innerHTML = '';
  data._embedded.events.map(createEventCard);
}


refs.moreBttn.addEventListener('click',  getAllEvent)