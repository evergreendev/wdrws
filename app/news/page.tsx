import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import InnerPageContent from "@/app/components/InnerPageContent";
import {WP_REST_API_Post} from "wp-types";
import NewsList from "@/app/components/NewsList";

async function getData() : Promise<{data: WP_REST_API_Post[], totalPages: string|null}> {

    /*TODO add pagination*/
    const res = await fetch(
        `${CMS_URL}news?_embed=true&per_page=100&orderby=date`,
        {cache: 'no-store'})

    if (!res.ok) {
        notFound();
    }

    return {
        data: await res.json(),
        totalPages: res.headers.get("x-wp-totalpages")
    };
}

export default async function Page() {
    const data = await getData();

    if (!data.data[0]) {
        notFound();
    }

    const items = await NewsList(data.data,"news");

    return (
        <InnerPageContent width="LG" title="News" content={items} isContent={false}/>
    );
}
