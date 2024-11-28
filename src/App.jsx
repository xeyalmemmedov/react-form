import react, { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [isSuccess, setSucces] = useState(false)
  const handleSubmit = (e) => {

    e.preventDefault()
    setSucces(true)
    console.log(name, lastname, phone, email, comment)
  }

  return (
    <>
      {isSuccess &&
        <div id='message-container'>
          <p id='message'>Göndərildi!</p>
        </div>
      }


      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ad</label>
        <input type="text" name='name' onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="lastname">Soyad</label>
        <input type="text" name='lastname' onChange={(e)=>setLastname(e.target.value)} />
        <label htmlFor="phone">Telefon</label>
        <input type="text" name='phone' onChange={(e)=>setPhone(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="comment">Şərh</label>
        <textarea name="comment" onChange={(e)=>setComment(e.target.value)}></textarea>
        <button type='submit'>Göndər</button>
      </form>

    </>
  )
}

export default App
