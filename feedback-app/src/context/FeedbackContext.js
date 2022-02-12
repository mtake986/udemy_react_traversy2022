import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is a feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is a feedback item 2',
      rating: 5,
    },
    {
      id: 3,
      text: 'This is a feedback item 3',
      rating: 7,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  // Function: addFeedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Function: deleteFeedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback items
  const updateFeedback = (id, updItem) => {
    // console.log(id, updItem)
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item))
  }

  // Set item edited
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }
  return <FeedbackContext.Provider
    value={{
      feedback,
      feedbackEdit,
      addFeedback,
      deleteFeedback,
      editFeedback,
      updateFeedback, 
    }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext