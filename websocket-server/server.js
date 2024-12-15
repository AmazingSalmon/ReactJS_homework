const express = require('express')
const expressWs = require('express-ws')

const app = express()
expressWs(app)

const connections = new Set()

const wsHandler = (ws) => {
  connections.add(ws)

  ws.on('message', (message) => {
    connections.forEach((conn) => conn.send(message))
  })

  ws.on('close', () => {
    connections.delete(ws)
  })
}
app.ws('/', (ws, req)=>{
    wsHandler(ws);
    req.on('error', (err) => console.error(err));
});
app.use(express.static('build'))
app.listen(3001)