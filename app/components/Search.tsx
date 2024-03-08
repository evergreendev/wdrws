import searchIcon from "@/public/search-icon.png";
import Image from "next/image";

const Search = () => {
    return <div className="flex">
        <input/>
        <Image className="size-6" src={searchIcon} alt="Search"/>
    </div>
}

export default Search;