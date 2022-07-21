import React from 'react'

function Login() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-100'>
      <div className='px-5 py-7 bg-white rounded'>
        <h1 className='font-bold text-lg text-center mb-5'>Login</h1>
        <form action="">
          <div className='flex gap-3 mb-5'>
            <label htmlFor="">username:</label>
            <input type="text" name="" id="" className='outline outline-1 outline-gray-300 py-1 px-2 text-md rounded' placeholder='example@domain.com' />
          </div>
          <div className='flex gap-3 mb-5'>
            <label htmlFor="">password:</label>
            <input type="text" name="" id="" className='outline outline-1 outline-gray-300 py-1 px-2 text-md rounded' placeholder='*********' />
          </div>
          <div className='flex justify-end'>
            <input type="submit" value="Login" className='py-1 px-2 bg-gray-800 text-white rounded' />
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login