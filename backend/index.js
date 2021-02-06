const express = require('express')
const graphqlHttp = require('express-graphql')
const path = require('path')
const schema = require('./graphql/schema')

const args = process.argv.slice(2)
const env = process.env.NODE_ENV
const port = parseInt(args[0], 10) || 1234
const app = express()

const staticFiles = express.static(path.join(__dirname, '../dist'))
app.use(staticFiles)

app.use(
  '/graphql',
  graphqlHttp({
    schema,
    graphiql: true
  })
)

app.listen(port, () => {
  console.log(`Started server in ${env} mode on http://localhost:${port}!`)
})

process.on('uncaughtException', err => {
  console.warn(`Uncaught Exception: ${err.message}`)
})

process.on('unhandledRejection', (err, promise) => {
  console.warn('Unhandled rejection at ', promise, `, Error: ${err}`)
})
