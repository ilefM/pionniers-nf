import { useEffect, useState } from "react";
import TownMap from "../components/TownMap";
import { useParams } from "react-router";
import { supabase } from "../supabase/supabaseClient";
import CharactersList from "../components/CharactersList";

type Town = {
    id: string;
    name: string;
    code_insee?: string | null;
    dep: string | null;
    dep_code?: string | null;
    position?: [number, number] | null;
    description?: string | null;
};

export default function Town() {
    const { id } = useParams<"id">();
    const [town, setTown] = useState<Town>();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchTown = async () => {
            setLoading(true);
            setErrorMsg(null);

            const { data, error } = await supabase
                .from("towns")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                setErrorMsg(error.message);
            } else {
                setTown(data ?? null);
            }
            setLoading(false);
        };
        fetchTown();
    }, [id]);

    if (loading) return <p>Loading…</p>;
    if (errorMsg) return <p className="text-red-600">{errorMsg}</p>;

    return (
        <div className="w-[1200px] mx-auto flex justify-center items-center">
            <div>
                <h1 className="mb-4 font-semibold text-2xl">{town?.name}</h1>
                <div className="flex justify-between p-5 bg-[#987d77] text-white rounded-2xl w-[810px] shadow-md">
                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex space-x-2">
                            <p>Code insée: {town?.code_insee}</p>
                        </div>
                        <div className="flex space-x-2">
                            <p>
                                Département: {town?.dep} {town?.dep_code}
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            <p className="w-full">{town?.description}</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-4 h-[300px] w-[800px]">
                    {town?.position?.[0] && (
                        <TownMap coordinate={town?.position} />
                    )}
                </div>
                <div className="mt-10">
                    <CharactersList />
                </div>
            </div>
        </div>
    );
}
