import React, { useEffect } from 'react'
import { useState } from 'react'
import Note from './Note'
import axios from 'axios'

export default function NoteBox() {
    const [notes, setNotes] = useState([
        {id: "Idtest1", title: "Untitled 001", content: "This is the first note"},
        {id: "Idtest2", title: "Untitled 002", content: "This is the second note"}])

    useEffect(()=>{
        axios.get('https://localhost:7241/api/Notes').then((res)=>{
            console.log(res.data[0])
            setNotes(res.data)
        })
        }, [])

        const deleteNote = (id)=>{
            // axios delete
            setNotes(notes.filter((note)=>note.noteId !== id))
        }

        const addNote = ()=>{
            var newid = Math.random().toString()
            setNotes([...notes, {noteId: newid, title: "Untitled", content: "Empty"}])
        }

  return (
    <div>
        {notes.map((n)=><Note noteId={n.noteId} title={n.title} content={n.content} deleteNote={deleteNote}/>)}
        <button onClick={addNote}>New Note</button>
    </div>
  )
}
