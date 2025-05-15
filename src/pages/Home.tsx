import MainMap from "../components/MainMap";
import SearchBar from "../components/SearchBar";
import "leaflet/dist/leaflet.css";
import { DataContext } from "../context/DataContext";
import { useContext, useMemo } from "react";

export default function Home() {
    const context = useContext(DataContext);
    if (!context)
        throw new Error("DataContext must be used within a DataProvider");
    const { departments } = context;

    const towns = useMemo(() => {
        return departments.flatMap((dep) => dep.towns);
    }, [departments]);

    return (
        <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="h-[500px] w-full">
                <MainMap towns={towns} />
            </div>
            <div className="w-3/4 max-w-[800px] mt-10">
                <SearchBar />
            </div>
        </div>
    );
}
