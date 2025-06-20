import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../leaflet-config";
import { NavLink } from "react-router";

type Dep = {
    code: string;
    department: string;
    latitude: number;
    longitude: number;
};

export default function MainMap({ deps }: { deps: Dep[] }) {
    return (
        <div className="h-[650px] w-full">
            <MapContainer
                center={[46.6034, 1.8883]}
                zoom={6}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {deps.map((dep) => (
                    <Marker
                        key={dep.code}
                        position={[dep.latitude, dep.longitude]}
                    >
                        <Popup>
                            <div className="space-y-0 p-0 m-0">
                                <p>
                                    {dep.department} ({dep.code})
                                </p>
                                <NavLink
                                    to={`/villes-departement/${dep.code}`}
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
