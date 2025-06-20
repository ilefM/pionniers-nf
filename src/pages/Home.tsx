import "leaflet/dist/leaflet.css";
import vipCharacters from "../../public/data/majeurs.json";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className="flex flex-col h-full w-full items-center font-dosis">
            <div className="bg-[#987d77] p-4 rounded-xl mb-8 font-dosis">
                <p className="text-6xl font-dosis">
                    Traces de la Nouvelle France
                </p>
            </div>
            <div className="flex max-w-[1800px] mx- justify-between items-start space-x-20">
                <div className="flex flex-col items-start">
                    <p className="text-5xl font-dosisBold text-[#1C1C1C] mb-4 text-center mt-8">
                        Le passé pour éclairer l'avenir
                    </p>
                    <div className="flex justify-between max-w-[800px] space-x-4 mt-11">
                        <div className="flex flex-col justify-end">
                            <img
                                className="max-w-[140px] w-1/3 sm:w-[200px] "
                                src="/images/cartier.png"
                                alt="François Cartier"
                            />
                        </div>

                        <div className="w-[400px] p-4 bg-[#987d77] h-fit rounded-4xl text-white shadow-2xl">
                            <p className="mb-3">
                                Bonjour, je suis François Cartier !
                            </p>
                            <p>
                                Je suis originaire de Monts-sur-Guesnes, coureur
                                de bois et ami des Premières Nations, j’ai
                                traversé l’Atlantique pour explorer les vastes
                                terres du Nouveau Monde. J’ai été l'interprète
                                de Pierre Dugua de Mons. Je serai ton guide à
                                travers l’histoire passionnante des pionniers
                                qui ont façonné l’Amérique du Nord !
                            </p>
                        </div>
                    </div>
                </div>

                <img src="/images/decos.png" className="w-[650px]" alt="" />
            </div>

            <MajorCharacters />

            <div className="my-8 w-[80%]">
                <p className="font-mono">
                    Faire revivre l’histoire de la Nouvelle France au travers de
                    l’histoire de ses hommes et femmes qui ont traversé
                    l’Atlantique, à la découverte des lieux d’où ils sont
                    partis. Cette mémoire commune enfin accessible au travers de
                    cette base de données en ligne est un outil utile de
                    recherche géographique sur les origines, une ressource pour
                    la valorisation touristique. Ce site est dédié à Pierre Nora
                    (+), historien français, qui a forgé la notion de lieux de
                    mémoire.
                </p>
            </div>
        </div>
    );
}

function MajorCharacters() {
    return (
        <div className="flex flex-col space-y-12 items-center mx-4 mt-32">
            <div className="flex justify-between items-center w-full">
                <p className="text-lg font-semibold w-[800px] text-start">
                    Suivez François Cartier ! Notre pionnier sur les traces de
                    la Nouvelle France, au nombre de ces milliers d’aventuriers,
                    à la suite de Dugas de Mons, Samuel de Champlain, Jeanne
                    Mance, Paul Chomedey de Maisonneuve… Ils ont tous contribué
                    à la construction de la Nouvelle France au 17e et 18e siècle
                    en Amérique du Nord, à la fondation du Québec et de
                    Montréal.
                </p>

                <Link
                    to={"/memoire-lieux-et-personnages"}
                    className="p-4 mt-2 mb-10 bg-[#4a4e69] text-white text-lg text-center rounded-2xl shadow-lg"
                >
                    Explorer les lieux et personnages
                </Link>
            </div>
            <div className="flex items-center gap-6 justify-between space-x-4 px-5 rounded-4xl bg-[#987d77]">
                <img
                    src="/images/france.png"
                    className="w-[700px] self-start"
                    alt="France map"
                />

                <div className="grid grid-cols-2 gap-2">
                    {vipCharacters.map((char) => (
                        <Link
                            key={char.url}
                            to={`/personnages-majeurs/${char.url}`}
                            className="w-[280px] flex items-center gap-x-4 rounded-2xl p-2 bg-[#d5bdaf] no-underline"
                        >
                            <img
                                src={`images/majeurs/${char.image}`}
                                className="w-[60px] h-[60px] object-cover"
                                alt={char.name}
                            />
                            <p className="font-semibold">{char.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
