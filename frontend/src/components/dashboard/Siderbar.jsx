import React from 'react'
import { NavLink } from 'react-router-dom'
import SidebarBrand from './SidebarBrand'


const Sidebar = () => {
    const navItems = [
        { title: 'Overview', path: '/dashboard', icon: '▦' },
        { title: 'All Application', path: '/dashboard/all-application', icon: '▤' },
        { title: 'Add Application', path: '/dashboard/add-application', icon: '+' },
        { title: 'Manage Application', path: '/dashboard/manage-application', icon: '◷' },
    ]

    return (
        <aside className="flex w-full flex-col bg-[#111827] px-5 py-6 text-white md:sticky md:top-0 md:h-screen md:w-[270px] md:shrink-0 md:px-6">

            <SidebarBrand />

            <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Main Menu
            </p>

            <nav className="flex flex-col gap-2 text-sm font-medium">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/dashboard'}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-200 ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/30'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`
                        }
                    >
                        <span className="flex h-5 w-5 items-center justify-center text-lg">
                            {item.icon}
                        </span>

                        {item.title}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-10 md:mt-auto">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-800/60 p-4">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-xl text-blue-400">
                        ✦
                    </div>

                    <p className="text-sm font-semibold text-white">
                        Stay on track
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                        Every application is a step closer to your next opportunity.
                    </p>
                </div>

                <div className="mt-5 border-t border-slate-800 pt-4 text-center text-[11px] text-slate-500">
                    Job Tracker · Your career, organized
                </div>
            </div>
        </aside>
    )
}

export default Sidebar