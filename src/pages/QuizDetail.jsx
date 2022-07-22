import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { MdQuestionAnswer } from 'react-icons/md'
import { Timer } from "../components"

function QuizDetail() {
  const { id } = useParams()
  const [ quiz, setQuiz ] = useState(null)
  const [ qn, setQn] = useState(1)
  const [selected, setSelected] = useState(null)

  const [answers, setAnswer] = useState({1: "selected"})

  // const [questions, setQuestions] = useState([])

  useEffect(() => {
    setAnswer({
      ...answers, [`${qn}`]: selected
    })

    axios.get(`http://127.0.0.1:8000/${id}`)
      .then((data) => setQuiz(data.data))
  }, [selected])

  console.log(quiz)

  return (
    <div className='flex flex-col justify-between w-screen overflow-x-hidden'>
      {quiz && quiz.questions.length > 0 ?
      <div className="flex flex-col md:flex-row justify-between w-screen overflow-x-hidden">
        <div className='md:w-[40%] py-3 p-2 md:py-10 md:pl-5 md:pr-2'>
          <h4>Question {qn} of {quiz && quiz.questions.length}</h4>
          <p>{quiz && quiz.questions.length > 0 && quiz.questions[qn-1].question}</p>
        </div>
        <div className='md:w-[60%] p-5 md:p-10'>
          <div className='flex justify-between mb:mx-3 mb-5 items-center'>
            <h6 className="text-sm">Select one answer</h6>
            <Timer duration={quiz.time} />
            <button className='bg-[#20232A] py-1 md:py-2 px-5 rounded text-white'
              onClick={() => {
                if(quiz && quiz.questions.length === qn){
                  if(selected === quiz.questions[qn-1].answer){
                    alert(answers)
                  } else {
                    alert(answers)
                  }
        
                } else {
                  setQn(prev => prev + 1)
                }
                setSelected(null)
              }}
            >{quiz && quiz.questions.length === qn ? "Submit" : "Next"}</button>
          </div>
          {quiz && quiz.questions[qn-1].choices.map((option, index) => (
            <div className={`outline outline-1 rounded p-3 hover:outline-blue-500 hover:outline-2 cursor-pointer group mb-5  ${selected === option && "outline-blue-500 outline-2"}`}
            onClick={() => setSelected(option)}
            >
              {option}
              <br />
              <div className='flex justify-end'>
                <span className='group-hover:text-blue-500 font-black text-gray-300 text-2xl'>{["a", "b", "c", "d"][index].toUpperCase()}</span>
              </div>
            </div>
          ))
          }
        
        </div>
      </div>
      :
      <div>Something Went wrong</div>
      }

        

      <span className="fixed right-5 bottom-5 bg-[#20232A] text-white py-2 px-2 rounded-lg flex gap-2 items-center">
        <MdQuestionAnswer size={25} />
        Help
      </span>

      <span className="md:fixed mb-5 p-2 md:p-0 md:mb-0 left-5 bottom-5 flex flex-col gap-2">
        <p>Something wrong with the question</p>
        <div>
          <button className="outline outline-1 m-1 rounded py-1 px-2">Reload Question</button>
          <button className="outline outline-1 m-1 rounded py-1 px-2">Report a problem</button>
        </div>
      </span>

    </div>
  )
}

export default QuizDetail