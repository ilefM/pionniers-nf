import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center p-2 text-lg m-2">
            <NavLink to="/" className="cursor-pointer text-xl">
                Pionniers et lieux de mémoire de la Nouvelle-France
            </NavLink>
            <div className="space-x-4">
                <NavLink to="/a-propos" className="underline cursor-pointer">
                    À propos
                </NavLink>
                <NavLink to="" className="underline cursor-pointer">
                    Contactez-nous
                </NavLink>
            </div>
        </div>
    );
}
