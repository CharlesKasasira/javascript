import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

function QuizHome() {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then((data) => setQuizzes(data.data))
  }, [])

  return (
    <div>
      <div className='mt-5'> 
        <Link to="/create-quiz" className='outline outline-1 py-2 px-2 m-2 mt-10 mb-5 rounded'>
          Create Quiz
        </Link>
      </div>
      <div className='flex flex-wrap justify-center mt-5'>
        {quizzes.length > 0 &&
        quizzes.map((quiz, index) => (
          <Link to={`/quiz/${quiz.id}`} className='m-2 border-t-8 border-gray-700 p-5 rounded-sm flex flex-col items-center shadow-lg cursor-pointer'
          >
            <h1 className='font-bold text-lg'>{quiz.title}</h1>
            <p className='text-gray-400'>Duration: {Math.floor(quiz.time/60)} minutes</p>
            <button className='text-teal-300'>Start test</button>
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default QuizHome