import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider";
import { supabase } from "../supabase/supabaseClient";

export default function Navbar() {
    const { user } = useAuth();
    const navigate = useNavigate();

    async function handleSignOut() {
        await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <div className="w-full flex justify-between items-center px-4 py-3 text-md font-semibold text-white mx-2 bg-[#987d77]">
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

                {!user ? (
                    <NavLink
                        to="/se-connecter"
                        className="hover:underline cursor-pointer"
                    >
                        Se connecter
                    </NavLink>
                ) : (
                    <button
                        onClick={handleSignOut}
                        className="hover:underline cursor-pointer"
                    >
                        Se déconnecter
                    </button>
                )}
            </div>
        </div>
    );
}
