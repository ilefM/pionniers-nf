import { createContext } from "react";
import type { Character, Department } from "../interfaces";

interface IData {
    departments: Department[];
    characters: Character[];
}

export const DataContext = createContext<IData | undefined>(undefined);
