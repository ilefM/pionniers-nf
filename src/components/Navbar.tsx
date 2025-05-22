import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center px-4 py-3 text-md text-[#fcfcfc] mx-2 bg-[#282828]">
            <NavLink to="/" className="cursor-pointer text-xl">
                Destination Nouvelle-France
            </NavLink>
            <div className="space-x-4">
                <NavLink
                    to="/a-propos"
                    className="hover:underline cursor-pointer"
                >
                    À propos
                </NavLink>
                <NavLink
                    to="/contactez-nous"
                    className="hover:underline cursor-pointer"
                >
                    Contactez-nous
                </NavLink>
            </div>
        </div>
    );
}
