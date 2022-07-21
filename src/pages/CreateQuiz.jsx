import {useState, useEffect} from 'react'
import axios from 'axios'

function CreateQuiz() {
  
  const [newQuiz, setNewQuiz] = useState({
    title: "",
    total_marks: "",
    time: "",
    questions: [{
      choices: [],
      title: "",
      answer: ""
  }],
  })

  useEffect(() => {

  }, [newQuiz])

  const postQuiz = (event) => {
    event.preventDefault()
    axios.post("http://127.0.0.1:8000/create", newQuiz,{
      headers: {
        "Content-Type": "application/json",
      }
    }).then(() => console.log("done"))
    .catch((err) => console.log(err))

    console.log(newQuiz)
  }
  // console.log(newQuiz)
  // console.log(questions)

  return (
    <div className='py-5'>
      <form onSubmit={postQuiz} className='flex flex-col mx-5'>
        <h1 className="font-bold text-lg text-gray-500">Quiz Create </h1>
        <main>
          <div className='my-4 flex gap-5 items-center'>
            <label htmlFor="">Title: </label>
            <input type="text" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400 flex-grow' placeholder='title'
            onChange={event => setNewQuiz({ ...newQuiz, title: event.target.value})}
             />
          </div>
          <div className='flex gap-5'>
            <div className='my-4 flex gap-5 items-center'>
              <label htmlFor="">Time:</label>
              <input type="text" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400' placeholder='minutes'
              onChange={event => setNewQuiz({ ...newQuiz, time: +(event.target.value) * 60})}
              required
              />
            </div>
            <div className='my-4 flex gap-5 items-center'>
              <label htmlFor="">Marks:</label>
              <input type="number" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400' placeholder='marks'
              onChange={event => setNewQuiz({ ...newQuiz, total_marks: event.target.value})}
              required
               />
            </div>
          </div>
          <div className='my-4 flex flex-col'>
            {newQuiz.questions.map((question, index) => (
              <div className='outline-dashed outline-1 outline-gray-300 p-5 mb-5'>
              <div className='flex gap-5 items-center mb-2'>
                <label htmlFor="">Question {index + 1}:</label>
                <input type="text" name="question" id="" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400 flex-grow' placeholder='question' onChange={(event) => newQuiz.questions[index].title = event.target.value} required />
              </div>
              <div className='flex flex-col gap-5'>
                <label htmlFor="">Choices</label>
                <div className='flex gap-2 items-center'>
                  <label htmlFor="">A</label>
                  <input type="text" name="choice 1" id="" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400 flex-grow' placeholder='Option 1' onChange={(event) => newQuiz.questions[index].choices[0] = event.target.value} required />
                </div>
                <div className='flex gap-2 items-center'>
                  <label htmlFor="">B</label>
                  <input type="text" name="choice 1" id="" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400 flex-grow' placeholder='Option 2' onChange={(event) => newQuiz.questions[index].choices[1] = event.target.value} required />
                </div>
                <div className='flex gap-2 items-center'>
                  <label htmlFor="">C</label>
                  <input type="text" name="choice 1" id="" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400 flex-grow' placeholder='Option 3' onChange={(event) => newQuiz.questions[index].choices[2] = event.target.value} required />
                </div>
                <div className='flex gap-2 items-center'>
                  <label htmlFor="">D</label>
                  <input type="text" name="choice 1" id="" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400 flex-grow' placeholder='Option 4' onChange={(event) => newQuiz.questions[index].choices[3] = event.target.value} required />
                </div>
              </div>
              <div className='flex gap-5 items-center mt-5'>
                <label htmlFor="">Answer:</label>
                <input type="text" name="answer" id="" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400 flex-grow' placeholder='Please select answer' onChange={(event) => newQuiz.questions[index].answer = event.target.value} />
                {/* <select name="" id="" className='outline outline-1 outline-gray-400 rounded p-2 placeholder:text-gray-400 flex-grow bg-transparent text-gray-500'>
                  <option value="">Option 1</option>
                  <option value={newQuiz.questions[index].choices[1]}>Option 2</option>
                  <option value={newQuiz.questions[index].choices[2]}>Option 3</option>
                  <option value={newQuiz.questions[index].choices[3]}>Option 4</option>
                </select> */}
              </div>
              </div>
            ))}
            <button
            onClick={() => setNewQuiz({
              ...newQuiz,
              questions: [...newQuiz.questions, {
                "choices": [],
                "question": "",
                "order": 1,
                "answer": ""
            }]
          })}
            >+ Add Question</button>
            
          </div>
        </main>
        <div><button className='bg-[#20232A] py-2 px-3 rounded text-white'>Submit</button></div>
      </form>
    </div>
  )
}

export default CreateQuiz