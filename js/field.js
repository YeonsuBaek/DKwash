function fieldItem(i) {
  let selectItem = document.querySelectorAll('.category-item')[i]

  selectItem.addEventListener('click', function () {
    for (j = 0; j <= 4; j++) {
      document
        .querySelectorAll('.category-item')
        [j].classList.remove('is-active')
      document
        .querySelectorAll('.field-explain')
        [j].classList.remove('is-active')

      if (i == j) {
        continue
      }
    }

    selectItem.classList.add('is-active')
    document.querySelectorAll('.field-explain')[i].classList.add('is-active')
  })
}

fieldItem(0)
fieldItem(1)
fieldItem(2)
fieldItem(3)
fieldItem(4)

// 이걸 해내네...나자신 대견해...
