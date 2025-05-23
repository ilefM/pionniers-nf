import type { Character } from "./Character";

export interface Town {
    id: number;
    name: string;
    postcode: string;
    population: number;
    description: string;
    characters: Character[];
}

export interface Department {
    id: number;
    name: string;
    towns: Town[];
}
