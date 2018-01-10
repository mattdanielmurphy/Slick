import React, {Component} from 'react';

class ChatBar extends Component {
	render() {
		console.log(this.props);

		return (
			<footer className='chatbar'>
				<input className='chatbar-username' value={this.props.username} />
				<input className='chatbar-message' placeholder='Your message' />
			</footer>
		);
	}
}
export default ChatBar;