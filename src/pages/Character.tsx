import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "../context/DataContext";
import type { Character } from "../interfaces";

export default function Character() {
    const [character, setCharacter] = useState<Character>();
    const { id } = useParams();
    const context = useContext(DataContext);
    if (!context)
        throw new Error("DataContext must be used within a DataProvider");
    const { characters } = context;

    useEffect(() => {
        const char = characters.find((char) => char.id.toString() === id);
        setCharacter(char);
    }, [setCharacter, characters, id]);

    return (
        <div className="w-[1200px] mx-auto">
            <h1 className="mb-8 text-2xl">
                {character?.lastname}, {character?.firstname}
            </h1>

            <div className="flex flex-col items-start space-y-4">
                <div className="flex space-x-2">
                    <p className="font-medium">Nom de famille: </p>
                    <p>{character?.lastname}</p>
                </div>
                <div className="flex space-x-2">
                    <p className="font-medium">Prénom: </p>
                    <p>{character?.firstname}</p>
                </div>
                <div className="flex space-x-2">
                    <p className="font-medium">Nom complet: </p>
                    <p>
                        {character?.lastname}, {character?.firstname}
                    </p>
                </div>
                <div className="flex space-x-2">
                    <p className="font-medium">
                        Lieu principal (avec code postal):
                    </p>
                    <p>{character?.mainplace}</p>
                </div>
                <div className="flex space-x-2">
                    <p className="font-medium">
                        Lieu de naissance ou de baptème:
                    </p>
                    <p>
                        {character?.birthplace === ""
                            ? "Non spécifié"
                            : character?.birthplace}
                    </p>
                </div>
                <div className="flex space-x-2">
                    <p className="font-medium">
                        Lieu de décès ou d'inhumation:
                    </p>
                    <p>{character?.deathplace}</p>
                </div>
                <div className="flex flex-col space-x-2">
                    <p className="font-medium">Biographie:</p>
                    <p className="w-[800px]">{character?.bio}</p>
                </div>
            </div>
        </div>
    );
}
