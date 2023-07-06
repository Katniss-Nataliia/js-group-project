import EventApi from './event-api.js';
import { createEventInfo } from './create-markup.js';

const eventApi = new EventApi();

export async function eventCardInfo(e) {
  let id = e.target.parentElement.parentElement.dataset.id;
  if (e.target.nodeName === 'SPAN') {
    id = e.target.parentElement.parentElement.parentElement.dataset.id;
  }

  const data = await eventApi.getEventInfo(id);
  data._embedded.events.map(createEventInfo);
}
