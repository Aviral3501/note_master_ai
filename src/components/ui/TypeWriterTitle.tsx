"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop:true,
      }}
      onInit={(typewriter)=>{
        typewriter.typeString('Elevate 🚀 Your Productivity')
        .pauseFor(2000).deleteAll()
        .typeString('Streamline Your Workflow ,🧠 With AI powered Insights')
        .start()
      }}/>
  )
}

export default TypeWriterTitle;