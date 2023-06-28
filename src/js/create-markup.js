const gallery = document.querySelector(".gallery");



const eventCard = (events) => {

    console.log(events);
    console.log(events.id);

    const eventImg = `
    <div class="photo-card" data-id="${events.id}">
      <img class="gallery__image" src="${events.images[9].url}" alt="${events.name}" loading="lazy" />
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
  
    gallery.insertAdjacentHTML('beforeend', eventImg);
  };
  
  export default eventCard;