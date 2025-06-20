import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import VIPCharacterDetail from "../pages/VIPCharacterDetail";
import ExploreData from "../pages/ExploreData";
import Department from "../pages/Department";
import CharactersList from "../components/CharactersList";
import CharacterDetails from "../pages/CharacterDetails";
import SignIn from "../pages/SignIn";
import Town from "../pages/Town";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="personnages/:id" element={<CharactersList />} />
                <Route
                    path="personnage-details/:id"
                    element={<CharacterDetails />}
                />
                <Route path="commune-details/:id" element={<Town />} />
                <Route
                    path="villes-departement/:code"
                    element={<Department />}
                />
                <Route path="a-propos" element={<About />} />
                <Route path="contactez-nous" element={<Contact />} />
                <Route
                    path="/personnages-majeurs/:url"
                    element={<VIPCharacterDetail />}
                />
                <Route
                    path="/memoire-lieux-et-personnages"
                    element={<ExploreData />}
                />
                <Route path="/se-connecter" element={<SignIn />} />
            </Route>
        </Routes>
    );
}
