import React, {Component} from 'react'
import Message from './Message.jsx'

class MessageList extends Component {
	render() {
		return (
			<main className='messages'>
				<div className='message system' id='messages'> {this.messages()} </div>
			</main>
		)
	}

	messages() {
		const messages = this.props.messages
		return messages.map((msg) =>
			<Message
				key={msg.id}
				username={msg.username}
				content={msg.content}
				oldUsername={msg.oldUsername}
			/>)
	}
}
export default MessageList