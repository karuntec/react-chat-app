// Write your code
import {Component} from 'react'
import {v4} from 'uuid'

import ChatBox from '../ChatBox'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const user = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

class ChatApp extends Component {
  state = {
    textInput: '',
    textList: [],
  }

  onAddText = event => {
    event.preventDefault()
    const {textInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const name = user[Math.ceil(Math.random() * user.length - 1)]
    const newText = {
      id: v4(),
      text: textInput,
      userName: name,
      date: new Date(),
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      textList: [...prevState.textList, newText],
      textInput: '',
    }))
  }

  onChangeTextInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  renderTextList = () => {
    const {textList} = this.state

    return textList.map(eachText => (
      <ChatBox key={eachText.id} textDetails={eachText} />
    ))
  }

  render() {
    const {textInput} = this.state

    return (
      <div className="app-container">
        <div className="name-container">
          <div className="user-container">
            <div className="initial-container">
              <p className="initial">RR</p>
            </div>
            <div className="user-name">
              <h1 className="user">Rolande Raimondi</h1>
              <p className="designation">Research Nurse</p>
            </div>
          </div>

          <h1 className="heading">Conversations</h1>
        </div>
        <div className="chat-container">
          <div className="chat-header">
            <div>
              <h1 className="heading">Introductions</h1>
              <p className="paragraph">
                This Channel id for company wide chatter
              </p>
            </div>
          </div>
          <ul className="text-list">{this.renderTextList()}</ul>
          <div className="input-box">
            <div className="form-container">
              <form className="form" onSubmit={this.onAddText}>
                <input
                  type="text"
                  value={textInput}
                  className="name-input"
                  placeholder="Your Name"
                  onChange={this.onChangeTextInput}
                />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatApp
