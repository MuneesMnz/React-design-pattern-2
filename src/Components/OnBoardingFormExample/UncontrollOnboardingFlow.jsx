import React, { useState } from "react";

export const UncontrolledOnboardinfFlowTest = ({ children, onFinish }) => {
  //Data storage area
  const [onBoardingData, setOnBoardingData] = useState({});

  //Index of child Index component
  const [currentIndex, setCurrentIndex] = useState(0);

  const gotoNext = (e,stepData) => {
    e.preventDefault();
    const nextIndex=currentIndex + 1;

    const updatedData={
        ...onBoardingData,
        ...stepData
    }
    console.log(updatedData);
    if(nextIndex<children.length){
    setCurrentIndex(nextIndex);
    }else{
        onFinish(updatedData)
    }
    setOnBoardingData(updatedData)
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { gotoNext });
  }

  return currentChild;
};
