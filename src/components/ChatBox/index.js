// Write your code here
// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const ChatBox = props => {
  const {textDetails} = props
  const {text, initialClassName, userName, date} = textDetails
  const initial = userName ? userName[0].toUpperCase() : ''

  const postedTime = formatDistanceToNow(date)

  return (
    <li className="text-item">
      <div className="text-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{userName}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="text">{text}</p>
        </div>
      </div>

      <hr className="comment-line" />
    </li>
  )
}

export default ChatBox
