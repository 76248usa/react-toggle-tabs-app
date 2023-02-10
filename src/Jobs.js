import React from 'react'
import Job from './Job';

function Jobs({jobs}) {
  return 
    <div>
      {jobs.map((job) => {
        <Job job={job} />
      }
  )
}
</div>
}

export default Jobs
