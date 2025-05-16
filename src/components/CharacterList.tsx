import { NavLink } from "react-router";
import type { Character } from "../interfaces";

function CharacterTile({ character }: { character: Character }) {
    return (
        <div className="rounded-xl border bg-[#e9ecef] p-4 shadow-sm transition-shadow hover:shadow-md">
            <NavLink to={`/personnages/${character.id}`}>
                <p className="text-lg font-semibold text-black">
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
    console.log(characters);
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {characters.map((char) => (
                <CharacterTile key={char.id} character={char} />
            ))}
        </div>
    );
}
