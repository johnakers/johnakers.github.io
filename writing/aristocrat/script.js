var PAGE_NUM  = parseInt(window.location.hash.substr(1))
var ENTRIES   = document.querySelectorAll('.entry')
var BUTTONS   = [document.querySelector('.left'), document.querySelector('.right')]
var LAST_PAGE = ENTRIES.length - 1

function listen() {
  for (var i = 0; i < BUTTONS.length; i++) {
    var b = BUTTONS[i]
    b.addEventListener('click', function() {
      if (this.className == 'right') {
        return change(1)
      } else if (this.className == 'left') {
        return change(-1)
      }
    })
  }
}

function change(direction) {
  PAGE_NUM += direction
  if (PAGE_NUM < 0) {
    PAGE_NUM = 0
  } else if (PAGE_NUM > LAST_PAGE) {
    PAGE_NUM = LAST_PAGE
  }

  render()
}

function clearAll() {
  for (var i = 0; i < ENTRIES.length; i++) {
    ENTRIES[i].style.display = 'none'
  }
}

function render() {
  clearAll()
  ENTRIES[PAGE_NUM].style.display = 'block'
}

// MAIN ---------------------------
function main() {
  listen()

  if (isNaN(PAGE_NUM)) {
    PAGE_NUM = 0
  }

  render()
}

main()
