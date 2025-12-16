import InnerPageContent from "@/app/components/InnerPageContent";
import FinancialsRequestForm from "@/app/components/FinancialsRequestForm";

export default async function Page() {
    return (
        <InnerPageContent
            width={"MD"}
            content={
                <div className="py-10">
                    <p className="mb-6 text-secondary-500">
                        To receive a copy of our 2025 financial information, please complete the form below.
                    </p>
                    <FinancialsRequestForm/>
                </div>
            }
            title="2025 Financials"
        />
    );
}
