import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Layout() {
    return (
        <div className="m-0 p-0 flex h-full min-h-screen w-full flex-col overflow-hidden text-dark-0">
            <div className="flex flex-col">
                <Navbar />
                <div className="mx-8 mt-8 flex flex-col items-center justify-center ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
