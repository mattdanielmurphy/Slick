const express       = require('express')
const SocketServer  = require('ws')
const uuid          = require('uuid/v4')

const PORT = 3001;

// Create express server
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => {
    console.log('Listening on', PORT)
  }
)

// Assign express server as websocket server
const wss = new SocketServer.Server({ server })

wss.on('connection', function connection(ws, req) {
  console.log('client connected')

  let connectedUsers = []

  // Send messages to all clients
  wss.clients.forEach((client) => {
    if (client.readyState === SocketServer.OPEN) {
      connectedUsers.push(client)
    }
  })

  wss.clients.forEach((client) => {
    if (client.readyState === SocketServer.OPEN) {
      client.send(connectedUsers.length)
    }
  })

  // Assign UUID to message before broadcasting
  ws.on('message', (msg) => {
    msg = JSON.parse(msg)
    console.log(msg)
    msg.id = uuid()
    msg = JSON.stringify(msg)
    wss.clients.forEach(function each(client) {
      client.send(msg);
    });
  })

  ws.on('close', () => {
    console.log('client disconnected')
    connectedUsers = []
    wss.clients.forEach((client) => {
      if (client.readyState === SocketServer.OPEN) {
        connectedUsers.push(client)
      }
    })
    wss.clients.forEach((client) => {
      if (client.readyState === SocketServer.OPEN) {
        client.send(connectedUsers.length)
      }
    })
  })
})
