import React from 'react'
import Hero from '../components/Hero'
import { useLocation } from "react-router-dom";
import TextToSpeech from '../components/Text-to-Speect';
import Display from "../components/Display"
function Speech() {
    const location = useLocation();
    const { summary } = location.state || {};
  return (
    <main>
    <div className='main'>
      <div className='gradient' />
    </div>

    <div className='app'>
      <Hero />
      {summary && (
          <React.Fragment>
            {/* Display the summary using the new component */}
            <Display summary={summary} />

            {/* Render the TextToSpeech component */}
            <TextToSpeech text={summary} />
          </React.Fragment>
        )}
    </div>
  </main>
  )
}

export default Speech;
