import React from 'react'

const Input = ({
  type = 'text',
  placeholder,
  text,
  register,
  name,
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-slate-700"
      >
        {text}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete={
          type === 'password'
            ? 'current-password'
            : type === 'email'
              ? 'email'
              : 'off'
        }
        {...register(name)}
        className="
          w-full rounded-xl border border-slate-200
          bg-white px-4 py-3 text-sm text-slate-800
          outline-none placeholder:text-slate-400
          transition-all duration-200
          hover:border-slate-300
          focus:border-blue-500 focus:ring-4
          focus:ring-blue-500/10
        "
      />
    </div>
  )
}

export default Input