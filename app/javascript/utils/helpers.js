export function fadeOut(element, interval = 50) {
  const fadeEffect = setInterval(function () {
      if (!element.style.opacity) {
          element.style.opacity = 1;
      }
      if (element.style.opacity > 0) {
          element.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, interval);
}

export function getMetaValue(name) {
    const element = findElement(document.head, `meta[name="${name}"]`);
    if (element) {
      return element.getAttribute("content");
    }
  }
  
  export function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  
  export function removeElement(el) {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
  
  export function insertAfter(el, referenceNode) {
    return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }