const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js')

const app = express()

app.use(express.static(__dirname + '/../client/dist'))

app.use('/graphql', expressGraphQL({
  schema: schema, 
  graphiql: true
}))

app.listen(4000, ()=>{
  console.log('Server is running on 4000')
})
