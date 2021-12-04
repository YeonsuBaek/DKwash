function branchCaseItem(i) {
  document
    .querySelectorAll('.category-item')
    [i].addEventListener('click', function () {
      for (j = 0; j < 7; j++) {
        document
          .querySelectorAll('.category-item')
          [j].classList.remove('is-active')
        document
          .querySelectorAll('.branch-case-list')
          [j].classList.remove('is-active')

        if (i == j) {
          continue
        }
      }

      document.querySelectorAll('.category-item')[i].classList.add('is-active')
      document
        .querySelectorAll('.branch-case-list')
        [i].classList.add('is-active')
    })
}

branchCaseItem(0)
branchCaseItem(1)
branchCaseItem(2)
branchCaseItem(3)
branchCaseItem(4)
branchCaseItem(5)
branchCaseItem(6)
