import React from 'react'
import { UncontrolledOnboardinfFlowTest } from './UncontrollOnboardingFlow'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import FormThree from './FormThree'


const OnBoardingParent = () => {
  return (
    <div>
      <UncontrolledOnboardinfFlowTest onFinish={data=>{
        console.log(data)
        alert('Onboarding Complete')
        }} >
        <FormOne />
        <FormTwo/>
        <FormThree/>
      </UncontrolledOnboardinfFlowTest>
    </div>
  )
}

export default OnBoardingParent
