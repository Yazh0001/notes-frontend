import React from 'react'
import { useState } from 'react'
import Note from './Note'

export default function NoteBox() {
    const [notes, setNotes] = useState([
        {title: "Note0001", content: "This is the first note"},
        {title: "Note0002", content: "This is the second note"}])
  return (
    <div>
        {notes.map((n)=><Note title={n.title} content={n.content}/>)}
    </div>
  )
}
