import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './source/components/App'

import config from './config'
import axios from 'axios'


const serverRender = () => (
  axios.get(`${config.serverURL}/api/clubs`)
    .then(resp => {
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={resp.data.clubs} />
        ),
        initialData: resp.data.clubs
      }
    })
)

export default serverRender
