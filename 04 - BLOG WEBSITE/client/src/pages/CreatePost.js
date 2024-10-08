import {useState} from 'react'
import {Navigate} from "react-router-dom"

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

    async function createNewPost() {
        const data = new FormData()

        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])

        ev.preventDefault()
        const response = await fetch('https://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include'
        })

        if(response.ok) {
            setRedirect(true)
        }
    }

    if(redirect) {
        <Navigate to={'/'} />
    }
    
  return (
    <form onSubmit={createNewPost}>
        <input type="title" 
            placeholder={'title'} 
            value={title}
            onChange={ev => setTitle(ev.target.value)} 
        />

        <input type="summary" 
            placeholder={'summary'}
            value={summary}
            onChange={ev => setSummary(ev.target.value)}
         />

        <input 
            type="file" 
            onChange={ev => setFiles(ev.target.value)} 
        />
       <Editor onChange={setContent} value={content} />
        <button style={{marginBlockStart:'5px'}}>Create post</button>
    </form>
  )
}

export default CreatePost