import React from 'react'
import { useState } from 'react'

export default function Note({noteId, title, content, deleteNote}) {
    const handleDelete = ()=>{
        deleteNote(noteId)
    }
  return (
    <div>
        <div>{title}</div>
        <div>{content}</div>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
