import { QUESTIONS } from "../helpers/quiz"
import { useState, useEffect } from 'react'
import { MdQuestionAnswer } from 'react-icons/md'

function Quiz() {
  const [ qn, setQn] = useState(1)
  const [selected, setSelected] = useState(null)

  const [answers, setAnswer] = useState({1: "selected"})

  useEffect(() => {
    setAnswer({
      ...answers, [`${qn}`]: selected
    })
  }, [selected])

  console.log(answers)
  return (
    <div className='flex justify-between w-screen overflow-x-hidden'>
      <div className='w-[40%] py-10 pl-5 pr-2'>
        <h4>Question {qn} of {QUESTIONS.length}</h4>
        <p>{QUESTIONS[qn-1].question}</p>
      </div>

      <div className='w-[60%] p-10'>
        <div className='flex justify-between mx-3 mb-5 items-center'>
          <h6>Select one answer</h6>
          <button className='bg-[#20232A] py-2 px-5 rounded text-white'
            onClick={() => {
              QUESTIONS.length === qn ? alert(`successfully submitted ${selected} `) : setQn(prev => prev + 1)
            }}
          >{QUESTIONS.length === qn ? "Submit" : "Next Question"}</button>
        </div>

        { QUESTIONS[qn - 1].options.map((option, index) => 
          <div className={`outline outline-1 rounded p-3 hover:outline-blue-500 hover:outline-2 cursor-pointer group mb-5  ${selected === option.option && "outline-blue-500 outline-2"}`}
          onClick={() => setSelected(option.option)}
          >
            {option.answer}
            <br />
            <div className='flex justify-end'>
              <span className='group-hover:text-blue-500 font-black text-gray-300 text-2xl'>{option.option.toUpperCase()}</span>
            </div>
          </div>
        )}

        

      </div>

      <span className="fixed right-5 bottom-5 bg-[#20232A] text-white py-2 px-2 rounded-lg flex gap-2 items-center">
        <MdQuestionAnswer size={25} />
        Help
      </span>

      <span className="fixed left-5 bottom-5 flex flex-col gap-2">
        <p>Something wrong with the question</p>
        <div>
          <button className="outline outline-1 m-1 rounded py-1 px-2">Reload Question</button>
          <button className="outline outline-1 m-1 rounded py-1 px-2">Report a problem</button>
        </div>
      </span>

    </div>
  )
}

export default Quiz