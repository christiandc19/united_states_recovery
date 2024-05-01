import React from 'react'
import './HeroinSection.css'

const HeroinSection = () => {
  return (
    <>
            <div className='heroin-section container'>
              <div className='heroin-section-content'>
                <div className='heroin-section-flex'>

                  <div className='heroin-section-left'>
                    <h1>HEROIN ADDICTION</h1>
                    <p>Heroin is an opioid stimulant created from morphine and the seed of the poppy plant. It usually appears in either powder form or as a sticky tar substance (‘black tar heroin’).
                    <br/>According to the National Institute on Drug Abuse, around 80% of heroin users get begin abusin prescription drugs before they eventually turn to heroin.<br/>**In a study of those entering treatment for opioid use disorder, approximately one-third reported heroin as the first opioid they used consistently to get high.<br/>And the problem only seems to be growing, as opioids become increasingly more expensive and difficult to acquire. Heroin can be taken in several ways, typically by injection, snorting, or smoking. It can also be combined with other drugs, like crack cocaine (called “Speedballing”).
                    </p>
                  </div>

                  <div className='heroin-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/fentanyl-addiction.jpg' alt="activities" />
                  </div>

                </div>
              </div>
            </div>

    </>
  )
}

export default HeroinSection
