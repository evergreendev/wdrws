import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import InnerPageContent from "@/app/components/InnerPageContent";
import {WP_REST_API_Search_Results} from "wp-types";
import {generateUrlFromSearchResult} from "@/app/utils/generateUrl";
import Link from "next/link";



async function getData(slug: string) {
    const res = await fetch(`${CMS_URL}search?search=${slug}&per_page=100`, {cache: 'no-store'});
    const totalResults = res.headers.get('X-Wp-Total');
    const data: WP_REST_API_Search_Results = await res.json();

    if (!res.ok) {
        notFound();
    }

    return data;
}

export default async function Page({params}: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data[0]) {
        notFound();
    }

    const searchResults = data.map(item => {
        return {
            ...item,
            url: generateUrlFromSearchResult(item),
        }
    })

    const resultsComponents = searchResults.map(result => {
        return <Link className="block mb-6 bg-secondary-100 p-3" href={result.url} key={result.url}>
            <span className="text-xl font-bold" dangerouslySetInnerHTML={{__html:result.title}}/>
        </Link>
    })

    return (
        <InnerPageContent width="LG" title={`Search Results`} content={resultsComponents}/>
    );
}
