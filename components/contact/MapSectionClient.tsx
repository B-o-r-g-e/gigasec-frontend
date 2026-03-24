'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

export default function MapSectionClient() {
    return (
        <MapContainer
            center={[9.082, 8.6753]}
            zoom={5}
            scrollWheelZoom={false}
            className="w-full h-[360px] sm:h-[420px] rounded-2xl"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[6.5244, 3.3792]}>
                <Popup>Lagos HQ</Popup>
            </Marker>
            <Marker position={[4.8156, 7.0498]}>
                <Popup>Port Harcourt</Popup>
            </Marker>
        </MapContainer>
    );
}
