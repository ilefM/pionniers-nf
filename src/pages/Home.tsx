import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="sm:mb-8 sm:mt-16 w-3/4 max-w-[600px]">
                <SearchBar />
            </div>
        </div>
    );
}
