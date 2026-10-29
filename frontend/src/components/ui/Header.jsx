import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { UserStore } from '../../context/UserContext'

const Header = () => {
  const { user } = useContext(UserStore)
  const navigate = useNavigate()

  const isLoggedIn = Boolean(user?.token)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <rect x="3" y="7" width="18" height="14" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
            </svg>
          </div>

          <div>
            <h1 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
              JobTrack
            </h1>
            <p className="text-[11px] font-medium text-slate-500">
              Your career, organized.
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-slate-600 sm:gap-7">
          <Link
            to="/"
            className="transition-colors hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition-colors hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="transition-colors hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {isLoggedIn ? (
            <Button
              text="Dashboard"
              handler={() => navigate('/dashboard')}
              className="px-4 py-2.5"
            />
          ) : (
            <>
              <Button
                text="Login"
                variant="secondary"
                handler={() => navigate('/login')}
                className="px-3 py-2.5 sm:px-5"
              />
              <Button
                text="Get Started"
                handler={() => navigate('/register')}
                className="px-3 py-2.5 sm:px-5"
              />
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header