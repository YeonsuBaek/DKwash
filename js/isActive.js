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
}
