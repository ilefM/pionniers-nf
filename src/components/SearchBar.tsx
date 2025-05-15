import { useContext, useMemo, useState } from "react";
import { DataContext } from "../context/DataContext";
import type { Character, Town } from "../interfaces";
import { useNavigate } from "react-router";
import { IoSearchOutline } from "react-icons/io5";

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
    const navigate = useNavigate();

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

    function handleSuggestionClick(suggestion: Suggestion) {
        if (suggestion.type === "character")
            navigate(`/personnages/${suggestion.data.id}`);

        if (suggestion.type === "town")
            navigate(`/villes-et-villages/${suggestion.data.id}`);
    }

    return (
        <div className="bg-[#f5f3f4] mx-auto p-4 w-full rounded-lg shadow-lg  justify-center">
            <div className="flex h-5 w-full cursor-text items-center justify-between rounded-3xl px-2">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Rechercher un personnage ou une ville/village..."
                    className="outline-none px-2 w-full"
                />
                <IoSearchOutline size="22px" className="ml-1" color="#b5b1b3" />
            </div>
            {isSuggestionsVisible && (
                <div className="h-[1px] mx-2 mt-4 bg-[#e8e3e6]"></div>
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
