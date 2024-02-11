import axios from 'axios'
import { useState} from 'react'

export default function Note({noteId, title, content, deleteNote}) {
    

    const [editmode, setEditmode] = useState(false)

    const [titleState, setTitleState] = useState(title)
    const [contentState, setContentState] = useState(content)

    const handleDelete = ()=>{
      deleteNote(noteId)
  }

    const handleEdit = ()=>{
      setEditmode(!editmode)
    }

    const handleSave = ()=>{
        axios.put('https://localhost:7241/api/Notes/' + noteId, {"title": titleState, "content": contentState})
        setEditmode(!editmode)
    }
  return (
    <div>
        {editmode ? <input onChange={(e)=>setTitleState(e.target.value)} defaultValue={titleState}></input> : <div>{titleState}</div>}
        {editmode ? <input onChange={(e)=>setContentState(e.target.value)} defaultValue={contentState}></input> : <div>{contentState}</div>}
        <button onClick={handleDelete}>Delete</button>
        {editmode ? <button onClick={handleSave}>save</button> : <button onClick={handleEdit}>edit</button>}
    </div>
  )
}
