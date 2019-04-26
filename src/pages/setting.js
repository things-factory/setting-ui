import { html } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'
// import { i18next } from '@things-factory/shell/base/i18next'

class SettingUiMain extends connect(store)(PageView) {
  static get properties() {
    return {
      settingUi: String
    }
  }
  render() {
    return html`
      <section>
        XXXXXX
      </section>
    `
  }

  stateChanged(state) {
    this.settingUi = state.settingUi.state_main
  }
}

window.customElements.define('setting-main', SettingUiMain)
