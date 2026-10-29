
import { Outlet } from 'react-router-dom'

import DashboardHeader from '../components/dashboard/DashboardHeader'
import Sidebar from '../components/dashboard/Siderbar'


const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-[#F5F7FB] md:flex">
            <Sidebar/>

            <div className="min-w-0 flex-1">
                <DashboardHeader />

                <main className="p-5 sm:p-8 lg:p-10">
                    <div className="mx-auto w-full max-w-[1600px]">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout