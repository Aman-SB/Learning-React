import React from 'react'

const Button = (props) => {
  const {children , clickAction , data} = props
  console.log(props)
  
  const handleClick = () => {
    clickAction?.()
    // ? = optional chaining => it tell if it exist then perform its specilaization thing other wise dont show error
  }

  return (
    <button onClick={handleClick}>{children} + {data?.a?.b?.c}</button>
  )
}

export default Button
