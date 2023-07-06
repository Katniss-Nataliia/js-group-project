import refs from './referans.js';

export function createPaginationBtn(maxPage, activePage) {
  refs.paginationDiv.innerHTML = '';

  if (activePage < 4) {
    const eventInfo = `
  <ul class="pagination__buttons">
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>1</button></li>
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>2</button></li> 
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>3</button></li> 
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>4</button></li> 
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>5</button></li> 
  <li><span >...</button></li> 
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>${maxPage}</button></li> 
  </ul>
    `;
    refs.paginationDiv.insertAdjacentHTML('beforeend', eventInfo);
  }

  if (activePage >= 4) {
    const eventInfo = `
  <ul class="pagination__buttons">
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>1</button></li>
  <li><span >...</button></li> 
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>${activePage}</button></li> 
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>${
    activePage + 1
  }</button></li> 
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>${
    activePage + 2
  }</button></li> 
  <li><span >...</button></li> 
  <li><button class="btn__pagination" href="#" type="button" btn-pagination>${maxPage}</button></li>
  </ul>
    `;
    refs.paginationDiv.insertAdjacentHTML('beforeend', eventInfo);
  }
}
