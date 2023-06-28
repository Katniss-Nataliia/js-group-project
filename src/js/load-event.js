import EventApi from './event-api.js';
import eventCard from './create-markup.js';

const gallery = document.querySelector(".gallery");

const eventApi = new EventApi();

async function getData() {

    const data = await eventApi.getResponse();
    console.log(data)
    // console.log(data._embedded.events)
    data._embedded.events.map(eventCard);

    

}

getData();




function selectEventCard(e) {
    e.preventDefault();

    let id = e.target.parentElement.dataset.id;
    if (e.target.nodeName === "SPAN") {
     id = e.target.parentElement.parentElement.parentElement.dataset.id;
    }

   console.log(id)
}

gallery.addEventListener("click", selectEventCard);
