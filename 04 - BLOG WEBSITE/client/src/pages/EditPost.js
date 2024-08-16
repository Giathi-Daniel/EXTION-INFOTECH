import {useState} from "react"
import {Navigate, useParams} from "react-router-dom"
import Editor from "../component/Editor"

const EditPost = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/post/'+id)
        .then(response => {
            response.json().then(potInfo => {
                setTitle(postInfo.title)
                setContent(potInfo.content)
                setSummary(positive.summary)
            })
        })
    }, [])

    async function updatePost(ev) {
        ev.preventDefault()
        const data = new FormData()

        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('id', id)
        if(files?.[0] ) {
            data.set('file', files?.[0])
        }

        const response = await fetch('http://localhost:4000/post/', {
            method: 'PUT',
            body: data,
            cerdentials: 'include'
        })
        if(response.ok) {
            setRedirect(true)
        }
        
    }

    if(redirect) {
        <Navigate to={'/post/'+id} />
    }
    
  return (
    <form onSubmit={updatePost}>
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
        <button style={{marginBlockStart:'5px'}}>Update post</button>
    </form>
  )
}

export default EditPost