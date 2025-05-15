import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Layout() {
    return (
        <div className="flex flex-col items-center min-h-screen h-full w-full">
            <Navbar />
            <div className="w-full h-full mt-6">
                <Outlet />
            </div>
        </div>
    );
}
