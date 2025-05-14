import { useContext, useEffect, useMemo, useState } from "react";
import { DataContext } from "../context/DataContext";
import type { Character, Town } from "../interfaces";

interface Suggestion {
    type: "character" | "town";
    display: string;
    data: Character | Town;
}

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [isSuggestionsVisible, setIsSuggestionsVisible] =
        useState<boolean>(false);

    const context = useContext(DataContext);
    if (!context)
        throw new Error("DataContext must be used within a DataProvider");
    const { characters, departments } = context;
    const towns = useMemo(() => {
        return departments.flatMap((dep) => dep.towns);
    }, [departments]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 2) {
            const charactersMatches = characters
                .filter(
                    (char) =>
                        char.lastname.toLowerCase().includes(value) ||
                        char.firstname.toLowerCase().includes(value)
                )
                .map((char) => ({
                    type: "character" as const,
                    display: `${char.firstname} ${char.lastname}`,
                    data: char,
                }));

            const townsMatches = towns
                .filter(
                    (town) =>
                        town.name.toLowerCase().includes(value) ||
                        town.postcode.includes(value)
                )
                .map((town) => ({
                    type: "town" as const,
                    display: `${town.name} (${town.postcode})`,
                    data: town,
                }));

            const allMatches = [...charactersMatches, ...townsMatches];

            allMatches.length != 0
                ? setIsSuggestionsVisible(true)
                : setIsSuggestionsVisible(false);
            setSuggestions(allMatches);
        } else {
            setSuggestions([]);
            setIsSuggestionsVisible(false);
        }
    }

    function handleSuggestionClick(suggestion: Suggestion) {}

    return (
        <div className="bg-[#fefae0] mx-auto p-4 w-full rounded-lg shadow-md  justify-center">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Rechercher un personnage ou une ville/village..."
                className="outline-none px-2 w-full"
            />
            {isSuggestionsVisible && (
                <div className="h-[1px] mx-2 mt-4 bg-[#e8e3ce]"></div>
            )}
            {isSuggestionsVisible && suggestions.length > 0 && (
                <div className="mt-2">
                    <ul className="max-h-[400px] overflow-y-auto">
                        {suggestions.map((suggestion, id) => (
                            <li
                                key={id}
                                onClick={() =>
                                    handleSuggestionClick(suggestion)
                                }
                                className="rounded-lg text-neutral-700 p-2 my-1 hover:backdrop-brightness-95 hover:cursor-pointer"
                            >
                                {suggestion.display}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
