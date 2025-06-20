import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { supabase } from "../supabase/supabaseClient";

type Town = {
    id: string;
    name: string;
    code_insee?: string | null;
    dep: string | null;
    dep_code?: string | null;
    position?: [number, number] | null;
    description?: string | null;
};

export default function Department() {
    const { code } = useParams<"code">();
    const [towns, setTowns] = useState<Town[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        if (!code) return; // Guard: no param yet
        const fetchTowns = async () => {
            setLoading(true);
            setErrorMsg(null);

            const { data, error } = await supabase
                .from("towns") // 👈 type‑safe query
                .select("*")
                .eq("dep_code", code); // WHERE dep_code = :code

            if (error) {
                setErrorMsg(error.message);
            } else {
                setTowns(data ?? []);
            }
            setLoading(false);
        };
        fetchTowns();
    }, [code]);

    if (loading) return <p>Loading…</p>;
    if (errorMsg) return <p className="text-red-600">{errorMsg}</p>;

    return (
        <div className="flex flex-col items-start w-[700px] m-auto">
            <h1 className="text-2xl font-medium mb-2">
                Communes du département{" "}
                {towns.length > 0 && towns[0].dep?.toLocaleLowerCase()}{" "}
                {towns.length > 0 && towns[0].dep_code}
            </h1>
            <p className="mb-8 font-semibold">({towns.length} communes)</p>

            <div className="flex flex-wrap gap-6">
                {towns.map((town) => (
                    <div
                        key={town.id}
                        className="rounded-lg p-4 shadow-md bg-[#dacfc4] w-[157px] flex flex-col"
                    >
                        <h2 className="text-lg font-semibold">{town.name}</h2>
                        <h2 className="text-sm font-semibold">
                            Code insée {town.code_insee}
                        </h2>
                        <div className="mt-auto pt-4">
                            <Link
                                to={`/commune-details/${town.id}`}
                                className="p-2 w-full bg-[#4a4e69] text-white text-center rounded-xl shadow-lg text-sm"
                            >
                                Voir en détails
                            </Link>
                        </div>
                    </div>
                ))}
                {towns.length === 0 && <p>No towns found for dep {code}.</p>}
            </div>
        </div>
    );
}
