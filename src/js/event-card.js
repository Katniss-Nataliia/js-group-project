import EventApi from './event-api.js';
import {createEventInfo} from './create-markup.js';

const eventApi = new EventApi();

export async function eventCardInfo(e) {
    let id = e.target.parentElement.dataset.id;
    if (e.target.nodeName === "SPAN") {
     id = e.target.parentElement.parentElement.parentElement.dataset.id;
    }

   console.log(id)
   const data = await eventApi.getEventInfo(id);
  
   console.log(data._embedded.events)
   data._embedded.events.map(createEventInfo);
}

