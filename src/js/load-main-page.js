import EventApi from './event-api.js';
import { createEventCard } from './create-markup.js';
import refs from './referans.js';
import { paginationEvent } from './pagination.js';

const eventApi = new EventApi();

async function getData() {
  const data = await eventApi.getAllEvent();

  let maxPage;

  maxPage = data.page.totalPages;

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

getData();
