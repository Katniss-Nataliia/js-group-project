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
      <p class="info-item info-date">
        <span>${events.dates.start.localDate} </span>
      </p>
      <p class="info-item info-desc">
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
  <div class="small__img">
        <img
          class="modal__img__small"
          src="${event.images[5].url}" 
            alt="${event.name}"
          width="150"
        />
      </div>

      <div class="event__details">
        <div class="large__img">
          <img
          class="modal__img__large"
          src="${event.images[5].url}" 
            alt="${event.name}"
          width="427"
        />
        </div>

        <div class="info__detail">
          <div class="info__item">
            <h3 class="info__item__title" >INFO</h3>
            <p>${event.info}</p>
          </div>
          <div class="info__item">
            <h3 class="info__item__title" >WHEN</h3>
            <span>${event.dates.start.localDate} (${event._embedded.venues[0].city.name} / ${event._embedded.venues[0].state.name}) </span>
          </div>
          <div class="info__item">
            <h3 class="info__item__title" >WHERE</h3>
            <span>${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.name}</br>>${event._embedded.venues[0].country.name}  </span>
          </div>
        
          </div>

        <div class="info__item">
          <h3 class="info__item__title who__info" >WHO</h3>
          <span>${event._embedded.attractions[0].name} </span>
      </div>
      
      <div class="price__info">
        <h3 class="info__item__title" >PRICES</h3>
        
        <div class="price__detail">

        <div class="price__standart">
          <div class="price__text">
          <span class="price__icon">
          ${price__icon} </span>  <span class="info__item__text">Standart ${price} </span> 
          </div>
          <a href=${event.url} target="_blank">
            <button class="ticket__btn">BUY TİCKETS</button>
           </a>
          
        </div>

        <div class="price__vip">
          <div class="price__text">
          <span class="price__icon">
          ${price__icon} </span>
          <span class="info__item__text">Vip  ${price}</span> 
          </div>
          <a href=${event.url} target="_blank">
          
            <button class="ticket__btn">BUY TİCKETS</button>
            
           </a>
        </div>
      </div>
    </div>    
      </div>

    <div class="more__info">
      <a href=${event.url}  target="_blank">
      <button class="more__info__btn" >MORE FROM THİS AUTHOR</button>
     </a>
        
      </div>

  `;
   

  refs.contentEvent.insertAdjacentHTML('beforeend', eventInfo);
}


const price__icon = `<svg width="29" height="19" viewBox="0 0 29 19"
            xmlns="http://www.w3.org/2000/svg"><path d="M4.91 1.27h-4.91v29.46h4.91v-29.46z"></path>
            <path d="M17.26 1.27h-4.91v29.46h4.91v-29.46z"></path>
            <path d="M24.699 1.27h-4.91v29.46h4.91v-29.46z"></path>
            <path d="M44.19 1.27h-7.291v29.46h7.291v-29.46z"></path>
            <path d="M9.82 1.27h-2.381v29.46h2.381v-29.46z"></path>
            <path d="M29.46 1.27h-2.381v29.46h2.381v-29.46z"></path>
            <path d="M34.37 1.27h-2.381v29.46h2.381v-29.46z"></path></svg>`;