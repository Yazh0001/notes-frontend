import React from 'react'
import { useState } from 'react'

export default function Note({title, content}) {

  return (
    <div>
        <div>{title}</div>
        <div>{content}</div>
    </div>
  )
}
