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


const Results = ({results, totalResults, isLoading, term}: {
    results: WP_REST_API_Search_Results,
    totalResults: string,
    isLoading: boolean,
    term: string
}) => {
    let finalResults = results.map(result => {
        return {
            ...result,
            url: generateUrlFromSearchResult(result)
        }
    });

    if (finalResults.length > 5) {
        finalResults.length = 5;
        finalResults.push({
            title: `See all results (${totalResults})`,
            id: "all-search",
            url: `/search/${term}`
        } as WP_REST_API_Search_Result)
    }

    if (isLoading) return <div
        className="z-50 text-black bg-white absolute bottom-0 left-0 right-0 flex flex-col translate-y-full border-x-slate-100  border-y-transparent border-2">
        <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-secondary-100 bg-opacity-50 z-20 flex items-center justify-center">
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

    if (results.length === 0) return <div
        className="text-black shadow-md bg-white absolute bottom-0 left-0 right-0 flex flex-col translate-y-full border-x-slate-100  border-y-transparent border-2 p-4 py-2">
        No results found
    </div>;

    return <div
        className="z-50 shadow-md text-black bg-white absolute bottom-0 left-0 right-0 flex flex-col translate-y-full border-x-slate-100  border-y-transparent border-2">
        {
            finalResults.map(result => {
                return <Link className="p-4 py-2 hover:bg-secondary-100" href={result.url} key={result.id}>
                    {result.title}
                </Link>
            })
        }
    </div>
}

const Search = ({dark}: { dark: boolean }) => {
    const resultRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchVal, setSearchVal] = useState("");
    const [debouncedSearch] = useDebounce(searchVal, 700);
    const [searchResults, setSearchResults] = useState<WP_REST_API_Search_Results>([]);
    const [searchResultsIsShowing, setSearchResultsIsShowing] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [totalResults, setTotalResults] = useState("0");

    useEffect(() => {
        if (!debouncedSearch) {
            setSearchResults([]);
            return;
        }

        async function getSearch() {
            setIsSearching(true);
            setSearchResultsIsShowing(true);
            const res = await fetch(`${CMS_URL}search?search=${debouncedSearch}`, {cache: 'no-store'});
            const totalResults = res.headers.get('X-Wp-Total');
            const data: WP_REST_API_Search_Results = await res.json();

            setIsSearching(false);

            setSearchResults(data);

            if (totalResults) {
                setTotalResults(totalResults);
            }

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
            if (event.key === "Escape") {
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
        <input ref={inputRef} onFocus={() => {
            if (debouncedSearch) {
                setSearchResultsIsShowing(true);
            }
        }} className={`bg-transparent outline-0 border-b-2 ${dark ? "border-black" : "border-white text-white"}  w-36`} value={searchVal}
               onChange={(e) => setSearchVal(e.target.value)}/>

        {
            searchResultsIsShowing ? <Results term={debouncedSearch} results={searchResults} totalResults={totalResults}
                                              isLoading={isSearching}/> : ""
        }
        <Image onClick={() => inputRef.current?.focus()} className={`size-6 cursor-pointer ${dark ? "invert" : ""}`} src={searchIcon} alt="Search"/>
    </div>
}

export default Search;