import React from "react"

const Button = ({ children, variant = "default", size = "default", className = "", asChild = false, ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  const Comp = asChild
    ? React.cloneElement(children, {
        ...props,
        className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
      })
    : "button"

  if (asChild) {
    return React.cloneElement(children, {
      ...props,
      className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
    })
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export { Button }
