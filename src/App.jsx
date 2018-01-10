import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 0,
          username: 'Bob',
          content: 'Has anyone seen my marbles?'
        },
        {
          id: 1,
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
    }
  }
  componentDidMount() {
    setTimeout(() => {
      // Add new msg to list in data store
      const newMessage = {
        id:2,
        username: 'Michelle',
        content: '\'Ello mates!'
      };
      const messages = this.state.messages.concat(newMessage);
      this.setState({ messages: messages });
    }, 3000);
  }

  render() {
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand'>Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar username={this.state.currentUser.name}/>
      </div>
    );
  }
}
export default App;
