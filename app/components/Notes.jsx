import React from 'react';
import Note from './Note';


// dummy implementation to prevent from crashing if onDelete is not provided
export default ({notes, onDelete=() => {}}) => (
  <ul>{notes.map(({id, task}) =>
    <li key={id}>
      <Note
        onDelete={onDelete.bind(null, id)}
        task={task} />
    </li>
  )}</ul>
)
