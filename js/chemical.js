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
