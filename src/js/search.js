import refs from './referans.js';
import EventApi from './event-api.js';
import { createEventCard } from './create-markup.js';
import { paginationEvent } from './pagination.js';

const eventApi = new EventApi();

refs.searchInput.addEventListener('keyup', e => {
  const value = e.target.value.trim();
  activePage = 0;
  getFilteredData(value, activePage);
});

export async function getFilteredData(search, activePage) {
  eventApi.keyword = search;

  if (activePage > 0) {
    eventApi.page = activePage - 1;
  } else {
    eventApi.page = activePage;
  }

  
  const data = await eventApi.getAllEvent();
  console.log(data);

  let maxPage = data.page.totalPages;

  if (data._embedded === undefined) {
    maxPage = 0;
  }
  if (data.page.totalPages > 200) {
    maxPage = 199;
  }

  paginationEvent(maxPage, eventApi.page, eventApi.keyword);

  refs.gallery.innerHTML = '';
  data._embedded.events.map(createEventCard);
}

