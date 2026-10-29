import React from 'react'
import { Link } from 'react-router-dom'

const SidebarBrand = () => {
    return (
        <Link
            to="/dashboard"
            className="mb-10 flex items-center gap-3 px-2"
        >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-xl font-extrabold shadow-lg shadow-blue-500/20">
                J
            </div>

            <div>
                <h1 className="text-[15px] font-bold tracking-wide text-white">
                    Job Tracker
                </h1>

                <p className="mt-1 text-xs text-slate-400">
                    Application Workspace
                </p>
            </div>
        </Link>
    )
}

export default SidebarBrand