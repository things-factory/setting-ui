import { html } from 'lit-element'
import { store } from '@things-factory/shell'
import { APPEND_APP_TOOL, TOOL_POSITION } from '@things-factory/layout-base'

import '@material/mwc-icon/mwc-icon'

export default function bootstrap() {
  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      template: html`
        <a href="setting" style="color:inherit;">
          <mwc-icon style="vertical-align:middle;">
            settings
          </mwc-icon>
        </a>
      `,
      position: TOOL_POSITION.FRONT_END
    }
  })
}
