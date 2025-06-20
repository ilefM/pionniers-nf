import { useEffect, useState } from "react";
import MainMap from "../components/MainMap";
import SearchBar from "../components/SearchBar";

type Dep = {
    code: string;
    department: string;
    latitude: number;
    longitude: number;
};

export default function ExploreData() {
    const [deps, setDeps] = useState<Dep[]>([]);

    useEffect(() => {
        fetch("/data/departments.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch departments data");
                }
                return res.json();
            })
            .then((data: Dep[]) => setDeps(data))
            .catch((error) => {
                console.error("Error loading departments:", error);
            });
    }, []);

    return (
        <div className="flex flex-col justify-center m-auto w-[70%]">
            <h1 className="text-lg font-semibold mb-5 text-left">
                Carte interactive des départements français
            </h1>
            <MainMap deps={deps} />
            <div className="mt-8 w-full mb-6">
                <SearchBar />
            </div>
        </div>
    );
}
