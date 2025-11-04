import InnerPageContent from "@/app/components/InnerPageContent";
import MembershipForm from "@/app/components/MembershipForm";

export default async function Page() {

    const MemberLevel = ({title, price, content}: { title: string, price: string, content: JSX.Element }) => {
        return (<div className="border-b-4 border-b-primary-300 bg-secondary-100 px-8 pt-8 mb-6">

            <div className="text-3xl font-newsreader text-secondary-500">{title} <span
                className="text-2xl mb-1 text-secondary-500"> {price}</span></div>
            <div>Annual Dues</div>
            {content}
        </div>)
    }

    return (
        <InnerPageContent width={"MD"} content={
            <div className="py-10">
                <MembershipForm/>
                <MemberLevel title="Class 1 Member" price="$1500"
                             content={
                                 <ul>
                                     <li>Voting Member</li>
                                     <li>An organization with at least 200 separate and individual residential
                                         connections or commercial equivalent
                                     </li>
                                 </ul>
                             }/>
                <MemberLevel title="Class 2 Member" price="$750"
                             content={
                                 <ul>
                                     <li>Voting Member</li>
                                     <li>An organization with less than 200 separate
                                         and individual connections or commercial
                                         equivalent or an organization with over 200
                                         separate and individual connections that are
                                         fully built out
                                     </li>
                                 </ul>
                             }/>
                <MemberLevel title="Associate Member" price="$375"
                             content={
                                 <ul>
                                     <li>Non-voting Member</li>
                                     <li>Any firm, corporation, political entity, or
                                         subdivision not eligible to be a voting member
                                         but desiring to support the Association.
                                     </li>
                                 </ul>
                             }/>
                <MemberLevel title="Supporting Individual" price="$50"
                             content={
                                 <ul>
                                     <li>Non-member</li>
                                     <li>
                                         Any individual interested party desiring to
                                         support the Association
                                     </li>
                                 </ul>
                             }/>
            </div>
        } title="Membership"/>
    );
}
