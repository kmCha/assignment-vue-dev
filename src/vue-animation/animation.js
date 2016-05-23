
const modalFade = {
  enter (el) {
    this.beginTransit()
    el.querySelector('.modal-content').classList.add('down-enter')
  },
  afterEnter (el) {
    this.transitEnd()
    el.querySelector('.modal-content').classList.remove('down-enter')
  },
  leave (el) {
    this.beginTransit()
    el.querySelector('.modal-content').classList.add('down-leave')
  },
  afterLeave (el) {
    this.transitEnd()
    el.querySelector('.modal-content').classList.remove('down-leave')
  }
}

export { modalFade }
