import type { Metadata } from "next";
import Sidebar from "../components/widgets/Dashboard/Sidebar";
import DashboardNav from "../components/widgets/Dashboard/DashboardNav";


export const metadata: Metadata = {
    title: "Feedback Share - Dashboard",
    description: "",
};

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <main className='flex relative'>
            <div className='md:block hidden z-30 fixed top-0 left-0 h-screen w-[278px]'>
                <Sidebar />
            </div>

            <div className='relative md:pl-[278px] w-full'>

                <div className="relative">
                    <div className="w-full">
                        <DashboardNav />
                    </div>
                    {children}
                </div>

            </div>


        </main>
    );
}