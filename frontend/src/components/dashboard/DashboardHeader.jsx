
import { useLocation } from 'react-router-dom'

const DashboardHeader = () => {
    const location = useLocation()

    const currentPage = {
        '/dashboard': 'Overview',
        '/dashboard/all-application': 'All Application',
        '/dashboard/add-application': 'Add Application',
        '/dashboard/manage-application': 'Manage Application',
    }[location.pathname] || 'Dashboard'

    return (
        <header className="sticky top-0 z-20 flex min-h-[82px] items-center justify-between gap-4 border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl sm:px-8 lg:px-10">

            <div className="min-w-0">
                <div className="mb-1 flex items-center gap-2 text-xs text-slate-400">
                    <span>Workspace</span>
                    <span>/</span>
                    <span className="font-medium text-blue-600">
                        {currentPage}
                    </span>
                </div>

                <h2 className="truncate text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    {currentPage}
                </h2>
            </div>

            <div className="flex shrink-0 items-center gap-3 sm:gap-5">
                <div className="hidden text-right sm:block">
                    <p className="text-sm font-semibold text-slate-800">
                        Job Seeker
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        Personal Workspace
                    </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-sm font-bold text-blue-700 ring-4 ring-slate-50">
                    JS
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader