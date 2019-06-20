import { html } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

// import { i18next } from '@things-factory/shell/base/i18next'

class SettingUiMain extends connect(store)(PageView) {
  static get properties() {
    return {
      _settings: Array
    }
  }

  render() {
    var _sortedSettings = this._settings.sort((a, b) => {
      return a.seq - b.seq
    })

    return html`
      <div>
        ${_sortedSettings.map(
          setting => html`
            ${setting.template}
          `
        )}
      </div>
    `
  }

  stateChanged(state) {
    this._settings = state.setting.settings
  }

  get context() {
    return {
      title: 'Setting'
    }
  }
}

window.customElements.define('setting-main', SettingUiMain)
