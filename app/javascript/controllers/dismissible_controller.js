import { Controller } from "@hotwired/stimulus"
import { fadeOut  } from "../utils/helpers"
// Connects to data-controller="dismissible"
export default class extends Controller {
  connect() {
    setTimeout(() => {
      fadeOut(this.element)
    }, 500)
  }
}
