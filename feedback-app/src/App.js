import {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData)
  const [feedback, setFeedback] = useState(FeedbackData);
  const [text, setText] = useState('an example text')
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}
export default App;
