import React from 'react'

export const RegularLIst = ({items,resourceName,itemComponent:ItemComponent}) => {
  return (
    <>
    {
        items.map((item,i)=>{
            return <ItemComponent key={i} {...{[resourceName]:item}} />
        })
    }
    </>
  )
}
