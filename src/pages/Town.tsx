import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "../context/DataContext";
import type { Town } from "../interfaces";
import TownMap from "../components/TownMap";
import { getTownCoordinate } from "../utils/coordinates";

export default function Town() {
    const [town, setTown] = useState<Town>();
    const [coordinate, setCoordinate] = useState<[number, number]>([0, 0]);
    const { id } = useParams();
    const context = useContext(DataContext);
    if (!context)
        throw new Error("DataContext must be used within a DataProvider");
    const { departments } = context;

    useEffect(() => {
        const towns = departments.flatMap((dep) => dep.towns);
        const townData = towns.find((town) => town.id.toString() === id);
        setTown(townData);

        async function fetchCoordinate() {
            if (townData) {
                const coordinateData = await getTownCoordinate(
                    townData.postcode
                );
                setCoordinate(coordinateData);
            }
        }

        fetchCoordinate();
    }, [setTown, departments, id, setCoordinate]);

    return (
        <div className="w-[1000px] mx-auto h-full">
            <h1 className="mb-8 text-2xl">{town?.name}</h1>
            <div className="flex justify-between">
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex space-x-2">
                        <p className="font-medium">Nombre d'habitants:</p>
                        <p>{town?.population}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-medium">Code postal:</p>
                        <p>{town?.postcode}</p>
                    </div>
                </div>
                <div className="h-[300px] w-[500px]">
                    <TownMap coordinate={coordinate} />
                </div>
            </div>
        </div>
    );
}
