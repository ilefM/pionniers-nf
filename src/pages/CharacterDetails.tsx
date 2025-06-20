import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { supabase } from "../supabase/supabaseClient";

export default function CharacterDetails() {
    type Character = {
        id: string;
        lastname?: string | null;
        firstname?: string | null;
        mainplace?: string | null;
        birthplace?: string | null;
        deathplace?: string | null;
        bio?: string | null;
        town_id: string | null;
    };

    const { id } = useParams<"id">();
    const [character, setCharacter] = useState<Character>();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchTowns = async () => {
            setLoading(true);
            setErrorMsg(null);

            const { data, error } = await supabase
                .from("characters")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                setErrorMsg(error.message);
            } else {
                setCharacter(data ?? null);
            }
            setLoading(false);
        };
        fetchTowns();
    }, [id]);

    if (loading) return <p>Loading…</p>;
    if (errorMsg) return <p className="text-red-600">{errorMsg}</p>;

    return (
        <div className="w-[1100px] mx-auto">
            <h1 className="mb-8 text-2xl font-semibold">
                {character?.lastname}, {character?.firstname}
            </h1>

            <div className="flex items-start justify-between p-5 bg-[#dacfc4] rounded-2xl shadow-md">
                <div className="space-y-3">
                    <div className="flex space-x-2">
                        <p className="font-medium">Nom de famille: </p>
                        <p>{character?.lastname}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-medium">Prénom: </p>
                        <p>{character?.firstname}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-medium">Lieu principal:</p>
                        <p>{character?.mainplace}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-medium">
                            Lieu de naissance ou de baptème:
                        </p>
                        <p>
                            {character?.birthplace === ""
                                ? "Non spécifié"
                                : character?.birthplace
                                ? character.birthplace
                                : "Inconnu"}
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-medium">
                            Lieu de décès ou d'inhumation:
                        </p>
                        <p>
                            {character?.deathplace
                                ? character.deathplace
                                : "Inconnu"}
                        </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-medium">Biographie:</p>
                    <p className="w-[500px]">{character?.bio}</p>
                </div>
            </div>
            <div className="mt-12">
                <Link
                    to={`/personnages/${character?.town_id}`}
                    className="text-lg hover:underline font-semibold"
                >
                    Retour à la liste des personnages
                </Link>
            </div>
        </div>
    );
}
