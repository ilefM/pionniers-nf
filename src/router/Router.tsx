import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Town from "../pages/Town";
import About from "../pages/About";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="personnages/:id" element={<Character />} />
                <Route path="villes-et-villages/:id" element={<Town />} />
                <Route path="a-propos" element={<About />} />
            </Route>
        </Routes>
    );
}
