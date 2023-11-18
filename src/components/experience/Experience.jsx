import React from 'react'
import { experienceData } from '../../data'
import Timeline from '../timeline/Timeline'
import './experience.scss'

export default function Experience({ darkTheme, smallViewport }) {

  //let age = Date.now() - new Date(1998, 11, 19)
  //age /= 31557600000
  //age = Math.floor(age)

  return (
    <div className='experience' id='experience'>
      <h1 id='title'>Hi, I'm <span className='blue'>Joshua</span></h1>
      <div id='description'>
        <p>
          Self-taught Software Developer currently 
          looking for an <b className='blue'>internship or junior developer position</b> starting <b className='blue'>as soon as possible!</b>.
        </p>
        <p>
          This is what I've been up to the last 7 years.
        </p>
      </div>
      <Timeline experience={experienceData} darkTheme={darkTheme} smallViewport={smallViewport}/>
    </div>
  )
}
