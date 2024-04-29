import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import InnerPageContent from "@/app/components/InnerPageContent";
import PostList from "@/app/components/PostList";

function parseTitleFromSlug(slug: string): string {
    let capitalizeNext = true;
    const arr = slug.replaceAll("-", " ").split("").map(x => {
        if (capitalizeNext) {
            capitalizeNext = false;
            return x.toUpperCase();
        }

        if (x === " ") capitalizeNext = true;

        return x;
    });

    arr.push("s");

    return arr.join("");
}

async function getCategory(slug: string) {
    const taxRes = await fetch(`${CMS_URL}material-type?slug=${slug}`, {cache: 'no-store'})

    return taxRes.json();
}

async function getData(slug: string) {
    const category = await getCategory(slug);
    if (!category[0]) {
        notFound();
    }
    /*TODO add pagination*/
    const res = await fetch(
        `${CMS_URL}material?material-type=${category[0].id}&_embed=true`,
        {cache: 'no-store', next: {tags: [slug]}})

    if (!res.ok) {
        notFound();
    }

    return {
        data: await res.json(),
        totalPages: res.headers.get("x-wp-totalpages")
    };
}

export default async function Page({params}: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data.data[0]) {
        notFound();
    }

    const items = await PostList(data.data, "material");

    return (
        <InnerPageContent width="LG" isContent={false} title={parseTitleFromSlug(params.slug)} content={items}/>
    );
}
