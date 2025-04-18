import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import InnerPageContent from "@/app/components/InnerPageContent";
import PostList from "@/app/components/PostList";
import {Metadata, ResolvingMetadata} from "next";

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

export async function generateMetadata({params}: {
    params: { slug: string }
}, parent: ResolvingMetadata): Promise<Metadata> {

    return {
        title: "Western Dakota Regional Water System - " + parseTitleFromSlug(params.slug),
        description: "Ensuring quality, abundant water to all corners of western South Dakota",
    }
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
async function getPageData(slug: string) {
    const res = await fetch(`${CMS_URL}pages?slug=${slug}`, { cache: 'no-store' })

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function Page({params}: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data.data[0]) {
        notFound();
    }
    const pageData = await getPageData(params.slug);
    console.log(pageData);

    const items = await PostList(data.data, "material");

    return (
        <InnerPageContent width="LG" isContent={false} title={parseTitleFromSlug(params.slug)} content={
            <div>
                {pageData[0] && <div className="mt-6" dangerouslySetInnerHTML={{__html: pageData[0].content.rendered}}/>}
                {items}
            </div>}/>
    );
}
