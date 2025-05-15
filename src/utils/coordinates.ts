import type { Town } from "../interfaces";

export interface Coordinate {
    id: number;
    name: string;
    postCode: string;
    position: [number, number];
}

async function getMunicipalitiesData() {
    const res = await fetch("/data/communes-france-2025.json");
    const data = await res.json();

    const munisWithUniquePostCode = new Set<string>();

    const filtered = data.filter((item: any) => {
        const value = item.code_postal;
        if (munisWithUniquePostCode.has(value)) return false;
        munisWithUniquePostCode.add(value);
        return true;
    });

    return filtered;
}

export async function getCoordinates(towns: Town[]): Promise<Coordinate[]> {
    const municipalities = await getMunicipalitiesData();
    const coordinates: Coordinate[] = [];
    municipalities.forEach((muni: any) =>
        towns.forEach((town: Town) => {
            if (town.postcode === muni.code_postal) {
                coordinates.push({
                    id: town.id,
                    name: town.name,
                    postCode: town.postcode,
                    position: [muni.latitude_centre, muni.longitude_centre],
                });
            }
        })
    );

    console.log(coordinates);

    return coordinates;
}

export function getCenter(coordinates: Coordinate[]): [number, number] {
    const [totalLat, totalLong] = coordinates.reduce(
        ([accLat, accLong], curr) => [
            accLat + curr.position[0],
            accLong + curr.position[1],
        ],
        [0, 0]
    );

    return [totalLat / coordinates.length, totalLong / coordinates.length];
}

export async function getTownCoordinate(
    postalCode: string
): Promise<[number, number]> {
    let coordinate: [number, number] = [0, 0];
    const municipalities = await getMunicipalitiesData();
    municipalities.forEach((muni: any) => {
        if (postalCode === muni.code_postal) {
            coordinate = [muni.latitude_centre, muni.longitude_centre];
        }
    });

    return coordinate;
}
