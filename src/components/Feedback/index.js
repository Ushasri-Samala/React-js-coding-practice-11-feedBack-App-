// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {response: false}

  onClickingEmoji = () => {
    this.setState({response: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {response} = this.state

    return (
      <div className="app-container">
        {!response && (
          <div className="card-container">
            <h1 className="header">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(eachEmoji => (
                <li className="emoji-con" key={eachEmoji.id}>
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                    onClick={this.onClickingEmoji}
                  />
                  <p className="emoji-type"> {eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {response && (
          <div className="response-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="love-emoji-type">Thank You</h1>
            <p className="feedback">
              {' '}
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
