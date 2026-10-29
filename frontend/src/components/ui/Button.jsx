import React from 'react'

const Button = ({
  type = 'button',
  text,
  handler,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20',
    secondary:
      'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50',
    dark:
      'bg-slate-900 text-white hover:bg-slate-800',
  }

  return (
    <button
      type={type}
      onClick={handler}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl px-5 py-3 text-sm font-semibold
        transition-all duration-200
        active:scale-[0.98]
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant] || variants.primary}
        ${className}
      `}
    >
      {text}
    </button>
  )
}

export default Button