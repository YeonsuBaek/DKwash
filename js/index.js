window.onload = function () {
  document
    .querySelector('.gyeonggi.up-to-9')
    .addEventListener('click', function () {
      document.querySelector('.branch-modal').classList.add('is-active')
      document.querySelector('.overlay').classList.add('is-active')
    })

  document
    .querySelector('.branch-modal .ic-close')
    .addEventListener('click', function () {
      document.querySelector('.branch-modal').classList.remove('is-active')
      document.querySelector('.overlay').classList.remove('is-active')
    })

  function productsItem(i) {
    let selectItem = document.querySelectorAll('.products-item')[i]

    selectItem.addEventListener('mouseenter', function () {
      document.querySelectorAll('.products-item')[i].classList.add('is-active')
    })

    selectItem.addEventListener('mouseleave', function () {
      document
        .querySelectorAll('.products-item')
        [i].classList.remove('is-active')
    })
  }

  productsItem(0)
  productsItem(1)

  function scrollTop(i) {
    let clickButton = document
      .querySelectorAll('.top-button')
      [i].addEventListener('click', function () {
        document.querySelector('.home').scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      })
  }

  scrollTop(0)
  scrollTop(1)
  scrollTop(2)
  scrollTop(3)
}
