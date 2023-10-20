'use client'
import Typewriter from 'typewriter-effect';

function TypewriterTitle() {
  return (
    <Typewriter
      options={{
        loop : true
      }}
      onInit={(typewriter)=>{
          typewriter.typeString("🔥Super Productivity")
          .pauseFor(1000)
          .deleteAll()
          .typeString("🤖AI Powered Insights.")
          .start();
      }}
    />
  )
}

export default TypewriterTitle