import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router";

export default function About() {
    return (
        <div className="w-[1000px] mx-auto">
            <h1 className="text-2xl">
                COMMISSION DE LA MÉMOIRE FRANCO-QUÉBECOISE
            </h1>

            <div className="space-y-5 mt-8">
                <p className="text-lg">
                    <span className="font-dosis">
                        La Commission de la mémoire franco-québécoise a été
                        créée en 1998
                    </span>
                    dans le cadre de la coopération intergouvernementale
                    franco-québécoise. A partir du concept de lieux de mémoire,
                    elle a travaillé à identifier les repères culturels,
                    matériels et immatériels issus de l’histoire commune ou
                    partagée entre français et québécois. Sa mission est
                    d’identifier, de mettre en valeur et de faire connaître ces
                    liens entre le passé et l’avenir au public le plus large
                    possible. La Commission est un acteur reconnu de la relation
                    franco-québécoise. A ce titre, la Commission permanente de
                    coopération franco-québécoise lui apporte son soutien depuis
                    sa création. Les ministères chargés de part et d’autre des
                    relations internationales et de la culture suivent les
                    travaux de la Commission.
                </p>
                <p>
                    <span className="font-dosisBold">Site internet : </span>
                    <Link
                        to={"https://cfqlmc.org/"}
                        className="hover:underline font-medium"
                    >
                        https://cfqlmc.org
                    </Link>
                </p>
                <p>
                    La base de données mise à votre disposition est issue d’un
                    travail de recensement des lieux porteurs de la mémoire
                    commune franco-québécoise. Outre les lieux géographiques
                    liés à l’embarquement, de recrutement ou à l’enrôlement des
                    candidats au départ vers le Nouveau Monde, essentiellement
                    les lieux de naissance ou des origines familiales
                    individuelles de personnages dont l’action ou les œuvres ont
                    un lien indiscutable avec l’histoire de la Nouvelle-France.
                    Plus de 8000 noms ont été retrouvés des lieux disséminés
                    dans toute la France rassemblés dans un travail publié de
                    2008 à 2012 en 12 volumes d’une collection intitulée « Ces
                    villes et villages de France, berceau de l’Amérique
                    française ». Cette recherche redonne vie et incarne ce lien
                    unique et singulier entre la France et l’Amérique française.
                </p>
                <p>
                    Nous rendons hommage à Pierre Nora, historien récemment
                    disparu, dont les travaux sur le concept des « lieux de
                    mémoire » auront été très inspirant pour la Commission, et
                    sa raison d’être reprise dans sa dénomination et gravé dans
                    ses statuts. « La mémoire est la vie toujours portée par des
                    groupes vivants et à ce titre elle est en évolution
                    permanente » écrivait-il.
                </p>
            </div>
            <h1 className="mt-28 text-2xl">Équipe de projet</h1>
            <div className="space-y-7 w-[355px]">
                <div className="mt-8">
                    <p className="text-lg">Alain Bourreau</p>
                    <div className="h-[1px] w-[500px] mt-2 bg-[#cec4c4]"></div>
                    <div>
                        <p>Président de Châtellerault Québec-Acadie</p>
                        <p>alain.bourreau@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p className="text-lg">Murielle Couture</p>
                    <div className="h-[1px] w-[500px] mt-2 bg-[#cec4c4]"></div>
                    <div>
                        <p>
                            Trésorière de la commission franco-québécoise de la
                            mémoire commune memoiresfrance@gmail.com
                        </p>
                    </div>
                </div>
                <div>
                    <div className="space-x-2 flex">
                        <p className="text-lg">Mohammed Ilef Ikhelef</p>
                        <Link
                            to={
                                "https://www.linkedin.com/in/mohammed-ilef-ikhelef-70935a1b2/"
                            }
                        >
                            <CiLinkedin size={28} />
                        </Link>
                    </div>
                    <div className="h-[1px] w-[500px] mt-2 bg-[#cec4c4]"></div>
                    <div>
                        <p>Développeur informatique</p>
                        <p>Site web personnel: https://milef.dev</p>
                        <p>ilefikhelef@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p className="text-lg">Jean-Francois Loiseau</p>
                    <div className="h-[1px] w-[500px] mt-2 bg-[#cec4c4]"></div>
                    <div>
                        <p>Fondateur de perche-quebec.com</p>
                        <p>jfloiseau@perche-quebec.com</p>
                    </div>
                </div>
                <div>
                    <p className="text-lg">Patrick Maillard</p>
                    <div className="h-[1px] w-[500px] mt-2 bg-[#cec4c4]"></div>
                    <div>
                        <p>
                            Secrétaire général de la Commission
                            franco-Québécoise de la mémoire commune
                            memoiresfrance@gmail.com
                        </p>
                        <p>patrickmaillard@orange.fr</p>
                    </div>
                </div>
                <div>
                    <div className="space-x-2 flex">
                        <p className="text-lg">Chantal Moreno</p>
                        <Link to={"https://www.linkedin.com/in/chantalmoreno/"}>
                            <CiLinkedin size={28} />
                        </Link>
                    </div>
                    <div className="h-[1px] w-[500px] mt-2 bg-[#cec4c4]"></div>
                    <div>
                        <p>
                            Co-présidente de la Commission franco-québécoise de
                            la mémoire commune memoiresfrance@gmail.com
                        </p>
                        <p>morenoc30@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p className="text-lg">Denis Sebille</p>
                    <div className="h-[1px] w-[500px] mt-2 bg-[#cec4c4]"></div>
                    <div>
                        <p>Secrétaire de l’Afed Normandie</p>
                        <p>denis.sebille27@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="h-10"></div>
        </div>
    );
}
