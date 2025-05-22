import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../leaflet-config";
import type { Town } from "../interfaces";
import { useEffect, useState } from "react";
import {
    getCenter,
    getCoordinates,
    type Coordinate,
} from "../utils/coordinates";
import { NavLink } from "react-router";

export default function MainMap({ towns }: { towns: Town[] }) {
    const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
    const [center, setCenter] = useState<[number, number]>();

    useEffect(() => {
        const fetchData = async () => {
            const coordinatesTownsMunicipalities = await getCoordinates(towns);
            const center = getCenter(coordinatesTownsMunicipalities);
            setCoordinates(coordinatesTownsMunicipalities);
            setCenter(center);
        };

        fetchData();
    }, [towns]);

    console.log(center);
    return (
        <div className="h-[500px] w-full">
            <MapContainer
                center={[
                    center ? center[0] : 46.913,
                    center ? center[1] : 0.194,
                ]}
                zoom={10}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {coordinates.map((coor) => (
                    <Marker key={coor.id} position={coor.position}>
                        <Popup>
                            <div className="space-y-0 p-0 m-0">
                                <p>
                                    {coor.name} ({coor.postCode})
                                </p>
                                <NavLink
                                    to={`/villes-et-villages/${coor.id}`}
                                    className="underline"
                                >
                                    En savoir plus
                                </NavLink>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
