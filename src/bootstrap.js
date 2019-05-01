import { html } from 'lit-element'
import { store } from '@things-factory/shell'
import { APPEND_APP_TOOL, TOOL_POSITION } from '@things-factory/layout-base'
import { ADD_SETTING } from '@things-factory/setting-base'
import settingUi from './reducers/main'

import '@material/mwc-icon/mwc-icon'

export default function bootstrap() {
  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      template: html`
        <a href="">
          <mwc-icon
            @click=${() => {
              location.href = 'setting'
            }}
          >
            settings
          </mwc-icon>
        </a>
      `,
      position: TOOL_POSITION.FRONT_END
    }
  })

  store.dispatch({
    type: ADD_SETTING,
    setting: {
      template: 'come and add more setting'
    }
  })

  store.addReducers({
    settingUi
  })
}
