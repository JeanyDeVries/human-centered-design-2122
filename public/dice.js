var $die = document.querySelector('.die'),
    sides = 20,
    initialSide = 1,
    lastFace,
    timeoutId,
    transitionDuration = 500, 
    animationDuration  = 3000

function randomFace() {
  var face = Math.floor((Math.random() * sides)) + initialSide
  lastFace = face == lastFace ? randomFace() : face
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId)
  
//   document.querySelector('[href=' + face + ']').classList.add('active')
  
  $die.setAttribute('data-face', face)
}

function reset() {
  $die.setAttribute('data-face', null)
  $die.classList.remove('rolling')
}

document.querySelector('.die').addEventListener("click", function () {
    console.log("click")
  $die.classList.add('rolling')
  clearTimeout(timeoutId)
  
  timeoutId = setTimeout(function () {
    $die.classList.remove('rolling')
    
    rollTo(randomFace())
  }, animationDuration)
  
  return false
})
