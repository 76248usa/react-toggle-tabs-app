import React from 'react'


function Job({title,dates}) {
    //const {id, title, dates} = job
  return (
    <div>
        <p>{title}</p>
        <p>{dates}</p>
    </div>
  )
}

export default Job
