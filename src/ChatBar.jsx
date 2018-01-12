import React, {Component} from 'react'

class ChatBar extends Component {

	constructor(props) {
		super(props)

		this.state = {
			message: '',
			username: ''
		}
	}

	render() {
		return (
			<footer className='chatbar'>
				<input
					className='chatbar-username'
					placeholder={this.props.username}
					value={this.state.username}
					onChange={this.handleChange('username')}
					onKeyPress={this.handleKeys('username')}
				/>
				<input
					className='chatbar-message'
					placeholder='Your message'
					value={this.state.message}
					onChange={this.handleChange('message')}
					onKeyPress={this.handleKeys('message')}
				/>
			</footer>
		)
	}

	// SEND MESSAGE / SET USERNAME

	sendMessage = (usr, msg) => {
		// Check for empty message
		if (msg) {
			// Save value
			const message = msg

			// Clear input field
			this.setState({ message: '' })

			// Revert pink username change indicator
			document.querySelector('.chatbar-username')
				.style.color = 'white'
			this.props.sendMessage(usr, message)
		}
	}

	setUsername = e => {
		if (this.state.username) {
			// Set new username to pink to indicate change
			e.target.style.color = 'pink'
			this.props.setUsername(this.state.username)
		} else {
			this.props.setUsername('Anonymo 0')
		}
	}

	setUsernameOnBlur = e => {
		// Add blur event listener
		e.target.addEventListener('blur', e => {
			this.setUsername(e)
			// Don't focus on input
		}, false)
	}


	// EVENT HANDLERS

	handleChange = key => e => {
		this.setState({ [key]: e.target.value })
	}

	handleKeys = type => e => {
		// Send message on enter
		if (type === 'message' && e.key === 'Enter') {
			this.sendMessage(
				this.props.username,
				this.state.message
			)
		// Set username on enter or blur
		} else if (type === 'username') {
			if (e.key === 'Enter') {
				this.setUsername(e)
			} else {
				// Add event listener (onBlur does not work)
				this.setUsernameOnBlur(e)
			}
		}
	}
}
export default ChatBar