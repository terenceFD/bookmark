const queryAll = function (queryAll) {
     return document.querySelectorAll(queryAll)
}

const bookMark = queryAll('.Bookmark'),
     changeEl = queryAll('.change'),
     closeBtn = queryAll('.close'),
     runEl = queryAll('.run'),
     icon = queryAll('.icon');

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

closeBtn.forEach((close, idx) => {
     close.addEventListener("click", () => {
          closeRun()
          icon[idx].classList.remove('iconstyle')
          runEl[idx].classList.remove('hidden')
          icon[idx].classList.replace('fa-angle-up', 'fa-angle-down')
     })
})

function closeRun() {
     runEl.forEach((run, idx) => {
          run.classList.add('hidden')
          icon[idx].classList.replace('fa-angle-down', 'fa-angle-up')
     })
}

