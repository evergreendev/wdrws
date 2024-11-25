import InnerPageContent from "@/app/components/InnerPageContent";
import ContactForm from "@/app/components/ContactForm";
import {notFound} from "next/navigation";
import {CMS_URL} from "@/constants";

async function getData(slug: string) {
    const res = await fetch(`${CMS_URL}pages?slug=${slug}`, { cache: 'no-store' })

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function Page() {
    const data = await getData("contact");

    console.log(data[0])

    if (!data[0]) {
        notFound();
    }

    return (
        <InnerPageContent width={"MD"} content={<div className="py-10"><ContactForm/>
            <div className="mt-6" dangerouslySetInnerHTML={{__html: data[0].content.rendered}}/>
        </div>} title="Contact"/>
    );
}
