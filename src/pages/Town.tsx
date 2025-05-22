import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "../context/DataContext";
import type { Town } from "../interfaces";
import TownMap from "../components/TownMap";
import { getTownCoordinate } from "../utils/coordinates";
import CharacterList from "../components/CharacterList";

export default function Town() {
    const [town, setTown] = useState<Town>();
    const [coordinate, setCoordinate] = useState<[number, number]>([0, 0]);
    const { id } = useParams();
    const context = useContext(DataContext);
    if (!context)
        throw new Error("DataContext must be used within a DataProvider");
    const { departments, characters } = context;

    useEffect(() => {
        const towns = departments.flatMap((dep) => dep.towns);
        const townData = towns.find((town) => town.id.toString() === id);
        setTown(townData);

        townData?.characters.forEach((char) => {
            characters.forEach((generalChar) => {
                if (
                    char.firstname === generalChar.firstname &&
                    char.lastname === generalChar.lastname
                ) {
                    char.id = generalChar.id;
                }
            });
        });

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
    console.log(coordinate);
    return (
        <div className="w-[1000px] mx-auto flex justify-center items-center">
            <div>
                <h1 className="mb-4 text-2xl">{town?.name}</h1>
                <div className="flex justify-between p-5 bg-[#003049] text-white rounded-2xl w-[650px] shadow-md">
                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex space-x-2">
                            <p>{town?.postcode}</p>
                        </div>
                        <div className="flex space-x-2">
                            <p className="w-full">{town?.description}</p>
                        </div>
                    </div>
                    {/* <div className="h-[300px] w-[500px]">
                    <TownMap coordinate={coordinate} />
                </div> */}
                </div>
                <div className="mt-10">
                    {town?.characters && (
                        <CharacterList characters={town?.characters} />
                    )}
                </div>
            </div>
        </div>
    );
}
