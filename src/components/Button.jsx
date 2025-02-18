import React from "react"
const Button = ({className, children}) => {
  return (
    <a href="#" className={`px-4 py-1 bg-primary rounded-xs text-white font-lexend text-sm font-normal ${className}`}>{children}</a>
  )
}

export default Button