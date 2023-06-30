import { openEvent } from './open-event.js';
import refs from './referans.js';

export function createEventCard(events) {
  events.images.sort((a, b) => b.width - a.width);

  const eventInfo = `
    <div class="event-card" data-id="${events.id}">
      <img class="gallery__image" src="${events.images[0].url}" alt="${events.name}" width="450" loading="lazy" />
      <div class="info">
      <p class="info-item">
        <span>${events.name} </span>
      </p>
      <p class="info-item">
        <span>${events.dates.start.localDate} </span>
      </p>
      <p class="info-item">
      <span>${events._embedded.venues[0].name},  ${events._embedded.venues[0].city.name}, ${events._embedded.venues[0].state.stateCode}</span>
    </p>
    </div>
  </div>  
    `;

  refs.gallery.insertAdjacentHTML('beforeend', eventInfo);

  const cards = document.querySelectorAll('.event-card');
  cards.forEach(card => card.addEventListener('click', openEvent));
}






export function createEventInfo(event) {
  refs.contentEvent.innerHTML = '';

  event.images.sort((a, b) => b.width - a.width);

  if (event.info == null) {
    event.info = 'no information';
  }

  let price;

  if (event.priceRanges == null) {
    price = 'no information';
  } else {
    price = `${event.priceRanges[0].min} - ${event.priceRanges[0].max} ${event.priceRanges[0].currency}`;
  }

  const eventInfo = `
    <div class="smallimg">
    <img
  class="modal__img-s"
  src="${event.images[5].url}" 
  alt="${event.name}"
  width="150"
  </div>
  <div class="event-info">
    <img
  class="modal__img-l"
  src="${event.images[0].url}" 
  alt="${event.name}"
  width="427"
/>
<div class="info">
  <div class="info-item">
    <h4>INFO</h4>
    
    <p>${event.info}</p>
  </div>
  <div class="info-item">
    <h4>WHEN</h4>
    <span>${event.dates.start.localDate} (${event._embedded.venues[0].city.name} / ${event._embedded.venues[0].state.name}) </span>
  </div>
  <div class="info-item">
    <h4>WHERE</h4>
    <span>${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.name} </span></br>
    <span>${event._embedded.venues[0].country.name} </span>
  </div>
</div>
  </div>
  
  <div class="who">
    <h4>WHO</h4>
    <span>${event._embedded.attractions[0].name} </span>
  </div>

  <div class="prices">
    <div class="price">
      <h4>price</h4>
    </div>
    <div class="standart">
      
      <span>|||||</span> STANDART ${price}
      </p>
      <a href=${event.url} target="_blank">
      <button class="modal__buy-btn">BUY TICKETS</button>
     </a>

    </div>
    <div class="vip">
    <span>|||||</span> VIP ${price}</p>
    <a href=${event.url} target="_blank">
    <button class="modal__buy-btn">BUY TICKETS</button>
   </a>
    </div>
  </div>

  <div class="moreinfo">
  <a href=${event.url} target="_blank">
  <button>More From This AUTHOR</button>
 </a>
    
  </div>
    `;

  refs.contentEvent.insertAdjacentHTML('beforeend', eventInfo);
}
