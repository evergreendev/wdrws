'use client'

import searchIcon from "@/public/search-icon.png";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import LoadSpinner from "@/app/components/LoadSpinner";
import {WP_REST_API_Search_Result, WP_REST_API_Search_Results} from "wp-types";
import Link from "next/link";
import {useDebounce} from "use-debounce";
import {generateUrlFromSearchResult} from "@/app/utils/generateUrl";
import {CMS_URL} from "@/constants";


const Results = ({results, isLoading,term}: { results: WP_REST_API_Search_Results, isLoading: boolean, term:string }) => {
    let finalResults = results.map(result => {
        return {
            ...result,
            url: generateUrlFromSearchResult(result)
        }
    });

    if (finalResults.length > 5){
        finalResults.length = 5;
        finalResults.push({title:`See all results (${results.length})`,id:"all-search",url:`/search/${term}`} as WP_REST_API_Search_Result)
    }

    if(isLoading) return <div className="text-black bg-white absolute bottom-0 left-0 right-0 flex flex-col translate-y-full border-x-slate-100  border-y-transparent border-2">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-secondary-100 bg-opacity-50 z-20 flex items-center justify-center">
            <LoadSpinner/>
        </div>
        {
            finalResults.length === 0 ? <div className="p-4 py-2 hover:bg-secondary-100">Searching...</div> : ""
        }
        {
            finalResults.map(result => {
                return <Link className="p-4 py-2 hover:bg-secondary-100" href={result.url} key={result.id}>
                    {result.title}
                </Link>
            })
        }
    </div>;

    if (results.length === 0) return <div className="text-black bg-white absolute bottom-0 left-0 right-0 flex flex-col translate-y-full border-x-slate-100  border-y-transparent border-2 p-4 py-2">
        No results found
    </div>;

    return <div
        className="text-black bg-white absolute bottom-0 left-0 right-0 flex flex-col translate-y-full border-x-slate-100  border-y-transparent border-2">
        {
            finalResults.map(result => {
                return <Link className="p-4 py-2 hover:bg-secondary-100" href={result.url} key={result.id}>
                    {result.title}
                </Link>
            })
        }
    </div>
}

const Search = () => {
    const resultRef = useRef<HTMLDivElement>(null);
    const [searchVal, setSearchVal] = useState("");
    const [debouncedSearch] = useDebounce(searchVal, 700);
    const [searchResults, setSearchResults] = useState<WP_REST_API_Search_Results>([]);
    const [searchResultsIsShowing, setSearchResultsIsShowing] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (!debouncedSearch){
            setSearchResults([]);
            return;
        }
        async function getSearch() {
            setIsSearching(true);
            setSearchResultsIsShowing(true);
            const res = await fetch(`${CMS_URL}search?search=${debouncedSearch}`,  { cache: 'no-store' });
            const data: WP_REST_API_Search_Results = await res.json();

            setIsSearching(false);

            setSearchResults(data);
        }

        getSearch();

    }, [debouncedSearch]);

    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!resultRef.current?.contains(event.target)) {
                setSearchResultsIsShowing(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape"){
                setSearchResultsIsShowing(false);
            }
        }

        window.addEventListener("keydown", handleEscape);
        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [resultRef]);


    return <div className="flex relative" ref={resultRef}>
        <input onFocus={() => {
            if (debouncedSearch){
                setSearchResultsIsShowing(true);
            }
        }} className="bg-transparent outline-0 border-b-2 border-white text-white" value={searchVal}
               onChange={(e) => setSearchVal(e.target.value)}/>

        {
            searchResultsIsShowing ? <Results  term={debouncedSearch} results={searchResults} isLoading={isSearching}/> : ""
        }
        <Image className="size-6" src={searchIcon} alt="Search"/>
    </div>
}

export default Search;