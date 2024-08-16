import {useState} from 'react'
import {Navigate} from "react-router-dom"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

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
        <ReactQuill 
            value={content} 
            onChange={newValue => setContent(newValue)}
            modules={modules} 
            formats={formats} />
        <button style={{marginBlockStart:'5px'}}>Create post</button>
    </form>
  )
}

export default CreatePost