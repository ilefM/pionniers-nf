import { useParams } from "react-router";
import vipCharacters from "../../public/data/majeurs.json";

export default function VIPCharacterDetail() {
    const { url } = useParams<{ url: string }>();
    const character = vipCharacters.find((c) => c.url === url);

    if (!character) return <p>Character not found</p>;

    return (
        <div className="w-[80%] m-auto">
            <h1 className="text-2xl font-medium">{character.name}</h1>
            <div className="space-y-2 p-2 mt-4 rounded-xl bg-[#987d77] text-white">
                {character.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
            </div>
        </div>
    );
}
