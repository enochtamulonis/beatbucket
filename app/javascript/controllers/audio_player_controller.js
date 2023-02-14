import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="audio-player"
export default class extends Controller {
  static values = { src: String }
  static targets = ["play", "pause"]
  
  connect() {
    if (window.audioPlayer) {
      this.audioPlayer = window.audioPlayer
    } else {
      this.audioPlayer = new Audio()
      window.audioPlayer = this.audioPlayer
    }
  }
  
  togglePlaying(e) {
    e.preventDefault()

    if (!this.audioPlayer.paused) {
      // IS PLAYING
      this.audioPlayer.pause()
      this.playTarget.classList.remove("hidden")
      this.pauseTarget.classList.add("hidden")
    } else {
      // IS PAUSED
      this.audioPlayer.src = this.srcValue
      this.audioPlayer.play()
      this.playTarget.classList.add("hidden")
      this.pauseTarget.classList.remove("hidden")
    }
  }
}
