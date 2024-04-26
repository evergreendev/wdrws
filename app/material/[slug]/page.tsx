import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import InnerPageContent from "@/app/components/InnerPageContent";

async function getData(slug: string) {
    const res = await fetch(`${CMS_URL}material?slug=${slug}`,{next: {tags: [slug]}})

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function Page({params}: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data[0]) {
        notFound();
    }

    const containerWidth = data[0]?.acf?.page_container_width ? data[0].acf.page_container_width : "XL";

    return (
        <InnerPageContent width={containerWidth} title={data[0].title.rendered} content={data[0].content.rendered}/>
    );
}
