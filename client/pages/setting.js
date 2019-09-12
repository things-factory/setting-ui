import { html } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'

import { store, PageView } from '@things-factory/shell'
import { i18next, localize } from '@things-factory/i18n-base'

class SettingPage extends connect(store)(localize(i18next)(PageView)) {
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
      ${_sortedSettings.map(
        setting => html`
          ${setting.template}
        `
      )}
    `
  }

  stateChanged(state) {
    this._settings = state.setting.settings
  }

  get context() {
    return {
      title: i18next.t('title.setting')
    }
  }
}

window.customElements.define('setting-page', SettingPage)
