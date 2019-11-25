import { LitElement, html } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store, navigate } from '@things-factory/shell'
import '@things-factory/i18n-base'
import '@things-factory/setting-base'

export class DomainSwitchLet extends connect(store)(LitElement) {
  static get properties() {
    return {
      domains: Array,
      contextPath: String,
      subdomain: String
    }
  }

  render() {
    return html`
      <setting-let>
        <i18n-msg slot="title" msgid="title.switch domain"></i18n-msg>

        <select slot="content" @change=${e => navigate('/domain/' + e.target.value)}>
          ${this.domains.map(
            option => html`
              <option value=${option.subdomain} ?selected=${this.subdomain == option.subdomain}>${option.name}</option>
            `
          )}
        </select>
      </setting-let>
    `
  }

  stateChanged(state) {
    this.contextPath = state.app.contextPath
    this.domains = state.app.domains
    this.subdomain = this.contextPath.split('/')[2]
  }
}

customElements.define('domain-switch-let', DomainSwitchLet)
