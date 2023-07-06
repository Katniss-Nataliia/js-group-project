import { eventCardInfo } from './event-card.js';
import refs from './referans.js';

refs.closeModalBtn.addEventListener('click', closeToggleModal);

export function closeToggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

window.addEventListener('keydown', closeModalEsc);
function closeModalEsc(ev) {
  if (ev.code === 'Escape') {
    refs.modal.classList.toggle('is-hidden');
  }
}

export function openEvent(e) {
  e.preventDefault();
  refs.modal.classList.toggle('is-hidden');
  eventCardInfo(e);
}
