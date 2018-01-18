import React, {Component} from 'react'
import Message from './Message.jsx'

class MessageList extends Component {
	render() {
		let messages = this.props.messages
		messages = messages.map((msg) =>
			<Message
				key={msg.id}
				username={msg.username}
				content={msg.content}
				oldUsername={msg.oldUsername}
			/>
		)

		return (
			<main className='messages'>
				<div className='message system'> {messages} </div>
			</main>
		)
	}
}
export default MessageList