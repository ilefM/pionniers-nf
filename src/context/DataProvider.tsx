import { useEffect, useState, type ReactNode } from "react";
import type { Character, Department, Town } from "../interfaces";
import { DataContext } from "./DataContext";

export default function DataProvider({ children }: { children: ReactNode }) {
    const [departments, setDepartment] = useState<Department[]>([]);
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const loadData = async () => {
            // Towns
            const charenteTownsRes = await fetch("/data/charente-towns.json");
            const charenteTownsData: Town[] = await charenteTownsRes.json();

            const charenteMaritimeTownsRes = await fetch(
                "/data/charente-maritime-towns.json"
            );
            const charenteMaritimeTownsData: Town[] =
                await charenteMaritimeTownsRes.json();

            const vienneTownsRes = await fetch("/data/vienne-towns.json");
            const vienneTownsData: Town[] = await vienneTownsRes.json();

            const deuxsevresTownsRes = await fetch(
                "/data/deux-sevres-towns.json"
            );
            const deuxsevresTownsData: Town[] = await deuxsevresTownsRes.json();

            const allDepartments: Department[] = [
                {
                    id: 1,
                    name: "Charente",
                    towns: charenteTownsData,
                },
                {
                    id: 2,
                    name: "Charente-maritime",
                    towns: charenteMaritimeTownsData,
                },
                {
                    id: 3,
                    name: "Vienne",
                    towns: vienneTownsData,
                },
                {
                    id: 4,
                    name: "Deux-sèvres",
                    towns: deuxsevresTownsData,
                },
            ];

            // Characters
            const charenteCharsRes = await fetch(
                "/data/charente-characters.json"
            );
            const charenteCharsData: Character[] =
                await charenteCharsRes.json();

            const charenteMaritimeCharsRes = await fetch(
                "/data/charente-maritime-characters.json"
            );
            const charenteMaritimeCharsData: Character[] =
                await charenteMaritimeCharsRes.json();

            const vienneCharsRes = await fetch("/data/vienne-characters.json");
            const vienneCharsData: Character[] = await vienneCharsRes.json();

            const deuxsevresCharsRes = await fetch(
                "/data/deux-sevres-characters.json"
            );
            const deuxsevresCharsData: Character[] =
                await deuxsevresCharsRes.json();

            const allCharacters = charenteCharsData.concat(
                charenteMaritimeCharsData,
                vienneCharsData,
                deuxsevresCharsData
            );

            let id = 1;
            allCharacters.forEach((char) => {
                char.id = id;
                id++;
            });

            id = 1;
            allDepartments.forEach((dp) =>
                dp.towns.forEach((town) => {
                    town.id = id;
                    id++;
                })
            );

            setDepartment(allDepartments);
            setCharacters(allCharacters);
        };

        loadData();
    }, []);

    return (
        <DataContext.Provider value={{ departments, characters }}>
            {children}
        </DataContext.Provider>
    );
}
