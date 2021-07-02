function playSound(character) {
  if (character === 'A') {
    sound = new Audio('./sound/clap.wav')
    sound.play()
  } else if (character === 'S') {
    sound = new Audio('./sound/hihat.wav')
    sound.play()
  } else if (character === 'D') {
    sound = new Audio('./sound/kick.wav')
    sound.play()
  } else if (character === 'F') {
    sound = new Audio('./sound/openHat.wav')
    sound.play()
  } else if (character === 'G') {
    sound = new Audio('./sound/boom.wav')
    sound.play()
  } else if (character === 'H') {
    sound = new Audio('./sound/ride.wav')
    sound.play()
  } else if (character === 'J') {
    sound = new Audio('./sound/snare.wav')
    sound.play()
  } else if (character === 'K') {
    sound = new Audio('./sound/tom.wav')
    sound.play()
  } else if (character === 'L') {
    sound = new Audio('./sound/link.wav')
    sound.play()
  }
}
