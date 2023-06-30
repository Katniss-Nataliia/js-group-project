import EventApi from './event-api.js';
import {createEventCard} from './create-markup.js';
import refs from './referans.js';


const eventApi = new EventApi();

async function getData() {
    const data = await eventApi.getAllEvent();
    console.log(data)
    refs.gallery.innerHTML = '';
    data._embedded.events.map(createEventCard);
}

getData();





