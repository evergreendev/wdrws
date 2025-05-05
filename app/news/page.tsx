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

    const contentWithIframe = (
        <>
            <div className="mb-6">
                <iframe src="https://embed.acast.com/$/5e912600e188b1a04155c38c/water-for-the-west-with-kristen-conzet-and-cory-chornee?" 
                        frameBorder="0" 
                        width="100%" 
                        height="110px" 
                        allow="autoplay"></iframe>
            </div>
            {items}
        </>
    );

    return (
        <InnerPageContent width="LG" title="News" content={contentWithIframe} isContent={false}/>
    );
}
