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

function recycle(k) {
  document
    .querySelectorAll('.info-page .info-item')
    [k].classList.add('is-active')
}

function recycleRemove(k) {
  document
    .querySelectorAll('.info-page .info-item')
    [k].classList.remove('is-active')
}

let k = 0

function myLoop() {
  setTimeout(function () {
    for (l = 0; l < 5; l++) {
      recycleRemove(l)

      if (l == k) {
        recycle(l)
      }
    }
    k++
    if (k < 5) {
      myLoop()
    }

    if (k == 5) {
      k = 0

      myLoop()
    }
  }, 3000)
}

myLoop()

function zigzag(x) {
  document.querySelectorAll('.products-item')[x].classList.add('is-active')
}

function zigzagRemove(x) {
  document.querySelectorAll('.products-item')[x].classList.remove('is-active')
}

let x = 0

function thisLoop() {
  setTimeout(function () {
    for (y = 0; y < 2; y++) {
      zigzagRemove(y)

      if (y == x) {
        zigzag(y)
      }
    }
    x++
    if (x < 2) {
      thisLoop()
    }

    if (x == 2) {
      x = 0

      thisLoop()
    }
  }, 3000)
}

thisLoop()
