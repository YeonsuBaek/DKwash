document.querySelector('.detail').addEventListener('click', function () {
  document.querySelector('.chemical-nav').classList.add('is-detail')
  document.querySelectorAll('.chemical-list')[1].classList.add('is-active')
  document.querySelectorAll('.chemical-list')[0].classList.remove('is-active')
})

document.querySelector('.equip').addEventListener('click', function () {
  document.querySelector('.chemical-nav').classList.remove('is-detail')
  document.querySelectorAll('.chemical-list')[0].classList.add('is-active')
  document.querySelectorAll('.chemical-list')[1].classList.remove('is-active')
})

document.querySelector('.close-button').addEventListener('click', function () {
  document
    .querySelector('.product-modal.is-active')
    .classList.remove('is-active')
  document.querySelector('.overlay').classList.remove('is-active')
})

function chemicalModal(i) {
  const selectItem = document.querySelectorAll('.chemical-item')[i]
  const selectedItem = document.querySelectorAll('.product-modal-item')[i]

  selectItem.addEventListener('click', function () {
    document.querySelector('.product-modal').classList.add('is-active')
    selectedItem.classList.add('is-active')
    document.querySelector('.overlay').classList.add('is-active')
  })

  document
    .querySelectorAll('.close-button')
    [i].addEventListener('click', function () {
      document.querySelector('.product-modal').classList.remove('is-active')
      selectedItem.classList.remove('is-active')
      document.querySelector('.overlay').classList.remove('is-active')
    })
}

chemicalModal(0)
chemicalModal(1)
chemicalModal(2)
chemicalModal(3)
