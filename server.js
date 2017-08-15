import config from './config'
import apiRouter from './api'
import express from 'express'
import serverRender from './serverRender'

const server = express()

server.set('view engine', 'ejs')
server.get('/', (req, res) => {
  serverRender()
    .then(({initialMarkup, initialData})=>{
      res.render('index', {
        initialMarkup,
        initialData
      })
    })
    .catch(console.error)
})

server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, config.host, ()=> {
  console.info(`Express is running at ${config.port}`)
})
