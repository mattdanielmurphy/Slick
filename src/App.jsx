import React, {Component} from 'react'
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'
// import WebSocket from 'ws'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: {name: 'Anonymo 0'},
      messages: []
    }
  }

  render() {
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand'>Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar
          sendMessage={this.sendMessage}
          username={this.state.currentUser.name}
          setUsername={this.setUsername}
        />
      </div>
    )
  }

  componentDidMount() {
    // Connect to websocket server
    this.socket = new WebSocket('ws://localhost:3001')
    // Get messages upon connecting to server
    this.socket.onopen = e => {
      this.getMessagesFromServer()
    }
  }

  sendMessage = (username, content) => {
    const message = { username, content }
    // Send stringified message object to server
    this.socket.send(JSON.stringify(message))
    getMessagesFromServer()
  }

  setUsername = name => {
    if (name) {
      const currentUser = { name }
      this.setState({ currentUser })
    }
  }

  getMessagesFromServer() {
    this.socket.onmessage = e => {
      // Parse strinified message object from server
      const msg = JSON.parse(e.data)
      // Append message object to messages array
      const messages = this.state.messages.concat(msg)
      this.setState({messages})
    }
  }

  componentWillUnmount() {
    this.socket.close()
  }
}
export default App
