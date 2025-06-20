import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { supabase } from "../supabase/supabaseClient";

export default function CharactersList() {
    type Character = {
        id: string;
        lastname?: string | null;
        firstname?: string | null;
        mainplace?: string | null;
        birthplace?: string | null;
        deathplace?: string | null;
        bio?: string | null;
    };

    const { id } = useParams<"id">();
    const [characters, setCharacters] = useState<Character[]>([]);

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
                .eq("town_id", id);

            if (error) {
                setErrorMsg(error.message);
            } else {
                setCharacters(data ?? []);
            }
            setLoading(false);
        };
        fetchTowns();
    }, [id]);

    if (loading) return <p>Loading…</p>;
    if (errorMsg) return <p className="text-red-600">{errorMsg}</p>;

    return (
        <div className="flex flex-col items-start m-auto">
            <p className="mb-8 font-semibold">
                ({characters.length} personnage(s))
            </p>
            <div className="space-y-4 flex flex-col">
                {characters.map((char) => (
                    <div
                        key={char.id}
                        className="rounded-lg min-w-[300px] flex flex-col p-4 shadow-md bg-[#dacfc4]"
                    >
                        <h2 className="text-xl font-semibold">
                            {char.lastname} {char.firstname}
                        </h2>
                        <h2 className="text-md font-semibold">
                            Origine: {char.mainplace}
                        </h2>

                        <div className="mt-6 mb-2">
                            <Link
                                to={`/personnage-details/${char.id}`}
                                className="p-3 w-[250px] bg-[#4a4e69] text-white text-center rounded-xl shadow-lg"
                            >
                                En savoir plus
                            </Link>
                        </div>
                    </div>
                ))}
                {characters.length === 0 && <p>Aucun personnage trouvé.</p>}
            </div>
        </div>
    );
}
