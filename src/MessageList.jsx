import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
	render() {
		const messages = this.props.messages;
		const messagesContent = messages.map((m) =>
			<Message key={m.id} username={m.username} content={m.content}/>
		);

		return (
			<main className='messages'>
				<div className='message system'>
					{messagesContent}
				</div>
			</main>
		);
	}
}
export default MessageList;