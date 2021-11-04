document
  .querySelector('.gnb-sub.lg-only')
  .addEventListener('mouseenter', function () {
    document.querySelector('.gnb-sub.lg-only').classList.add('is-active')
  })

document
  .querySelector('.gnb-nav.lg-only')
  .addEventListener('mouseleave', function () {
    document.querySelector('.gnb-sub.lg-only').classList.remove('is-active')
  })

document
  .querySelector('.gnb-sub.lg-only')
  .addEventListener('mouseleave', function () {
    document.querySelector('.gnb-sub.lg-only').classList.remove('is-active')
  })

function gnb(i) {
  document
    .querySelectorAll('.gnb-nav-item')
    [i].addEventListener('mouseenter', function () {
      document.querySelector('.gnb-sub.lg-only').classList.add('is-active')

      for (j = 0; j < 5; j++) {
        document.querySelectorAll('.gnb-sub-list')[j].style.visibility =
          'hidden'

        if (j == i) {
          document.querySelectorAll('.gnb-sub-list')[i].style.visibility =
            'visible'
        }
      }
    })
}

gnb(0)
gnb(1)
gnb(2)
gnb(3)
gnb(4)
