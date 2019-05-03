import { html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

// import { i18next } from '@things-factory/shell/base/i18next'

class SettingUiMain extends connect(store)(PageView) {
  static get properties() {
    return {
      _email: String,
      _settings: Array
    }
  }

  static get styles() {
    return [
      css`
        #settingHeader {
          background-color: #e5e5e5;
          height: 50px;
          padding: 20px 0px 20px 0px;
          text-align: center;
        }

        p {
          margin: 0;
        }

        #languageSetting {
          padding: 30px;
        }

        span {
          color: #c0504d;
          text-align: left;
          font-size: 1em;
        }
      `
    ]
  }

  render() {
    return html`
      <div id="settingHeader">
        <p><b>Admin</b></p>
        <p>${this._email}</p>
      </div>

      <div id="languageSetting">
        <span>Change Language</span>
        <div>
          ${this._settings.map(
            setting => html`
              ${setting.template}
            `
          )}
        </div>
      </div>
    `
  }

  stateChanged(state) {
    this._email = state.auth.user && state.auth.user.email
    this._settings = state.setting.settings
  }

  get context() {
    return {
      title: 'Setting',
      printable: this
    }
  }
}

window.customElements.define('setting-main', SettingUiMain)
