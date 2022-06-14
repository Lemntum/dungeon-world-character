import CharacterFormObservable from '../../../state/character-form-observable'
import '../../vertical-selection/vertical-selection'
import { supportedClasses } from '../../../data/supported-classes'

export class CharacterAlignment extends HTMLElement {
  _characterClass
  constructor() {
    super()
  }

  onAlignmentChange = (event) => {
    CharacterFormObservable.alignment = event.detail.value
  }

  hydrate = async (state) => {
    const isPreviousClassDifferent =
      this._characterClass !== state.characterClass
    if (isPreviousClassDifferent) {
      this.beforeUnmount()
      this._characterClass = state.characterClass
      await this.render()
      this.onMount()
    }
    this.querySelector('#alignment')?.setAttribute('value', state.alignment)
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate)
    this.querySelector('#alignment')?.addEventListener(
      'dw-change',
      this.onAlignmentChange
    )
  }

  beforeUnmount() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.querySelector('#alignment')?.removeEventListener(
      'dw-change',
      this.onAlignmentChange
    )
  }

  connectedCallback() {
    this.render().then(() => this.onMount())
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  async render() {
    switch (this._characterClass) {
      case supportedClasses.Fighter:
        const fighterTemplate = await import('./fighter-alignment.html')
        this.innerHTML = fighterTemplate.default
        break
      case supportedClasses.Ranger:
        const rangerTemplate = await import('./ranger-alignment.html')
        this.innerHTML = rangerTemplate.default
        break
      default:
        break
    }
  }
}

customElements.define('dw-character-alignment', CharacterAlignment)
