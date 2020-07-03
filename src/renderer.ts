import { array } from "./util"

export type RenderCallback = () => void

export interface RenderDelegate {
  applicationAllowsImmediateRendering(newBody: HTMLBodyElement, render:() => void): boolean
  viewRendered(newBody: HTMLBodyElement): void
  viewInvalidated(): void
}

export abstract class Renderer {
  abstract delegate: RenderDelegate
  abstract newBody: HTMLBodyElement

  renderView(callback: RenderCallback) {
    new Promise((resolve:() => void) => {
      if (this.delegate.applicationAllowsImmediateRendering(this.newBody, resolve)) {
        resolve()
      }
    }).then(() => {
      callback()
      this.delegate.viewRendered(this.newBody)
    })
  }

  invalidateView() {
    this.delegate.viewInvalidated()
  }

  createScriptElement(element: Element) {
    if (element.getAttribute("data-turbolinks-eval") == "false") {
      return element
    } else {
      const createdScriptElement = document.createElement("script")
      createdScriptElement.textContent = element.textContent
      createdScriptElement.async = false
      copyElementAttributes(createdScriptElement, element)
      return createdScriptElement
    }
  }
}

function copyElementAttributes(destinationElement: Element, sourceElement: Element) {
  for (const { name, value } of array(sourceElement.attributes)) {
    destinationElement.setAttribute(name, value)
  }
}
