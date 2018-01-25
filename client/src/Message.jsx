import React, {Component} from 'react'

class Message extends Component {

	render() {
		return (
			<div>
				<div className='message'>
					<span className='usernameChange'>
						{this.usernameChange()}
					</span>
				</div>
				<div className='message'>
					<span className='message-username'>{this.props.username}</span>
					<span className='message-content'>{this.props.content}</span>
				</div>
			</div>
		)
	}

	// display notification if user changed their name
	usernameChange() {
		if (this.props.oldUsername) {
			return `${this.props.oldUsername} has changed their name to ${this.props.username}`
		}
	}
}
export default Message
