const main = document.querySelector('main')
const scroll = document.querySelector('.scroll')
const topButton = document.querySelector('.top-button.is-hidden')
const viewPage = document.querySelector('.info-page')
const darkPage = document.querySelector('.branch-page')
const hiddenPage = document.querySelector('.youtube-page')

function toggleContents() {
  if (viewPage.getBoundingClientRect().top + 1 < window.innerHeight) {
    topButton.classList.remove('is-hidden')
  } else {
    topButton.classList.add('is-hidden')
  }

  if (
    hiddenPage.getBoundingClientRect().top + 1 <
    (window.innerWidth >= 768 ? 80 : 56)
  ) {
    scroll.classList.add('is-hidden')
  } else {
    scroll.classList.remove('is-hidden')
  }
}

main.addEventListener('scroll', toggleContents, 300)
