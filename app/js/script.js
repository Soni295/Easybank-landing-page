const btnHamburger = document.getElementById('btnHamburger')
const header = document.getElementsByClassName('header')[0]
const overlay = document.getElementsByClassName('overlay')[0]

btnHamburger.addEventListener('click', () => {

  if(header.classList.contains('open')) {
    header.classList.remove('open')

    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
  }
  else {
    header.classList.add('open')

    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
  }
})
