import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "../leaflet-config";

export default function TownMap({
    coordinate,
}: {
    coordinate: [number, number];
}) {
    const zoom = 3;
    return (
        <div className="h-[300px] w-full">
            <MapContainer
                center={[coordinate[0], coordinate[1]]}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[coordinate[0], coordinate[1]]}></Marker>
            </MapContainer>
        </div>
    );
}
