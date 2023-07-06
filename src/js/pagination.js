import { createPaginationBtn } from './create-pagination-btn.js';
import { getFilteredData } from './search.js';
import refs from './referans.js';


export function paginationEvent(maxPage, activePage, search) {
  if (maxPage < 2) {
    return (refs.paginationDiv.innerHTML = '');
  }

  createPaginationBtn(maxPage, activePage);

  if (!refs.paginationDiv.innerHTML == '') {
    const btnPagination = document.querySelectorAll('.btn__pagination');

    if (activePage == 0) {
      btnPagination[0].classList.add('is-active');
    } else {
      addIsActive(activePage);
    }

    btnPagination.forEach(btn =>
      btn.addEventListener('click', function (e) {
        e.preventDefault();

        if (!e.target.hasAttribute('btn-pagination')) {
          return;
        }

        const btnValue = Number(e.target.textContent);

        getFilteredData(search, btnValue);
      })
    );
  }
};


function addIsActive(activePage) {
  const btnPagination = document.querySelectorAll('.btn__pagination');

  if (activePage < 4) {
    btnPagination[activePage].classList.add('is-active');
  }

  if (activePage >= 4) {
    btnPagination[2].classList.add('is-active');
  }
};


function removeIsActive() {
  const btnPagination = document.querySelectorAll('.btn__pagination');
  btnPagination.forEach(btn => btn.classList.remove('is-active'));
  console.log('removeddddd');
}
