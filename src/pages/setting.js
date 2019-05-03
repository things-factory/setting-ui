import { html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

// import { i18next } from '@things-factory/shell/base/i18next'

class SettingUiMain extends connect(store)(PageView) {
  static get properties() {
    return {
      _email: String
    }
  }

  static get styles() {
    return [
      css`
        div {
          text-align: center;
          background-color: #e5e5e5;
          height: 50px;
          padding: 20px 0px 20px 0px;
        }

        p {
          margin: 0;
        }
      `
    ]
  }

  render() {
    return html`
      <div>
        <p><b>Admin</b></p>
        <p>${this._email}</p>
      </div>
    `
  }

  stateChanged(state) {
    this._email = state.auth.user.email
  }

  get context() {
    return {
      title: 'Setting',
      printable: this
    }
  }
}

window.customElements.define('setting-main', SettingUiMain)
