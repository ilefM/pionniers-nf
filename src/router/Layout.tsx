import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Layout() {
    return (
        <div className="flex flex-col items-center h-full w-full">
            <Navbar />
            <div className="w-full h-full mt-8">
                <Outlet />
            </div>
        </div>
    );
}
