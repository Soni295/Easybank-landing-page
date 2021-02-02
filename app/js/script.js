const btnHamburger = document.getElementById('btnHamburger')
const header = document.getElementsByClassName('header')[0]
const overlay = document.getElementsByClassName('overlay')[0]
const fadeElements = [...document.getElementsByClassName('has-fade')]
const body = document.getElementsByTagName('body')[0]



btnHamburger.addEventListener('click', () => {

  if(header.classList.contains('open')) {
    header.classList.remove('open')
    body.classList.remove('noscroll')
    fadeElements.forEach( element => {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
  }
  else {
    header.classList.add('open')
    body.classList.add('noscroll')
    fadeElements.forEach( element => {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  }
})
