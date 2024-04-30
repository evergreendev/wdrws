import InnerPageContent from "@/app/components/InnerPageContent";
import ContactForm from "@/app/components/ContactForm";

export default async function Page() {

    return (
        <InnerPageContent width={"MD"} content={<div className="py-10"><ContactForm/></div>} title="Contact"/>
    );
}
