const fade = {
  enter (el) {
    el.querySelector('.modal-content').classList.add('down-enter')
  },
  afterEnter (el) {
    el.querySelector('.modal-content').classList.remove('down-enter')
  },
  leave (el) {
    el.querySelector('.modal-content').classList.add('down-leave')
  },
  afterLeave (el) {
    el.querySelector('.modal-content').classList.remove('down-leave')
  }
}

export { fade }
