import React from 'react'
// useful when associating with specific users and will cause a display for that person
// useParams gets the specific url for the website to go to
import { useParams } from 'react-router-dom'
import { ProjectData } from '../data/ProjectData';
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = () => {
    const {id} = useParams()
    const project = ProjectData[id]
  return (
    <div>
      <h1>{project.name}</h1>
      <img src={project.image} style={{ width: '40%', height: '40%' }}/>
      <p>
        <b>Language: </b>
        <br/>
        {project.lang}
      </p>
      <p>
        <b>Details: </b>
        <br/>
        {project.details}
      </p>
      <GitHubIcon className='icons' onClick={() => window.open(project.github)}/>
    </div>
  )
}

export default Project