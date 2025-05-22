import { NavLink } from "react-router";
import type { Character } from "../interfaces";

function CharacterTile({ character }: { character: Character }) {
    return (
        <div className="rounded-xl bg-[#415a77] p-3 shadow-md transition-shadow hover:shadow-md">
            <NavLink to={`/personnages/${character.id}`}>
                <p className="text-md font-semibold text-white">
                    {character.lastname} {character.firstname}
                </p>
            </NavLink>
        </div>
    );
}

export default function CharacterList({
    characters,
}: {
    characters: Character[];
}) {
    return (
        <div className="">
            <p className="text-lg font-medium">
                Liste des personnages ({characters.length}) :
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {characters.map((char) => (
                    <CharacterTile key={char.id} character={char} />
                ))}
            </div>
        </div>
    );
}
