import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center p-4 text-lg text-slate-50 mx-2 bg-[#284b63]">
            <NavLink to="/" className="cursor-pointer text-xl">
                Pionniers et lieux de mémoire de la Nouvelle-France
            </NavLink>
            <div className="space-x-4">
                <NavLink to="/a-propos" className="underline cursor-pointer">
                    À propos
                </NavLink>
                <NavLink
                    to="/contactez-nous"
                    className="underline cursor-pointer"
                >
                    Contactez-nous
                </NavLink>
            </div>
        </div>
    );
}
