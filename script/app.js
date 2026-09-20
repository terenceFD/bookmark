const bookMark = document.querySelectorAll('.Bookmark'),
     changeEl = document.querySelectorAll('.change');

changeEl.forEach((chg, idx) => {
     chg.addEventListener('click', () => {
          removeAct()
          removeHide()
          changeEl[idx].classList.add('act')
          bookMark[idx].classList.remove('hidden')
     })
})

function removeAct() {
     changeEl.forEach(chg => {
          chg.classList.remove('act')
     })
}
function removeHide() {
     bookMark.forEach(hide => {
          hide.classList.add('hidden')
     })
}